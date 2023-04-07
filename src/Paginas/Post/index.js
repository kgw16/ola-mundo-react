import "./post.css";
import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "Componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NaoEncontrada from "Paginas/NaoEncontrada";
import PaginaPadrao from "Componentes/PaginaPadrao";
import OutrosPosts from "Componentes/OutrosPosts";

export default function Post() {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  const postsRecomendados = posts
    .filter((post)=> post.id!==Number(parametros.id))
    .sort((a,b)=>b.id-a.id)
    .slice(0,4);

    

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
              
                <OutrosPosts postsRecomendados={postsRecomendados}/>
              
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
