import { useState } from 'react';
import HeroCover from './components/HeroCover';
import Composer from './components/Composer';
import Feed from './components/Feed';

const initialTweets = [
  {
    id: '1',
    author: 'Ava',
    handle: '@ava',
    avatarColor: '#111827',
    content: 'Designing for calm. Fewer choices, clearer outcomes.',
    createdAt: Date.now() - 1000 * 60 * 8,
    likes: 12,
    replies: 2,
    reposts: 1,
  },
  {
    id: '2',
    author: 'Noah',
    handle: '@noah',
    avatarColor: '#ef4444',
    content: 'A good interface whispers, never shouts.',
    createdAt: Date.now() - 1000 * 60 * 45,
    likes: 31,
    replies: 4,
    reposts: 3,
  },
  {
    id: '3',
    author: 'Maya',
    handle: '@maya',
    avatarColor: '#0ea5e9',
    content: 'Delete 10% of your UI every month. What remains is signal.',
    createdAt: Date.now() - 1000 * 60 * 60 * 6,
    likes: 58,
    replies: 7,
    reposts: 9,
  },
];

export default function App() {
  const [tweets, setTweets] = useState(initialTweets);

  function handlePost(content) {
    const t = {
      id: String(Date.now()),
      author: 'You',
      handle: '@you',
      avatarColor: '#1f2937',
      content: content.trim(),
      createdAt: Date.now(),
      likes: 0,
      replies: 0,
      reposts: 0,
    };
    setTweets((prev) => [t, ...prev]);
  }

  function handleToggleLike(id) {
    setTweets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, likes: t._liked ? t.likes - 1 : t.likes + 1, _liked: !t._liked } : t))
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <HeroCover />
      <main className="mx-auto max-w-2xl px-4 -mt-28 relative z-10">
        <div className="rounded-2xl border border-neutral-200/70 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
          <Composer onPost={handlePost} />
          <div className="h-px bg-neutral-200/70" />
          <Feed tweets={tweets} onToggleLike={handleToggleLike} />
        </div>
        <footer className="py-10 text-center text-sm text-neutral-500">
          <p>Built for minimal, focused writing. No noise.</p>
        </footer>
      </main>
    </div>
  );
}
