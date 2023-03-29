import React from 'ts-rssr';
import Footer from '../components/Footer';
import Header from '../components/Header';

export interface IHomeLayoutProps {
    title?: string;
    className?: string;
}

export default function HomeLayout(props: React.PropsWithChildren<IHomeLayoutProps>) {
    const title = props.title || __env.APP_NAME;

    return (
        <html lang='vi'>
            <head>
                <meta charSet='UTF-8' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <title>{title}</title>
                <link rel='icon' type='image/x-icon' href='/favicon.ico'></link>
                <link rel='stylesheet' href='/static/styles/index.css' />
            </head>
            <body>
                <div id='home-layout'>
                    <Header />
                    <main className={props.className}>{props.children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
