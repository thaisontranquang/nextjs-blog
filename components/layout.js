import Head from 'next/head';
import styles from '../styles/layout.module.scss';
import Link from 'next/Link';

const name = 'Nom prénom';
export const siteTitle = 'Exercice création de blog';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.backToHome}>
                <Link href="/">All articles</Link>
                <Link href="/users">Users</Link>
            </div>
            <main>{children}</main>

        </div>
    );
}