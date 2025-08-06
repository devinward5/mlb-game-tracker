import { mockGames } from '../../../lib/games';

export default function GameDetail({ params }: { params: { id: string } }) {
  const game = mockGames.find(g => g.id === params.id);

  if (!game) return <div className="p-6">Game not found</div>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">{game.teams}</h1>
      <div className="text-gray-600">{game.date} at {game.stadium}</div>

      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Mark as Attended
      </button>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Box Score (coming soon)</h2>
        <p className="text-gray-500">Player and team stats will be shown here.</p>
      </div>
    </div>
  );
}
