'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { taskWhitePaws, taskBlum } from '@/images'; // فرض می‌کنیم این آیکون‌ها از قبل موجود هستند.

const TasksTab = () => {
  const [activeTab, setActiveTab] = useState<'in-game' | 'partners'>('in-game');
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [timers, setTimers] = useState<{ [key: string]: number }>({});

  const inGameTasks = [
    { id: 'task1', title: 'Put 🕷 in your name', reward: '+ 5,000 PAWS' },
    { id: 'task2', title: 'Tweet about Dark', reward: '+ 2,000 Dark' },
    { id: 'task3', title: 'Boost Dark channel', reward: '+ 2,500 Dark' },
  ];

  const partnerTasks = [
    { id: 'partner1', title: 'Join Binance', reward: '+ 10,000 Dark' },
  ];

  useEffect(() => {
    const savedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks') || '[]');
    const savedTimers = JSON.parse(localStorage.getItem('timers') || '{}');
    setCompletedTasks(savedCompletedTasks);
    setTimers(savedTimers);
  }, []);

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    localStorage.setItem('timers', JSON.stringify(timers));
  }, [completedTasks, timers]);

  const handleStart = (taskId: string) => {
    if (completedTasks.includes(taskId)) return;

    window.open('https://www.aparat.com', '_blank');

    const endTime = Date.now() + 5000; // تایمر ۵ ثانیه‌ای
    setTimers((prev) => ({ ...prev, [taskId]: endTime }));

    const timerInterval = setInterval(() => {
      const timeLeft = Math.max(0, endTime - Date.now());
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        setCompletedTasks((prev) => [...prev, taskId]);
        setTimers((prev) => {
          const updatedTimers = { ...prev };
          delete updatedTimers[taskId];
          return updatedTimers;
        });
      } else {
        setTimers((prev) => ({ ...prev, [taskId]: timeLeft }));
      }
    }, 1000);
  };

  const currentTasks = activeTab === 'in-game' ? inGameTasks : partnerTasks;

  return (
    <div className="quests-tab-con px-4 transition-all duration-300">
      <div className="pt-8">
        <h1 className="text-3xl font-bold mb-2">TASKS</h1>
        <div>
          <span className="text-xl font-semibold">GET REWARDS </span>
          <span className="text-xl text-gray-500">FOR</span>
        </div>
        <div className="text-xl text-gray-500">COMPLETING QUESTS</div>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-0 mt-6">
        <button
          onClick={() => setActiveTab('in-game')}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition duration-300 
            ${activeTab === 'in-game' ? 'bg-white text-black' : 'bg-[#151515] text-white'}`}
        >
          In-game
        </button>
        <button
          onClick={() => setActiveTab('partners')}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition duration-300 
            ${activeTab === 'partners' ? 'bg-white text-black' : 'bg-[#151515] text-white'}`}
        >
          Partners
        </button>
      </div>

      {/* Tasks List */}
      <div className="mt-4 mb-20 bg-[#151516] rounded-xl">
        {currentTasks.map((task) => (
          <div key={task.id} className="flex items-center">
            <div className="w-[72px] flex justify-center">
              <div className="w-10 h-10">
                <Image src={task.id.startsWith('partner') ? taskBlum.src : taskWhitePaws.src} alt={task.title} width={40} height={40} className="w-full h-full object-contain" />
              </div>
            </div>
            <div className={`flex items-center justify-between w-full py-4 pr-4 ${task.id !== currentTasks[0].id && 'border-t border-[#222622]'}`}>
              <div>
                <div className="text-[17px]">{task.title}</div>
                <div className="text-gray-400 text-[14px]">{task.reward}</div>
              </div>
              {completedTasks.includes(task.id) ? (
                <span className="text-green-500 font-bold">Complete</span>
              ) : (
                <button
                  className="h-8 bg-white text-black px-4 rounded-full text-sm font-medium flex items-center"
                  onClick={() => handleStart(task.id)}
                >
                  {timers[task.id] ? `Time Left: ${Math.ceil(timers[task.id] / 1000)}s` : 'Start'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksTab;
