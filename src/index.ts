import express from 'express';
import path from 'path';
import { controllerRouters } from './controllers';
import { tryToLoadEnv } from './loader';

const main = async () => {
    await tryToLoadEnv(); // ! IMPORTANT

    console.group('Environment variables:');
    console.dir(__env, { depth: Infinity });
    console.groupEnd();

    const app = express();

    // * Middleware

    app.use(
        '/static',
        express.static(path.join(__dirname, '../public/'), {
            cacheControl: true,
            setHeaders: (res) => {
                res.setHeader('cache-control', 'no-cache');
            },
        }),
    );

    // * Routers
    app.use(controllerRouters());

    app.listen(__env.PORT, () => {
        console.log(`App running on port: ${__env.PORT}`);
    });
};

main();
