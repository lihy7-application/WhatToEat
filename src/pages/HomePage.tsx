import { useState, useEffect } from 'react';
import { User, HistoryRecord } from '@/types';
import { Restaurant } from '@/data/restaurants';
import { getRestaurantRecommendation, getCategoryName, getCategoryEmoji } from '@/services/restaurantRecommendation';
import { addHistoryRecord, getHistory } from '@/services/history';

interface HomePageProps {
  user: User;
  onNavigate: (page: 'home' | 'history' | 'preferences') => void;
}

export default function HomePage({ user, onNavigate }: HomePageProps) {
  const [currentRestaurant, setCurrentRestaurant] = useState<Restaurant | null>(null);
  const [history, setHistory] = useState<HistoryRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [animating, setAnimating] = useState(false);

  const loadHistory = async () => {
    try {
      const records = await getHistory(user.id);
      setHistory(records);
    } catch (error) {
      console.error('Failed to load history:', error);
    }
  };

  useEffect(() => {
    loadHistory();
  }, [user.id]);

  const handleRecommend = async () => {
    setAnimating(true);
    setLoading(true);

    try {
      const restaurant = getRestaurantRecommendation(history);
      setCurrentRestaurant(restaurant);
    } catch (error) {
      console.error('Recommendation failed:', error);
    } finally {
      setLoading(false);
      setTimeout(() => setAnimating(false), 300);
    }
  };

  const handleFeedback = async (feedback: 'like' | 'dislike') => {
    if (!currentRestaurant) return;

    setLoading(true);
    try {
      await addHistoryRecord(user.id, currentRestaurant.id, currentRestaurant.name, feedback);
      await loadHistory();
      setCurrentRestaurant(null);
    } catch (error) {
      console.error('Failed to save feedback:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-orange-600">WhatToEat</h1>
            <p className="text-sm text-gray-500">今天吃什么餐厅？</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">{user.displayName || user.email}</span>
            <nav className="flex gap-2">
              <button
                onClick={() => onNavigate('home')}
                className="px-3 py-1.5 text-sm font-medium text-orange-600 bg-orange-50 rounded-lg"
              >
                推荐
              </button>
              <button
                onClick={() => onNavigate('history')}
                className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
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
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Recommendation Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          {currentRestaurant ? (
            <div
              className={`p-8 transition-all duration-300 ${
                animating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
              }`}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{getCategoryEmoji(currentRestaurant.category)}</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{currentRestaurant.name}</h2>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                    {getCategoryName(currentRestaurant.category)}
                  </span>
                  {currentRestaurant.cuisine && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      {currentRestaurant.cuisine}
                    </span>
                  )}
                </div>
              </div>

              {/* Feedback Buttons */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => handleFeedback('dislike')}
                  disabled={loading}
                  className="flex-1 py-4 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <span className="text-xl">👎</span>
                  不喜欢
                </button>
                <button
                  onClick={() => handleFeedback('like')}
                  disabled={loading}
                  className="flex-1 py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <span className="text-xl">❤️</span>
                  喜欢
                </button>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="text-6xl mb-4">🍽️</div>
              <h2 className="text-xl font-medium text-gray-700 mb-2">准备好开始了吗？</h2>
              <p className="text-gray-500 mb-6">点击下方按钮获取今日餐厅推荐</p>
              <button
                onClick={handleRecommend}
                disabled={loading}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl transition-all disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {loading ? '推荐中...' : '🍜 开始推荐'}
              </button>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        {!currentRestaurant && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-medium text-gray-700 mb-3">最近推荐</h3>
            {history.length > 0 ? (
              <div className="space-y-2">
                {history.slice(0, 5).map((record) => (
                  <div
                    key={record.id}
                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <span>{record.feedback === 'like' ? '❤️' : '👎'}</span>
                      <span className="text-gray-700">{record.dishName}</span>
                    </div>
                    <span className="text-xs text-gray-400">
                      {record.feedbackAt.toLocaleDateString('zh-CN')}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">暂无推荐记录</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
