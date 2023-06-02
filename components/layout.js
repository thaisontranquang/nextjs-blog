import Head from 'next/head';
import styles from '../styles/layout.module.scss';
import NextLink from 'next/link';

const name = 'Nom prénom';
export const siteTitle = 'Exercice création de blog';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.backToHome}>
                <NextLink href="/">All articles</NextLink>
                <NextLink href="/users">Users</NextLink>
            </div>
            <main>{children}</main>

        </div>
    );
}