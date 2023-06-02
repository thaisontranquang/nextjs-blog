import React from 'react';
import { useState, useEffect, useRef } from 'react'
import styles from '../styles/cards.module.scss'
import Link from 'next/Link';

export default function AllPosts({ posts }) {

    const [favourites, setFavourites] = useState([
    ])

    function addToFavourites() {
        const favSectionDiv = document.querySelector('section:nth-child(2) > div')

        if (favourites.length > 1) {
            const p = document.createElement('p')
            const a = document.createElement('a')
            a.id = favourites[favourites.length - 2];
            a.textContent = favourites[favourites.length - 1];
            a.href = `/posts/${a.id}`
            p.appendChild(a)
            favSectionDiv.appendChild(p)
        }
    }

    function handleClick(e) {
        const currentElement = e.target.closest('li');
        const id = currentElement.getAttribute('id');
        const title = currentElement.querySelector('h2').textContent;

        if (!favourites.includes(id)) {
            favourites.push(id)
            favourites.push(title)

            addToFavourites()

        } else {
            favourites.splice(favourites.indexOf(id), 2)

            document.querySelector(`a[id="${id}"]`).remove()
        }

        console.log(favourites);
    }

    function handleClickReset(e) {
        setFavourites([])
        document.querySelector('section:nth-child(2) > div').innerHTML = "";
    }




    return (
        <>
            <section className='grid-2'>
                <section>
                    <h1>Posts</h1>
                    <ul>
                        {posts.map((post, index) =>
                            <li key={index} className={styles.card} id={post.id}>
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
                                <button onClick={handleClick}>Add to favourites</button>
                            </li>
                        )}
                    </ul>
                </section>

                <section>
                    <h2>Favourites</h2>
                    <div>
                        {favourites.map((id) => (
                            <p key={id}>{id}</p>
                        ))}
                    </div>
                    <button onClick={handleClickReset}>Clear favourites</button>
                </section>
            </section>
        </>
    )
}

