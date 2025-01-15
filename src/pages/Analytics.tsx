import React from 'react';
import { BarChart3, TrendingUp, Clock, Target, Crosshair } from 'lucide-react';

const Analytics = () => {
  const performanceMetrics = [
    {
      title: "Accuracy",
      value: "68%",
      change: "+5%",
      icon: Crosshair,
      positive: true
    },
    {
      title: "Reaction Time",
      value: "215ms",
      change: "-15ms",
      icon: Clock,
      positive: true
    },
    {
      title: "Win Rate",
      value: "58%",
      change: "-2%",
      icon: TrendingUp,
      positive: false
    }
  ];

  const recentMatches = [
    { game: "Dust 2", result: "Victory", kd: "24/12", score: "16-12" },
    { game: "Mirage", result: "Defeat", kd: "18/20", score: "13-16" },
    { game: "Inferno", result: "Victory", kd: "30/15", score: "16-8" }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Performance Analytics</h1>
        <div className="flex space-x-4">
          <select className="bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 3 Months</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Export Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {performanceMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gray-700 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-500" />
                </div>
                <span className={`text-sm ${metric.positive ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="text-gray-400 text-sm">{metric.title}</h3>
              <p className="text-2xl font-semibold mt-1">{metric.value}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Matches</h2>
        <div className="space-y-4">
          {recentMatches.map((match, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className={`w-2 h-2 rounded-full ${
                  match.result === 'Victory' ? 'bg-green-400' : 'bg-red-400'
                }`} />
                <div>
                  <h3 className="font-medium">{match.game}</h3>
                  <p className="text-sm text-gray-400">{match.result}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{match.score}</p>
                <p className="text-sm text-gray-400">K/D: {match.kd}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;