import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { ErrorFallback } from '@shared/ui';

export function RouteError() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorFallback
        title={`${error.status} — ${error.statusText}`}
        description="The requested page could not be loaded."
      />
    );
  }

  console.error('[RouteError]', error);

  return <ErrorFallback />;
}