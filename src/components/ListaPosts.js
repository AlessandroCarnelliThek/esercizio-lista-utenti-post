import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CardPost from './CardPost.js';
import Loading from './Loading.js';

function ListaPosts() {
    const { id } = useParams();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
        .then(response => response.json())
        .then(jsonPosts => setPosts(jsonPosts))
    }, [])

    if (posts.length < 1) return <Loading />

    return (
        <div className="lista-posts"> 
        <h2 className="title">Lista post (utente ID {id})</h2>
        {
            posts.map((post, idx) => {
                return <CardPost key={idx} post={post} />
            })
        }
        </div>
    )
}

export default ListaPosts;