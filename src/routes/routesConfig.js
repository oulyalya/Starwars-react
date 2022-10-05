import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import FavouritesPage from '@containers/FavouritesPage';
import NotFoundPage from '@containers/NotFoundPage';
import SearchPage from '@containers/SearchPage/';
import FailPage from '@containers/FailPage/FailPage';

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
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/fail',
        element: <FailPage />
    },
    {
        path: '/not-found',
        element: <NotFoundPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
];

export default routesConfig;
