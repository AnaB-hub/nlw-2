import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/57633573?s=460&u=77ed7dc13fed0b7c75d2f35ec5573f2fde8186b3&v=4"
          alt="Imagem Proffy"
        />
        <div>
          <strong>Ana Garcia</strong>
          <span> Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
