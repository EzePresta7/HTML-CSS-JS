import header from '../templates/Header'
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',

};

const router = async () => {
    const Header = null || document.getElementById(`header`);
    const content = null || document.getElementById(`content`);

    Header.innerHTML = await header(); //generar rouder
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
};

export default router;