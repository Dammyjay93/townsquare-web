export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-background flex items-center justify-center px-4">
      <div className="text-center bg-white rounded-2xl shadow-sm p-8 md:p-12 max-w-md">
        <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vendor Not Found</h2>
        <p className="text-gray-600 mb-8">
          This profile doesn't exist or hasn't been approved yet.
        </p>
        <div className="flex flex-col gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_APP_STORE_URL || '#'}
            className="bg-primary-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-600 active:bg-primary-700 transition-colors shadow-sm"
          >
            Get the app
          </a>
        </div>
      </div>
    </div>
  );
}
