import { HistoryRecord } from '@/types';
import {
  getLocalHistory,
  addLocalHistoryRecord,
  deleteLocalHistoryRecord,
} from './storage';

export async function addHistoryRecord(
  _userId: string,
  dishId: string,
  dishName: string,
  feedback: 'like' | 'dislike'
): Promise<string> {
  // userId 在本地存储中被忽略，因为只有单一本地用户
  const record = addLocalHistoryRecord(dishId, dishName, feedback);
  return record.id;
}

export async function getHistory(
  _userId: string,
  maxRecords: number = 100
): Promise<HistoryRecord[]> {
  // userId 在本地存储中被忽略
  const history = getLocalHistory();
  return history.slice(0, maxRecords);
}

export async function deleteHistoryRecord(
  _userId: string,
  recordId: string
): Promise<void> {
  // userId 在本地存储中被忽略
  deleteLocalHistoryRecord(recordId);
}

export async function getRecentDishIds(
  _userId: string,
  count: number = 5
): Promise<string[]> {
  const history = getLocalHistory();
  return history.slice(0, count).map(r => r.dishId);
}
