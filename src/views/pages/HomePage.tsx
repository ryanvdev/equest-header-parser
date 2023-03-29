import { IncomingHttpHeaders } from 'http';
import _ from 'lodash';
import React from 'ts-rssr';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeLayout from '../layouts/HomeLayout';

export interface IHomePageProps {
    ipv4: string;
    userAgent: UAParser.IResult;
    headers: IncomingHttpHeaders;
}

export default function HomePage(props: IHomePageProps) {
    const { ipv4, userAgent, headers } = props;
    return (
        <HomeLayout className='home-page'>
            <div className='container'>
                <section>
                    <h2>
                        IPv4 <span id='ipv4'>{props.ipv4}</span>
                    </h2>
                </section>

                <section>
                    <h2>My device information</h2>
                    <ul>
                        <li>
                            <strong>OS: </strong>
                            <span>
                                {userAgent.os.name} {userAgent.os.version}
                            </span>
                        </li>
                        <li>
                            <strong>Device model: </strong>
                            <span>{userAgent.device.model}</span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>Headers</h2>
                    <ul>
                        {Object.entries(headers).map(([key, value]) => {
                            if (!value || Array.isArray(value)) return null;
                            return (
                                <li>
                                    <strong>
                                        {key
                                            .split('-')
                                            .map((v) => _.capitalize(v))
                                            .join('-')}
                                        :{' '}
                                    </strong>
                                    <span>
                                        {value
                                            ?.split(',')
                                            .map((v) => v.trim())
                                            .join(', ')}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </div>
            <></>
        </HomeLayout>
    );
}
