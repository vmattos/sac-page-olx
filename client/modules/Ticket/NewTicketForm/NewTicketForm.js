import React, { Component } from 'react';

class NewTicketForm extends Component {
  render() {
    return (
      <div>
        <h1>Novo atendimento</h1>
        <form>
          <label for="type">Tipo</label>
          <select name="type">
            <option>Telefone</option>
            <option>Chat</option>
            <option>Email</option>
          </select>

          <label for="state">Estado</label>
          <select name="state">
            <option>RJ</option>
            <option>SP</option>
          </select>

          <label for="reason">Motivo</label>
          <select name="reason">
            <option>Dúvidas</option>
            <option>Elogios</option>
            <option>Sugestões</option>
          </select>

          <label for="details">Detalhes</label>
          <textarea name="details"></textarea>

          <button>Finalizar</button>
        </form>
      </div>
    );
  }
}

export default NewTicketForm;
