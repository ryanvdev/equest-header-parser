import React from 'ts-rssr';
export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
    return (
        <footer id='footer'>
            <p className='copyright'>
                © Copyright 2023 - {new Date().getFullYear()} Nguyễn Quốc Tuấn ®
            </p>
        </footer>
    );
}
