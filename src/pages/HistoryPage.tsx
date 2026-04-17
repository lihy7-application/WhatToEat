import { useState, useEffect } from 'react';
import { User, HistoryRecord } from '@/types';
import { getHistory, deleteHistoryRecord } from '@/services/history';

interface HistoryPageProps {
  user: User;
  onNavigate: (page: 'home' | 'history' | 'preferences') => void;
}

export default function HistoryPage({ user, onNavigate }: HistoryPageProps) {
  const [records, setRecords] = useState<HistoryRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'like' | 'dislike'>('all');

  const loadHistory = async () => {
    setLoading(true);
    try {
      const history = await getHistory(user.id, 200);
      setRecords(history);
    } catch (error) {
      console.error('Failed to load history:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, [user.id]);

  const handleDelete = async (recordId: string) => {
    try {
      await deleteHistoryRecord(user.id, recordId);
      setRecords(records.filter((r) => r.id !== recordId));
    } catch (error) {
      console.error('Failed to delete record:', error);
    }
  };

  const filteredRecords = records.filter((record) => {
    if (filter === 'all') return true;
    return record.feedback === filter;
  });

  const likeCount = records.filter((r) => r.feedback === 'like').length;
  const dislikeCount = records.filter((r) => r.feedback === 'dislike').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-orange-600">历史记录</h1>
            <p className="text-sm text-gray-500">查看你的推荐历史</p>
          </div>
          <nav className="flex gap-2">
            <button
              onClick={() => onNavigate('home')}
              className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              推荐
            </button>
            <button
              onClick={() => onNavigate('history')}
              className="px-3 py-1.5 text-sm font-medium text-orange-600 bg-orange-50 rounded-lg"
            >
              历史
            </button>
            <button
              onClick={() => onNavigate('preferences')}
              className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              偏好
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-gray-800">{records.length}</p>
              <p className="text-sm text-gray-500">总记录</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">{likeCount}</p>
              <p className="text-sm text-gray-500">喜欢</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-400">{dislikeCount}</p>
              <p className="text-sm text-gray-500">不喜欢</p>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-4">
          {(['all', 'like', 'dislike'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                filter === f
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {f === 'all' ? '全部' : f === 'like' ? '❤️ 喜欢' : '👎 不喜欢'}
            </button>
          ))}
        </div>

        {/* History List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-gray-400">加载中...</div>
          ) : filteredRecords.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {filteredRecords.map((record) => (
                <div
                  key={record.id}
                  className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{record.feedback === 'like' ? '❤️' : '👎'}</span>
                    <div>
                      <p className="font-medium text-gray-800">{record.dishName}</p>
                      <p className="text-xs text-gray-400">
                        {record.feedbackAt.toLocaleDateString('zh-CN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(record.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    title="删除"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center text-gray-400">
              {filter === 'all' ? '暂无历史记录' : `暂无${filter === 'like' ? '喜欢' : '不喜欢'}的记录`}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
