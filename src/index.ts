import express from 'express';
import path from 'path';
import serveFavicon from 'serve-favicon';
import { controllerRouters } from './controllers';
import { tryToLoadEnv } from './loader';
import cors from 'cors';

const main = async () => {
    await tryToLoadEnv(); // ! IMPORTANT

    console.group('Environment variables:');
    console.dir(__env, { depth: Infinity });
    console.groupEnd();

    const app = express();



    // * Middleware

    app.use(cors());

    app.use(
        '/static',
        express.static(path.join(__dirname, '../public/'), {
            cacheControl: true,
            setHeaders: (res) => {
                res.setHeader('cache-control', 'no-cache');
            },
        }),
    );

    app.use(serveFavicon(path.join(__dirname, '../public/img/favicon.ico')));

    // * Routers
    app.use(controllerRouters());

    app.listen(__env.PORT, () => {
        console.log(`App running on port: ${__env.PORT}`);
    });
};

main();
