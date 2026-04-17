import { Restaurant } from '@/data/restaurants';
import { HistoryRecord } from '@/types';
import { restaurantCandidates } from '@/data/restaurants';

const RECENT_EXCLUDE_COUNT = 5;
const EXPLORATION_RATE = 0.1;

export function getRestaurantRecommendation(
  history: HistoryRecord[]
): Restaurant | null {
  if (restaurantCandidates.length === 0) return null;

  // 获取最近推荐的餐厅ID
  const recentRestaurantIds = new Set(
    history
      .slice(-RECENT_EXCLUDE_COUNT)
      .map(h => h.dishId) // dishId 在这里是 restaurant id
  );

  // 过滤掉最近推荐过的
  const candidates = restaurantCandidates.filter(r => !recentRestaurantIds.has(r.id));

  if (candidates.length === 0) {
    // 如果所有餐厅都在最近推荐过，随机返回一个
    return restaurantCandidates[Math.floor(Math.random() * restaurantCandidates.length)];
  }

  // 探索概率：10% 随机推荐
  const shouldExplore = Math.random() < EXPLORATION_RATE;

  if (shouldExplore) {
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  // 偏好推荐：根据用户历史反馈计算各分类权重
  const categoryScore: Record<string, number> = {
    'fast_food': 0,
    'chinese': 0,
    'buffet': 0,
    'home_kitchen': 0,
  };

  const cuisineScore: Record<string, number> = {};

  for (const record of history) {
    const restaurant = restaurantCandidates.find(r => r.id === record.dishId);
    if (!restaurant) continue;

    if (record.feedback === 'like') {
      categoryScore[restaurant.category] = (categoryScore[restaurant.category] || 0) + 1;
      if (restaurant.cuisine) {
        cuisineScore[restaurant.cuisine] = (cuisineScore[restaurant.cuisine] || 0) + 1;
      }
    } else {
      categoryScore[restaurant.category] = (categoryScore[restaurant.category] || 0) - 0.5;
      if (restaurant.cuisine) {
        cuisineScore[restaurant.cuisine] = (cuisineScore[restaurant.cuisine] || 0) - 0.5;
      }
    }
  }

  // 评分候选餐厅
  const scored = candidates.map(restaurant => {
    let score = 0;

    // 分类偏好加分
    score += categoryScore[restaurant.category] || 0;

    // 菜系偏好加分
    if (restaurant.cuisine) {
      score += cuisineScore[restaurant.cuisine] || 0;
    }

    return { restaurant, score };
  });

  // 找出最高分的餐厅
  const maxScore = Math.max(...scored.map(s => s.score));
  const topCandidates = scored.filter(s => s.score === maxScore);

  // 从最高分中随机选择
  return topCandidates[Math.floor(Math.random() * topCandidates.length)].restaurant;
}

export function getCategoryName(category: string): string {
  const names: Record<string, string> = {
    'fast_food': '快餐',
    'chinese': '中式',
    'buffet': '自助餐',
    'home_kitchen': '妈妈厨房',
  };
  return names[category] || category;
}

export function getCategoryEmoji(category: string): string {
  const emojis: Record<string, string> = {
    'fast_food': '🍔',
    'chinese': '🍜',
    'buffet': '🍽️',
    'home_kitchen': '🏠',
  };
  return emojis[category] || '🍴';
}
