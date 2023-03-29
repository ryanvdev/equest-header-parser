import React from 'ts-rssr';

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
    return (
        <header id='header'>
            <div className='container'>
                <section>
                    <p className='logo'>
                        <a href='/' className='default'>
                            <img src={'/static/img/logo.png'} alt={__env.DOMAIN} />
                            <span>{__env.APP_NAME}</span>
                        </a>
                    </p>
                </section>
                <section>
                    <ul>
                        <li>
                            <a href='/api/whoami' className='default'>
                                API
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </header>
    );
}
