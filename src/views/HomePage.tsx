import React from 'ts-rssr';

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
    return (
        <html lang='vi'>
            <head>
                <meta charSet='UTF-8' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <title>Home</title>
            </head>
            <body>
                <h1>Hello world</h1>
            </body>
        </html>
    );
}
