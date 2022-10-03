import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import FavouritesPage from '@containers/FavouritesPage/FavouritesPage';
import NotFoundPage from '@containers/NotFoundPage';

import ErrorMessage from '@components/ErrorMessage';

const routesConfig = [
    {
        path: '/',
        exact: true,
        element: <HomePage />
    },
    {
        path: '/people',
        element: <PeoplePage />
    },
    {
        path: '/people/:id',
        element: <PersonPage />
    },
    {
        path: '/favourites',
        element: <FavouritesPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
    {
        path: '/fail',
        element: <ErrorMessage />
    },
];

export default routesConfig;
