import Head from 'next/head';
import Layout, { siteTitle } from '../components/layouts/layout';
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
      <div className='container'>
        <p>Hello and welcome to this blog !</p>
        <p>I made it using Next.js and React. This was my very first project using these frameworks ! </p>
      </div>
    </Layout>
  );
}
