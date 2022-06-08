import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';

import ErrorMessage from '@components/ErrorMessage';

const routesConfig = [
    {
        path: '/',
        exact: true,
        element: <HomePage />
    },
    {
        path: '/people',
        exact: true,
        element: <PeoplePage />
    },
    {
        path: '/fail',
        element: <ErrorMessage />
    },
];

export default routesConfig;
