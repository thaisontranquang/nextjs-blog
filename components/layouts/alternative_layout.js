import Head from 'next/head';
import Link from 'next/Link';
import Nav from '../nav';


export const siteTitle = 'Blog using Next.js';

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav></Nav>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
}