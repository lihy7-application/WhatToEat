import { Dish, HistoryRecord, UserPreferences } from '@/types';
import { dishes } from '@/data/dishes';

const RECENT_EXCLUDE_COUNT = 5;
const EXPLORATION_RATE = 0.1;

export function getRecommendation(
  history: HistoryRecord[],
  preferences: UserPreferences
): Dish | null {
  if (dishes.length === 0) return null;

  const recentDishIds = new Set(
    history
      .slice(-RECENT_EXCLUDE_COUNT)
      .map(h => h.dishId)
  );

  const candidates = dishes.filter(d => !recentDishIds.has(d.id));
  if (candidates.length === 0) {
    return dishes[Math.floor(Math.random() * dishes.length)];
  }

  const shouldExplore = Math.random() < EXPLORATION_RATE;

  if (shouldExplore) {
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  const scored = candidates.map(dish => {
    let score = 0;

    if (preferences.likedCuisines.includes(dish.cuisine)) {
      score += 3;
    }
    if (preferences.dislikedCuisines.includes(dish.cuisine)) {
      score -= 5;
    }

    const likedTags = preferences.likedIngredients;
    const dislikedTags = preferences.dislikedIngredients;

    const dishIngredients = dish.ingredients;
    const likedCount = dishIngredients.filter(i => likedTags.includes(i)).length;
    const dislikedCount = dishIngredients.filter(i => dislikedTags.includes(i)).length;

    score += likedCount * 0.5;
    score -= dislikedCount * 1;

    return { dish, score };
  });

  const maxScore = Math.max(...scored.map(s => s.score));
  const topCandidates = scored.filter(s => s.score === maxScore);

  return topCandidates[Math.floor(Math.random() * topCandidates.length)].dish;
}

export function calculatePreferencesFromHistory(
  history: HistoryRecord[]
): Partial<UserPreferences> {
  const preferences: UserPreferences = {
    likedCuisines: [],
    dislikedCuisines: [],
    likedIngredients: [],
    dislikedIngredients: [],
  };

  const cuisineCount: Record<string, { like: number; dislike: number }> = {};
  const ingredientCount: Record<string, { like: number; dislike: number }> = {};

  for (const record of history) {
    const dish = dishes.find(d => d.id === record.dishId);
    if (!dish) continue;

    if (!cuisineCount[dish.cuisine]) {
      cuisineCount[dish.cuisine] = { like: 0, dislike: 0 };
    }
    if (record.feedback === 'like') {
      cuisineCount[dish.cuisine].like++;
      dish.ingredients.forEach(ing => {
        if (!ingredientCount[ing]) ingredientCount[ing] = { like: 0, dislike: 0 };
        ingredientCount[ing].like++;
      });
    } else {
      cuisineCount[dish.cuisine].dislike++;
      dish.ingredients.forEach(ing => {
        if (!ingredientCount[ing]) ingredientCount[ing] = { like: 0, dislike: 0 };
        ingredientCount[ing].dislike++;
      });
    }
  }

  const threshold = 2;

  for (const [cuisine, count] of Object.entries(cuisineCount)) {
    if (count.like >= threshold) preferences.likedCuisines.push(cuisine);
    if (count.dislike >= threshold) preferences.dislikedCuisines.push(cuisine);
  }

  for (const [ing, count] of Object.entries(ingredientCount)) {
    if (count.like >= threshold) preferences.likedIngredients.push(ing);
    if (count.dislike >= threshold) preferences.dislikedIngredients.push(ing);
  }

  return preferences;
}
