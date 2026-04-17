/**
 * 每周菜单数据
 * 包含每天中午和晚上的所有候选菜品
 */

export type DayKey = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';
export type MealKey = 'lunch' | 'dinner';

/** 每天每餐的候选菜品列表 */
export interface DailyCandidates {
  lunch: string[];
  dinner: string[];
}

/** 每周菜单 */
export interface WeeklyMenu {
  monday: DailyCandidates;
  tuesday: DailyCandidates;
  wednesday: DailyCandidates;
  thursday: DailyCandidates;
  friday: DailyCandidates;
}

/** 所有候选菜品（去重） */
export const allDishes: string[] = [
  '铁锅炖大鹅',
  '酸菜鱼',
  '木须肉',
  '干煸四季豆',
  '塌塌米蒸肉',
  '酸汤肥牛',
  '小炒肉',
  '辣子鸡',
  '酸菜粉丝',
  '羊肉汤面',
  '小锅米线',
  '炣饼',
];

export const weeklyMenu: WeeklyMenu = {
  monday: {
    lunch: ['铁锅炖大鹅', '酸菜鱼', '木须肉', '干煸四季豆', '塌塌米蒸肉'],
    dinner: ['酸菜鱼', '酸汤肥牛', '小炒肉', '辣子鸡', '干煸四季豆'],
  },
  tuesday: {
    lunch: ['铁锅炖大鹅', '酸菜鱼', '辣子鸡', '小炒肉', '干煸四季豆'],
    dinner: ['酸汤肥牛', '酸菜粉丝', '塌塌米蒸肉', '羊肉汤面', '小锅米线'],
  },
  wednesday: {
    lunch: ['铁锅炖大鹅', '羊肉汤面', '干煸四季豆', '辣子鸡', '小炒肉'],
    dinner: ['木须肉', '酸菜粉丝', '塌塌米蒸肉', '酸菜鱼', '羊肉汤面'],
  },
  thursday: {
    lunch: ['干煸四季豆', '酸汤肥牛', '小锅米线', '酸菜鱼', '羊肉汤面'],
    dinner: ['酸菜粉丝', '羊肉汤面', '小炒肉', '辣子鸡', '酸菜鱼'],
  },
  friday: {
    lunch: ['辣子鸡', '酸菜鱼', '羊肉汤面', '小炒肉', '炣饼'],
    dinner: ['辣子鸡', '酸菜鱼', '羊肉汤面', '小炒肉', '炣饼'],
  },
};

/**
 * 根据日期和餐次获取候选菜品列表
 */
export function getCandidates(day: DayKey, meal: MealKey): string[] {
  return weeklyMenu[day][meal];
}

/**
 * 获取某天的所有候选菜品（中午+晚上）
 */
export function getAllCandidatesForDay(day: DayKey): string[] {
  const { lunch, dinner } = weeklyMenu[day];
  return [...lunch, ...dinner];
}

/**
 * 判断某个菜名是否在候选列表中
 */
export function isCandidateDish(dishName: string): boolean {
  return allDishes.includes(dishName);
}
