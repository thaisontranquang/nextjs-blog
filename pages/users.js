import Head from 'next/head';
import Layout, { siteTitle } from '../components/layouts/layout';
import Link from 'next/link';

export async function getStaticProps() {
    const res = await fetch('https://dummyjson.com/users');
    const users = await res.json();

    return {
        props: users,
    }
}

export default function Home({ users }) {

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {
                <section className="container listUsers">
                    <h1>List of users</h1>
                    <ul>
                        {users.map((user, index) =>
                            <li key={index}>
                                <h2>
                                    <Link href={`/users/${user.id}`}>{user.firstName} {user.lastName}</Link>
                                </h2>
                            </li>
                        )}
                    </ul>
                </section>
            }
        </Layout>
    );
}
