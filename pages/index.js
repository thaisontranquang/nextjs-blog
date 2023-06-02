import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import AllPosts from '../components/allPosts';
import React from 'react';

export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts: posts
    }
  }
}

export default function Home({ posts }) {
  console.log(posts);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <AllPosts posts={posts.posts} />
    </Layout>
  );
}
