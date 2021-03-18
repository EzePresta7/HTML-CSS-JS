const resolveRoutes = (route) => {

        let validRoute = route === '/' ? route : '/:id'; //si esto es verdad
        return validRoute;
    }


export default resolveRoutes;