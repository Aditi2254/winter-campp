import React, { useState } from 'react';
import { Users, UserPlus, Shield, Trophy, MessageSquare } from 'lucide-react';

const Teams = () => {
  const [showAddMember, setShowAddMember] = useState(false);

  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Team Captain",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      status: "online"
    },
    {
      name: "Sarah Chen",
      role: "Strategic Lead",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      status: "offline"
    },
    {
      name: "Michael Rodriguez",
      role: "Entry Fragger",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      status: "in-game"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Team Management</h1>
        <button
          onClick={() => setShowAddMember(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <UserPlus className="h-5 w-5" />
          <span>Add Member</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Team Members</h2>
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{member.name}</h3>
                      <p className="text-sm text-gray-400">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`h-2 w-2 rounded-full ${
                      member.status === 'online' ? 'bg-green-400' :
                      member.status === 'in-game' ? 'bg-yellow-400' : 'bg-gray-400'
                    }`} />
                    <span className="text-sm text-gray-400">{member.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Matches</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Regional Championship</h3>
                    <p className="text-sm text-gray-400">vs Team Liquid</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Tomorrow</p>
                    <p className="text-sm text-gray-400">20:00 EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Team Stats</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-300">Win Rate</span>
                </div>
                <span className="font-medium">67%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-300">Rank</span>
                </div>
                <span className="font-medium">Diamond</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-5 w-5 text-green-500" />
                  <span className="text-gray-300">Communication</span>
                </div>
                <span className="font-medium">95%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAddMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add Team Member</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white"
                  placeholder="Enter member name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Role
                </label>
                <select className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white">
                  <option>Team Captain</option>
                  <option>Strategic Lead</option>
                  <option>Entry Fragger</option>
                  <option>Support</option>
                </select>
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddMember(false)}
                  className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
                >
                  Add Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teams;