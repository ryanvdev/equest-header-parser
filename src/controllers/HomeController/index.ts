import { Router } from 'express';
import { HomeController } from './HomeController';

export function loadHomeRouters(parentRouter: Router) {
    const c = HomeController.instance;

    parentRouter.get('/', c.home);
}
