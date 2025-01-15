import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  notifications: Notification[];
  clearNotification: (id: string) => void;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'warning' | 'error';
  timestamp: Date;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Welcome Back!',
      message: 'You have 3 new training modules available.',
      type: 'success',
      timestamp: new Date()
    },
    {
      id: '2',
      title: 'Team Practice',
      message: 'Upcoming team practice session in 2 hours.',
      type: 'warning',
      timestamp: new Date()
    },
    {
      id: '3',
      title: 'Tournament Alert',
      message: 'New tournament registration is now open.',
      type: 'info',
      timestamp: new Date()
    }
  ]);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    // Simulated login - replace with actual authentication
    setUser({
      id: '1',
      name: 'John Doe',
      email,
      role: 'Pro Player',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'
    });
    navigate('/');
  };

  const register = async (name: string, email: string, password: string) => {
    // Simulated registration - replace with actual registration
    setUser({
      id: '1',
      name,
      email,
      role: 'Pro Player',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'
    });
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  const clearNotification = (id: string) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, notifications, clearNotification }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};