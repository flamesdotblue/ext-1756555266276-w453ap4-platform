import Tweet from './Tweet';

export default function Feed({ tweets, onToggleLike }) {
  if (!tweets?.length) {
    return (
      <div className="p-10 text-center text-neutral-500">No posts yet. Be the first to share a thought.</div>
    );
  }

  return (
    <ul className="divide-y divide-neutral-200/70">
      {tweets.map((t) => (
        <li key={t.id} className="p-4 md:p-6">
          <Tweet tweet={t} onToggleLike={onToggleLike} />
        </li>
      ))}
    </ul>
  );
}
