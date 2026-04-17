// 用户偏好
export interface UserPreferences {
  likedCuisines: string[];
  dislikedCuisines: string[];
  likedIngredients: string[];
  dislikedIngredients: string[];
}

// 用户文档
export interface User {
  id: string;
  email: string;
  displayName?: string;
  createdAt: Date;
  preferences: UserPreferences;
}

// 历史记录
export interface HistoryRecord {
  id: string;
  dishId: string;
  dishName: string;
  feedback: 'like' | 'dislike';
  recommendedAt: Date;
  feedbackAt: Date;
}

// 菜品
export interface Dish {
  id: string;
  name: string;
  cuisine: string;
  tags: string[];
  ingredients: string[];
  imageUrl?: string;
}

// 推荐结果
export interface Recommendation {
  dish: Dish;
  score: number;
}

// 餐厅推荐结果
export interface RestaurantRecommendation {
  restaurant: Restaurant;
  score: number;
}

export interface Restaurant {
  id: string;
  name: string;
  category: 'fast_food' | 'chinese' | 'buffet' | 'home_kitchen';
  cuisine?: string;
}
