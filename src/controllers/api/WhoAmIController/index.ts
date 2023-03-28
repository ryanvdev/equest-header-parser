import { Router } from 'express';
import { WhoAmIController } from './WhoAmIController';

export function loadWhoAmIRouters(parentRouter: Router) {
    const c = WhoAmIController.instance;
    parentRouter.get('/whoami', c.whoAmIApi);
}
