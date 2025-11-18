'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Fewer, larger, more spread out circles with dramatic vibrant colors */}
      <div
        className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full"
        style={{
          background: '#2dd4bf',
          animation: 'float-slow 20s ease-in-out infinite',
        }}
      ></div>
      <div
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full"
        style={{
          background: '#f97316',
          animation: 'float-medium 18s ease-in-out infinite',
        }}
      ></div>
      <div
        className="absolute -bottom-40 left-1/4 w-[650px] h-[650px] rounded-full"
        style={{
          background: '#a855f7',
          animation: 'float-slow 22s ease-in-out infinite reverse',
        }}
      ></div>
    </div>
  );
}
