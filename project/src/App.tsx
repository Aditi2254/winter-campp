import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Gamepad2, Trophy, Users, BarChart3, GraduationCap } from 'lucide-react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Training from './pages/Training';
import Analytics from './pages/Analytics';
import Teams from './pages/Teams';
import Tournaments from './pages/Tournaments';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-900 text-white">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/*"
              element={
                <div className="flex">
                  <Sidebar />
                  <div className="flex-1">
                    <Navbar />
                    <div className="p-8">
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/training" element={<Training />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/teams" element={<Teams />} />
                        <Route path="/tournaments" element={<Tournaments />} />
                      </Routes>
                    </div>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;