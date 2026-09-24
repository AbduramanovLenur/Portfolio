import { createHashRouter } from 'react-router-dom';

import HomePage from '@pages/home';
import NotFoundPage from '@pages/not-found';
import { routes } from '@shared/config';

import { RouteError } from './RouteError';

export const router = createHashRouter([
  {
    path: routes.HOME,
    element: <HomePage />,
    errorElement: <RouteError />,
  },
  {
    path: routes.NOT_FOUND,
    element: <NotFoundPage />,
  },
]);