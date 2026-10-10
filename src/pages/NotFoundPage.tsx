import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <main className="flex flex-col items-center gap-4 p-6">
      <h2 className="text-2xl font-semibold">404 — Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-600 underline">
        Back to home
      </Link>
    </main>
  );
}

export default NotFoundPage;