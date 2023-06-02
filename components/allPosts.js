import React from 'react';
import Link from 'next/Link';
import { useState, useEffect, useRef } from 'react'

export default function AllPosts({ posts }) {

    const [favourites, setFavourites] = useState([
    ])

    function handleClick(e) {
        const btnContent = e.target;
        const currentElement = e.target.closest('li');
        const id = currentElement.getAttribute('id');
        const title = currentElement.querySelector('h2').textContent;

        if (!favourites.some(item => item.id === id)) {
            setFavourites([...favourites, { id, title }])
            btnContent.textContent = '★ Remove from favourites'
        } else {
            const updatedFavourites = favourites.filter(item => item.id !== id);
            setFavourites(updatedFavourites)
            btnContent.textContent = '☆ Add to favourites'
        }

        console.log(favourites);
    }

    function handleClickReset(e) {
        setFavourites([])
        document.querySelectorAll('.toggleFav').forEach(item => {
            item.textContent = '☆ Add to favourites'
        })
    }

    return (
        <>
            <section className='container grid-2'>
                <section class="allPosts">
                    <h1>Posts</h1>
                    <ul>
                        {posts.map((post, index) =>
                            <li key={index} className="card" id={post.id}>
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
                                        <p className="tags" key={index}>
                                            {post.tags[index]}
                                        </p>
                                    ))}
                                </div>
                                <button class="toggleFav" onClick={handleClick}>☆ Add to favourites</button>
                            </li>
                        )}
                    </ul>
                </section>

                <section>
                    <h2>Favourites</h2>
                    <div>
                        {favourites.map((item, index) => (
                            <p key={index}>
                                <Link href={`/posts/${item.id}`}>{item.title}</Link>
                            </p>
                        ))}
                    </div>
                    <button onClick={handleClickReset}>Clear favourites</button>
                </section>
            </section>
        </>
    )
}

