import { useRouter } from 'next/router';
import Layout from '../../components/layouts/layout';
import Link from 'next/link';

export async function getStaticPaths() {
    return {
        paths: [], // Nous n'avons pas besoin de générer des chemins statiques pour chaque article individuel
        fallback: true, // Permet de générer les pages dynamiquement au besoin
    };
}

export async function getStaticProps({ params }) {
    const { id } = params;
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    const user = await res.json();

    const { posts } = params;
    const response = await fetch(`https://dummyjson.com/users/${id}/posts`);
    const allPosts = await response.json();


    return {
        props: {
            user,
            allPosts,
        }
    };
}

export default function UserPosts({ user, allPosts }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <div className="user container">
                <h1>{user.firstName} {user.lastName}</h1>
                {allPosts.posts.map((item, index) => (
                    <div className="card" key={index}>
                        <h2>
                            <Link href={`../posts/${item.id}`}>
                                {item.title}
                            </Link>
                        </h2>
                        <p>
                            {item.body}
                        </p>
                        <br />
                    </div>
                ))}
            </div>
        </Layout>
    );
}



