
'use client';

import { useState } from 'react';

export default function Home() {
  const [attendedGames, setAttendedGames] = useState<string[]>([]);

  const sampleGames = [
    { date: '2024-04-01', teams: 'Yankees vs Red Sox' },
    { date: '2024-04-03', teams: 'Dodgers vs Mets' },
    { date: '2024-04-05', teams: 'Cubs vs Cardinals' },
  ];

  const toggleGame = (date: string) => {
    setAttendedGames((prev) =>
      prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
    );
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">MLB Game Tracker</h1>
      <p className="mb-6">Click on a game to mark it as attended.</p>
      <ul className="space-y-3">
        {sampleGames.map((game) => (
          <li
            key={game.date}
            onClick={() => toggleGame(game.date)}
            className={`cursor-pointer p-4 border rounded ${
              attendedGames.includes(game.date)
                ? 'bg-green-100 border-green-500'
                : 'bg-white'
            }`}
          >
            {game.date} – {game.teams}
          </li>
        ))}
      </ul>
    </main>
  );
}
