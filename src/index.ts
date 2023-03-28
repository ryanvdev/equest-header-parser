import express from 'express';
import { controllerRouters } from './controllers';
import { tryToLoadEnv } from './loader';

const main = async () => {
    await tryToLoadEnv(); // ! IMPORTANT

    console.group('Environment variables:');
    console.dir(__env, { depth: Infinity });
    console.groupEnd();

    const app = express();

    // * Routers
    app.use(controllerRouters());

    app.listen(__env.PORT, () => {
        console.log(`App running on port: ${__env.PORT}`);
    });
};

main();
