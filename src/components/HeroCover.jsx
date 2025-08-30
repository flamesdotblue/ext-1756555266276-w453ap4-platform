import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full" style={{ height: '56vh' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/40 via-white/30 to-white" />
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900">Minimalist Feed</h1>
          <p className="mt-4 text-neutral-600 md:text-lg">A clean, distraction-free stream. Type. Post. Scroll.</p>
        </div>
      </div>
    </section>
  );
}
