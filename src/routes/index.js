import routesConfig from '~/configs/routesConfig';
import MainLayout from '~/layouts/MainLayout';

const publicRoutes = [
    { path: routesConfig.home, component: MainLayout },
    { path: routesConfig.temp, component: MainLayout },
];

export default publicRoutes;
