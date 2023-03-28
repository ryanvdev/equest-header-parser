import { Application, Router } from 'express';
import { loadApiRouters } from './api';
import { loadHomeRouters } from './HomeController';

export function controllerRouters() {
    const router = Router();

    loadHomeRouters(router);
    loadApiRouters(router);

    return router;
}
