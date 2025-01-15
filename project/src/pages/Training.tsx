import React from 'react';
import { BookOpen, Video, Target, Trophy, Clock } from 'lucide-react';

const Training = () => {
  const trainingModules = [
    {
      title: "Aim Training",
      description: "Improve your accuracy and reaction time",
      icon: Target,
      progress: 75,
      duration: "2 hours"
    },
    {
      title: "Strategy Fundamentals",
      description: "Learn advanced tactical gameplay",
      icon: BookOpen,
      progress: 45,
      duration: "3 hours"
    },
    {
      title: "Pro Gameplay Analysis",
      description: "Study professional match replays",
      icon: Video,
      progress: 60,
      duration: "1.5 hours"
    }
  ];

  const achievements = [
    { title: "Quick Learner", icon: Trophy, description: "Complete 5 training modules" },
    { title: "Time Master", icon: Clock, description: "Train for 10 hours" }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Training Hub</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Start New Training
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainingModules.map((module, index) => {
          const Icon = module.icon;
          return (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">{module.title}</h3>
                  <p className="text-sm text-gray-400">{module.duration}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">{module.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-blue-400">{module.progress}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${module.progress}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4">
                <div className="p-2 bg-yellow-500 rounded-lg">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">{achievement.title}</h3>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Training;