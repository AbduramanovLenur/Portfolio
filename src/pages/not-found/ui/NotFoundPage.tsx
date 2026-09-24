import { Link } from 'react-router-dom';

import { routes } from '@shared/config';
import { Button } from '@shared/ui';

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-8 text-center">
      <div className="space-y-6">
        <p className="text-7xl font-bold gradient-text">404</p>
        <h1 className="text-3xl font-bold text-white">Page not found</h1>
        <p className="text-slate-400">
          The page you are looking for does not exist.
        </p>
        <Button asChild>
          <Link to={routes.HOME}>Back to home</Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;