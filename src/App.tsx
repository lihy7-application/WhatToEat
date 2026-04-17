import { useState, useEffect, useCallback } from 'react';
import { User } from '@/types';
import { getLocalUser } from '@/services/storage';
import HomePage from '@/pages/HomePage';
import HistoryPage from '@/pages/HistoryPage';
import PreferencesPage from '@/pages/PreferencesPage';

type Page = 'home' | 'history' | 'preferences';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const localUser = getLocalUser();
    setUser(localUser);
    setLoading(false);
  }, []);

  const handleUserUpdate = useCallback((updatedUser: User) => {
    setUser(updatedUser);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🍽️</div>
          <p className="text-gray-600">加载中...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">😕</div>
          <p className="text-gray-600">加载用户失败</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {currentPage === 'home' && <HomePage user={user} onNavigate={handleNavigate} />}
      {currentPage === 'history' && <HistoryPage user={user} onNavigate={handleNavigate} />}
      {currentPage === 'preferences' && (
        <PreferencesPage user={user} onNavigate={handleNavigate} onUserUpdate={handleUserUpdate} />
      )}
    </>
  );
}

export default App;
