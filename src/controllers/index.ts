import { Application, Router } from 'express';
import { loadHomeRouters } from './HomeController';

export function controllerRouters() {
    const router = Router();

    loadHomeRouters(router);

    return router;
}
