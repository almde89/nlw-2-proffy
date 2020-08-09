import React from "react";

import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

export const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/1916271?s=460&v=4"
          alt="André Luiz Fernandes de Mello"
        />
        <div>
          <strong>André Luiz Fernandes de Mello</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora<strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Contato" />
          Entrar em contato.
        </button>
      </footer>
    </article>
  );
};
