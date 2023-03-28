import { Router } from 'express';
import { loadWhoAmIRouters } from './WhoAmIController';

export function loadApiRouters(parentRouter: Router) {
    const apiRouter = Router();

    loadWhoAmIRouters(apiRouter);

    parentRouter.use('/api', apiRouter);
}
