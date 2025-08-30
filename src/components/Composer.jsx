import { useState } from 'react';

export default function Composer({ onPost }) {
  const [value, setValue] = useState('');
  const limit = 280;
  const count = value.length;
  const disabled = count === 0 || count > limit;

  function handleSubmit(e) {
    e.preventDefault();
    if (disabled) return;
    onPost(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 md:p-6">
      <div className="flex gap-3">
        <Avatar label="Y" color="#1f2937" />
        <div className="flex-1">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="What’s happening?"
            rows={3}
            className="w-full resize-none rounded-xl border border-neutral-200/70 bg-white/80 px-4 py-3 outline-none transition focus:border-neutral-300 focus:ring-2 focus:ring-neutral-200"
          />
          <div className="mt-3 flex items-center justify-between">
            <span className={`text-sm ${count > limit ? 'text-red-500' : 'text-neutral-400'}`}>{count}/{limit}</span>
            <button
              type="submit"
              disabled={disabled}
              className="inline-flex items-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-200"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

function Avatar({ label, color }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full text-white text-sm font-semibold" style={{ backgroundColor: color }}>
      {label}
    </div>
  );
}
