import { Button } from './Button';

interface ErrorFallbackProps {
  title?: string;
  description?: string;
}

export function ErrorFallback({
  title = 'Something went wrong',
  description = 'An unexpected error occurred. Please reload the page.',
}: ErrorFallbackProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-8 text-center">
      <div className="space-y-6">
        <p className="text-7xl font-bold gradient-text">Oops</p>
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <p className="text-slate-400">{description}</p>
        <Button onClick={() => window.location.reload()}>Reload page</Button>
      </div>
    </div>
  );
}