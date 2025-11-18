'use client';

export default function TestGlassPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Colored background circles - these should be BEHIND */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-20 w-[400px] h-[400px] rounded-full bg-primary-500 opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-[300px] h-[300px] rounded-full bg-secondary-500 opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-orange opacity-50"></div>
      </div>

      {/* Glass card - this should be IN FRONT with backdrop-filter */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div
          className="w-[800px] h-[600px] rounded-3xl border border-white/40 shadow-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <div className="p-12">
            <h1 className="text-4xl font-bold mb-6">Glass Test</h1>
            <p className="text-xl text-gray-700 mb-6">
              If you can see the colored circles blurred behind this white card, glassmorphism is working!
            </p>
            <p className="text-lg text-gray-600">
              The circles should be visible but blurry through the frosted glass effect.
            </p>
            <div className="mt-8 p-6 rounded-2xl bg-white/30 border border-white/50">
              <p className="text-gray-700">
                This is a nested glass element to test multi-layer blur effects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
