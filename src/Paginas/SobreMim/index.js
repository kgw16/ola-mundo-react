import styles from './SobreMim.module.css'
import PostModelo from 'Componentes/PostModelo'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/Rodrig_Foto.jpg'

export default function SobreMim() {
  return (
    
    <PostModelo
      fotoCapa={fotoCapa}
      titulo='Sobre Mim'
    >
      <h3 className={styles.subtitulo}>
        Olá eu sou o Rodrigo!
      </h3>
      <img 
        src={fotoSobreMim}  
        alt='Foto Sorrindo'
        className={styles.fotoSobreMim}   
        />
        <p className={styles.paragrafo}>
          Oi, tudo bem? Eu sou estudante de Front-end na Alura e estou feliz pelo meu crecimento na área de TI .
        </p>
        <p className={styles.paragrafo}>
          Minha história com programação começou no quando eu conseguir uma bolsa da Oracle para estudar na Alura, quando estudei programação na faculdade de Engenharia Mecânica, eu aprendi lógica de programação e o básico de linguagem c, mas sem aprofundar muito. Eu gostava muito de estudar programação, mas na época não fazia ideia de que iria gostar de trabalhar com isso no futuro.
        
        </p>
        <p className={styles.paragrafo}>
          No ensino superior, escolhi cursar Engenharia Mecânica na UNIFACS, mas comecei a estudar programação apartir do inicio de 2022 e de la para cá, assisnei na escola da Alura e estudo quase todos os dias.
        </p>
        <p className={styles.paragrafo}>
          Desde então, tem sido aprenas aprendizados atrás de aprendizados. Hoje sou muito feliz de ter a oportunidade de estudar esses conteúdos ricos e encantadores que foram para mim. Espero que eu continue aprendendo bastante!
        
        </p>
    </PostModelo>
  )
}