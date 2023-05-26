import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import styles from '../../styles/posts.module.scss'

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
            <div className={styles.post}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <div>
                    {post.tags.map((item, index) => (
                        <p className={styles.tags} key={index}>
                            {post.tags[index]}
                        </p>
                    ))}
                </div>
                <div className={styles.comments}>
                    {comments.comments.map((item, index) => (
                        <p className={styles.singleComment} key={index}>
                            <p>
                                {item.body}
                            </p>
                            <p>
                                by {item.user.username}
                            </p>
                        </p>
                    ))}
                </div>
            </div>
        </Layout>
    );
}



