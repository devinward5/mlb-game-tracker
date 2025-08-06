import { mockGames } from '../../lib/games';
import Link from 'next/link';

export default function CalendarPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">MLB Game Calendar</h1>
      <ul className="space-y-4">
        {mockGames.map(game => (
          <li key={game.id} className="border rounded p-4 hover:bg-gray-100">
            <div className="text-lg font-semibold">{game.teams}</div>
            <div>{game.date} — {game.stadium}</div>
            <Link href={`/games/${game.id}`} className="text-blue-600 hover:underline">
              View Game
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
