const resolveRoutes = () => {
    if (resolveRoutes.length <= 3) {
        let validRoute = route === '/' ? route : '/:id'; //si esto es verdad
        return validRoute;
    }
    return `/${route}`;
}

export default resolveRoutes;