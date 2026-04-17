import { User, UserPreferences, HistoryRecord } from '@/types';

const STORAGE_KEYS = {
  USER: 'whattoeat_user',
  HISTORY: 'whattoeat_history',
} as const;

const defaultPreferences: UserPreferences = {
  likedCuisines: [],
  dislikedCuisines: [],
  likedIngredients: [],
  dislikedIngredients: [],
};

// 生成简单的本地用户ID
function generateUserId(): string {
  return 'local_user_' + Date.now().toString(36);
}

// 用户相关
export function getLocalUser(): User {
  const stored = localStorage.getItem(STORAGE_KEYS.USER);
  if (stored) {
    try {
      const user = JSON.parse(stored);
      return {
        ...user,
        createdAt: new Date(user.createdAt),
      };
    } catch {
      // ignore
    }
  }

  // 创建默认用户
  const newUser: User = {
    id: generateUserId(),
    email: 'local@device',
    displayName: '本地用户',
    createdAt: new Date(),
    preferences: defaultPreferences,
  };
  saveLocalUser(newUser);
  return newUser;
}

export function saveLocalUser(user: User): void {
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
}

export function updateLocalPreferences(preferences: UserPreferences): void {
  const user = getLocalUser();
  user.preferences = preferences;
  saveLocalUser(user);
}

// 历史记录相关
export function getLocalHistory(): HistoryRecord[] {
  const stored = localStorage.getItem(STORAGE_KEYS.HISTORY);
  if (!stored) return [];

  try {
    const history = JSON.parse(stored);
    return history.map((record: any) => ({
      ...record,
      recommendedAt: new Date(record.recommendedAt),
      feedbackAt: new Date(record.feedbackAt),
    }));
  } catch {
    return [];
  }
}

export function addLocalHistoryRecord(
  dishId: string,
  dishName: string,
  feedback: 'like' | 'dislike'
): HistoryRecord {
  const history = getLocalHistory();

  const newRecord: HistoryRecord = {
    id: 'record_' + Date.now().toString(36),
    dishId,
    dishName,
    feedback,
    recommendedAt: new Date(),
    feedbackAt: new Date(),
  };

  history.unshift(newRecord); // 添加到开头
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));

  return newRecord;
}

export function deleteLocalHistoryRecord(recordId: string): void {
  const history = getLocalHistory();
  const filtered = history.filter(r => r.id !== recordId);
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(filtered));
}

export function clearLocalHistory(): void {
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify([]));
}

// 导出所有数据（用于可能的备份）
export function exportAllData(): {
  user: User;
  history: HistoryRecord[];
} {
  return {
    user: getLocalUser(),
    history: getLocalHistory(),
  };
}

// 导入数据（用于恢复备份）
export function importData(data: { user: User; history: HistoryRecord[] }): void {
  saveLocalUser(data.user);
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(data.history));
}
