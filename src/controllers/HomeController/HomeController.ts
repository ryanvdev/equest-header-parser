import { Request, Response } from 'express';
import React from 'ts-rssr';
import { UAParser } from 'ua-parser-js';
import HomePage from '../../views/pages/HomePage';

export class HomeController {
    private static _instance: HomeController | undefined = undefined;

    public static get instance() {
        if (this._instance === undefined) {
            this._instance = new HomeController();
        }
        return this._instance;
    }

    private constructor() {}

    public home = async (req: Request, res: Response) => {
        try {
            const userAgent = new UAParser(req.headers['user-agent']);
            const ipv4 = req.ip.split(':').at(-1)!;

            res.status(200)
                .send(
                    React.render(
                        HomePage({
                            ipv4,
                            userAgent: userAgent.getResult(),
                            headers: req.headers,
                        }),
                    ),
                )
                .end();
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    };
}
