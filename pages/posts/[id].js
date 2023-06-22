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

    // const { id, name } = params;
    // ÉGAL
    // const id = params.id
    // const name = params.name

    /*     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const post = await res.json(); */

    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    const post = await res.json();

    const response = await fetch(`https://dummyjson.com/comments/post/${id}`);
    const comments = await response.json();

    return {
        props: {
            post,
            comments,
        }
    };
}

export default function Post({ post, comments }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }


    console.log(comments);

    return (
        <Layout>
            <div className="show_post">
                <div className="container">
                    <div className="card">
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <br />
                        <p>
                            Written by <Link href={`/users/${post.userId}`}>{post.userId}</Link>
                        </p>
                        <div>
                            {post.tags.map((item, index) => (
                                <p className="tags" key={index}>
                                    {post.tags[index]}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="comments">
                        {comments.comments.map((item, index) => (
                            <div className="comment" key={index}>
                                <p>
                                    {item.body}
                                </p>
                                <p>
                                    by {item.user.username}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}



