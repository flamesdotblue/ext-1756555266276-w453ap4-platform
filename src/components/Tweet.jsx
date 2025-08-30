import { useMemo } from 'react';

export default function Tweet({ tweet, onToggleLike }) {
  const time = useMemo(() => formatRelativeTime(tweet.createdAt), [tweet.createdAt]);

  return (
    <div className="flex gap-3">
      <Avatar label={tweet.author?.[0]?.toUpperCase() || 'U'} color={tweet.avatarColor || '#111827'} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-medium text-neutral-900 truncate">{tweet.author}</span>
          <span className="text-neutral-400 truncate">{tweet.handle} · {time}</span>
        </div>
        <p className="mt-1 whitespace-pre-wrap text-[15px] leading-relaxed text-neutral-800">{tweet.content}</p>
        <div className="mt-3 flex gap-6 text-sm text-neutral-500">
          <button onClick={() => onToggleLike(tweet.id)} className={`transition hover:text-neutral-900 ${tweet._liked ? 'text-neutral-900' : ''}`}>❤ {tweet.likes}</button>
          <span>↩︎ {tweet.replies}</span>
          <span>⤴︎ {tweet.reposts}</span>
        </div>
      </div>
    </div>
  );
}

function Avatar({ label, color }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white text-sm font-semibold" style={{ backgroundColor: color }}>
      {label}
    </div>
  );
}

function formatRelativeTime(timestamp) {
  const diff = Date.now() - timestamp;
  const sec = Math.floor(diff / 1000);
  if (sec < 60) return `${sec}s`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h`;
  const day = Math.floor(hr / 24);
  if (day < 7) return `${day}d`;
  const date = new Date(timestamp);
  return date.toLocaleDateString();
}
