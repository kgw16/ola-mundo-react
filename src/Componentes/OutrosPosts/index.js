import PostCard from 'Componentes/PostCard';
import React from 'react'
import styles from './OutrosPosts.module.css'

export default function OutrosPosts({postsRecomendados}) {

    console.log(postsRecomendados);
  return (
    <>
        <h2 className={styles.tituloOutrosPosts}>
            Outros posts que você pode gostar:
        </h2>
        <ul className={styles.postsRecomendados}>
            {postsRecomendados.map((post)=>{
                return(
                    <li key={post.id}>
                        <PostCard post={post}/>
                    </li>
                )
            })}
        </ul>

    </>
  )
}
