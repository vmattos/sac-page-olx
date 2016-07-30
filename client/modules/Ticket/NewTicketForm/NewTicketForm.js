import React, { Component } from 'react';

function NewTicketForm(props) {
  const {
    handleSubmit,
    handleSelect,
  } = props;

  return (
    <div>
      <h1>Novo atendimento</h1>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="type">Tipo</label>
        <select name="type" onChange={ handleSelect }>
          <option>Telefone</option>
          <option>Chat</option>
          <option>Email</option>
        </select>

        <label htmlFor="state">Estado</label>
        <select name="state" onChange={ handleSelect }>
          <option>RJ</option>
          <option>SP</option>
        </select>

        <label htmlFor="reason">Motivo</label>
        <select name="reason" onChange={ handleSelect }>
          <option>Dúvidas</option>
          <option>Elogios</option>
          <option>Sugestões</option>
        </select>

        <label htmlFor="details">Detalhes</label>
        <textarea name="details" onChange={ handleSelect }></textarea>

        <button type="submit">Finalizar</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
