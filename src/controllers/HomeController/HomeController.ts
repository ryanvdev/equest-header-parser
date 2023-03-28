import { Request, Response } from 'express';
import React from 'ts-rssr';
import HomePage from '../../views/HomePage';

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
        res.status(200)
            .send(
                React.render(
                    HomePage({
                        // props
                    }),
                ),
            )
            .end();
    };
}
