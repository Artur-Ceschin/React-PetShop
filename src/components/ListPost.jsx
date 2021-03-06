
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../api/api'

const ListPost = ({ url }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        search(url, setPosts)
    }, [])


    return (
        <section className="posts container">
            {
                posts.map((post, index) => (
                    <Link key={index} className={`cartao-post cartao-post--${post.categoria}`}>
                        <article key={post.id}>
                            <h3 className="cartao-post__titulo">
                                {post.title}
                            </h3>
                            <p className="cartao-post__meta">{post.metadescription}</p>
                        </article>
                    </Link>
                ))
            }
        </section>
    )
}

export default ListPost