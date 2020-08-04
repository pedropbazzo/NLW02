import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/32115702?s=460&u=18b6f3c1f7fb02331ad007fd21a6fdd1c2105790&v=4"
          alt="Pedro P. Bazzo"
        />
        <div>
          <strong>Pedro P. Bazzo</strong>
          <span>Empreendorismo</span>
        </div>
      </header>
      <p>
        Designer e Desenvolvedor Front end
        <br />
        <br />
        Apaixonado por tecnologia
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
