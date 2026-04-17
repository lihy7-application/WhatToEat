import { useState, useEffect, useCallback } from 'react';
import { User, UserPreferences } from '@/types';
import { cuisines, allIngredients } from '@/data/dishes';
import { updateLocalPreferences } from '@/services/storage';

interface PreferencesPageProps {
  user: User;
  onNavigate: (page: 'home' | 'history' | 'preferences') => void;
  onUserUpdate?: (user: User) => void;
}

export default function PreferencesPage({ user, onNavigate, onUserUpdate }: PreferencesPageProps) {
  const [preferences, setPreferences] = useState<UserPreferences>(user.preferences);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setPreferences(user.preferences);
  }, [user.preferences]);

  const handleSave = useCallback(() => {
    try {
      updateLocalPreferences(preferences);
      // 通知父组件用户已更新
      if (onUserUpdate) {
        onUserUpdate({ ...user, preferences });
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (error) {
      console.error('Failed to save preferences:', error);
    }
  }, [preferences, user, onUserUpdate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-orange-600">口味偏好</h1>
            <p className="text-sm text-gray-500">设置你喜欢的口味</p>
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
              className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              历史
            </button>
            <button
              onClick={() => onNavigate('preferences')}
              className="px-3 py-1.5 text-sm font-medium text-orange-600 bg-orange-50 rounded-lg"
            >
              偏好
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Save Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={handleSave}
            className={`px-6 py-2 font-medium rounded-lg transition-all ${
              saved
                ? 'bg-green-500 text-white'
                : 'bg-orange-500 hover:bg-orange-600 text-white'
            }`}
          >
            {saved ? '✓ 已保存' : '保存设置'}
          </button>
        </div>

        {/* Liked Cuisines */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
          <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-xl">❤️</span> 喜欢的菜系
          </h3>
          <div className="flex flex-wrap gap-2">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine}
                onClick={() => {
                  const arr = preferences.likedCuisines.includes(cuisine)
                    ? preferences.likedCuisines.filter(i => i !== cuisine)
                    : [...preferences.likedCuisines, cuisine];
                  setPreferences({ ...preferences, likedCuisines: arr });
                  setSaved(false);
                }}
                className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                  preferences.likedCuisines.includes(cuisine)
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cuisine}
              </button>
            ))}
          </div>
        </div>

        {/* Disliked Cuisines */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
          <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-xl">👎</span> 不喜欢的菜系
          </h3>
          <div className="flex flex-wrap gap-2">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine}
                onClick={() => {
                  const arr = preferences.dislikedCuisines.includes(cuisine)
                    ? preferences.dislikedCuisines.filter(i => i !== cuisine)
                    : [...preferences.dislikedCuisines, cuisine];
                  setPreferences({ ...preferences, dislikedCuisines: arr });
                  setSaved(false);
                }}
                className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                  preferences.dislikedCuisines.includes(cuisine)
                    ? 'bg-gray-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cuisine}
              </button>
            ))}
          </div>
        </div>

        {/* Liked Ingredients */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
          <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-xl">🥬</span> 喜欢的食材
          </h3>
          <p className="text-sm text-gray-500 mb-3">点击添加或移除喜欢的食材</p>
          <div className="flex flex-wrap gap-2">
            {allIngredients.slice(0, 50).map((ingredient) => (
              <button
                key={ingredient}
                onClick={() => {
                  const arr = preferences.likedIngredients.includes(ingredient)
                    ? preferences.likedIngredients.filter(i => i !== ingredient)
                    : [...preferences.likedIngredients, ingredient];
                  setPreferences({ ...preferences, likedIngredients: arr });
                  setSaved(false);
                }}
                className={`px-2 py-1 text-xs rounded-full transition-colors ${
                  preferences.likedIngredients.includes(ingredient)
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {ingredient}
              </button>
            ))}
          </div>
        </div>

        {/* Disliked Ingredients */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
          <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-xl">🚫</span> 不喜欢的食材
          </h3>
          <p className="text-sm text-gray-500 mb-3">点击添加或移除不喜欢的食材</p>
          <div className="flex flex-wrap gap-2">
            {allIngredients.slice(0, 50).map((ingredient) => (
              <button
                key={ingredient}
                onClick={() => {
                  const arr = preferences.dislikedIngredients.includes(ingredient)
                    ? preferences.dislikedIngredients.filter(i => i !== ingredient)
                    : [...preferences.dislikedIngredients, ingredient];
                  setPreferences({ ...preferences, dislikedIngredients: arr });
                  setSaved(false);
                }}
                className={`px-2 py-1 text-xs rounded-full transition-colors ${
                  preferences.dislikedIngredients.includes(ingredient)
                    ? 'bg-gray-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {ingredient}
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="bg-orange-50 rounded-2xl p-4 text-sm text-orange-700">
          <p>💡 提示：系统会根据你的偏好设置和历史反馈综合推荐菜品。10%的推荐会随机探索新菜品，避免信息茧房。</p>
        </div>
      </main>
    </div>
  );
}
