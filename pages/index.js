import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/Link';
import styles from '../styles/cards.module.scss'

export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/posts');
  const posts = await res.json();

  return {
    props:
      posts
  }
}

export default function Home({ posts }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {
        <section>
          <h1>Blog</h1>
          <ul>
            {posts.map((post, index) =>
              <li key={index} className={styles.card}>
                <h2>
                  <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </h2>
                <p>
                  {post.body}
                </p>
                <br />
                <p>
                  Written by <Link href={`/users/${post.userId}`}>{post.userId}</Link>
                </p>
                <br />
                <div>
                  {post.tags.map((item, index) => (
                    <p className={styles.tags} key={index}>
                      {post.tags[index]}
                    </p>
                  ))}
                </div>
              </li>
            )}
          </ul>
        </section>
      }
    </Layout>
  );
}
