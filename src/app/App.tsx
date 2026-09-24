import { Suspense, type FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { ErrorBoundary } from '@shared/ui';

import { router } from './routes';

const App: FC = () => (
  <ErrorBoundary>
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  </ErrorBoundary>
);

export default App;