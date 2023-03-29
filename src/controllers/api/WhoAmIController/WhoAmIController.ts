import { Request, Response } from 'express';

interface WhoAmIApiResponse {
    ipaddress: string;
    language: string;
    software: string;
}

export class WhoAmIController {
    private static _instance: WhoAmIController | undefined = undefined;

    public static get instance() {
        if (this._instance === undefined) {
            this._instance = new WhoAmIController();
        }
        return this._instance;
    }

    private constructor() {}

    public readonly whoAmIApi = async (req: Request, res: Response) => {
        try{
            const ipAddress = req.ip.split(':').at(-1)!;
            const language = req.headers['accept-language'];
            const software = req.headers['user-agent'];
    
            res.status(200).json({
                ipaddress: ipAddress,
                language,
                software,
            } as WhoAmIApiResponse).end();
        }
        catch(e){
            console.log(e);
            res.sendStatus(500).end();
        }
    };
}
