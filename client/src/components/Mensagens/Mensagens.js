import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Mensagem from './Mensagem/Mensagem';

import './Mensagens.css';

const Mensagens = ({ mensagens , nome }) => (
  <ScrollToBottom className="mensagens">
    {mensagens.map((mensagem, i) => <div key={i}><Mensagem mensagem={mensagem} nome={nome}/></div>)}
  </ScrollToBottom>
);

export default Mensagens;