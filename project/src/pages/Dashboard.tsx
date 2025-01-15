import React from 'react';
import { Activity, TrendingUp, Users, Clock, Target } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Win Rate"
          value="68%"
          change="+5.2%"
          icon={TrendingUp}
          positive
        />
        <StatCard
          title="Team Ranking"
          value="#42"
          change="-3"
          icon={Target}
          positive={false}
        />
        <StatCard
          title="Active Teammates"
          value="12"
          change="+2"
          icon={Users}
          positive
        />
        <StatCard
          title="Training Hours"
          value="156h"
          change="+12h"
          icon={Clock}
          positive
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Performance</h3>
          <div className="space-y-4">
            {[
              { game: 'CS:GO', result: 'Victory', score: '16-12', map: 'Dust 2' },
              { game: 'CS:GO', result: 'Defeat', score: '14-16', map: 'Inferno' },
              { game: 'CS:GO', result: 'Victory', score: '16-8', map: 'Mirage' },
            ].map((match, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-700 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className={`text-sm font-medium ${
                    match.result === 'Victory' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {match.result}
                  </div>
                  <div className="text-gray-300">{match.game}</div>
                </div>
                <div className="text-gray-400">
                  {match.score} • {match.map}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Training Focus</h3>
          <div className="space-y-4">
            {[
              { skill: 'Aim Precision', progress: 75 },
              { skill: 'Map Awareness', progress: 60 },
              { skill: 'Team Communication', progress: 85 },
              { skill: 'Strategy Execution', progress: 70 },
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">{skill.skill}</span>
                  <span className="text-gray-400">{skill.progress}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, icon: Icon, positive }: {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  positive: boolean;
}) => (
  <div className="bg-gray-800 rounded-lg p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
      <div className="h-12 w-12 rounded-lg bg-gray-700 flex items-center justify-center">
        <Icon className="h-6 w-6 text-blue-500" />
      </div>
    </div>
    <div className={`mt-4 text-sm ${positive ? 'text-green-400' : 'text-red-400'}`}>
      {change} from last month
    </div>
  </div>
);

export default Dashboard;