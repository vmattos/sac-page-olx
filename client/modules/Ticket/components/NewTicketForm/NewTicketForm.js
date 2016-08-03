import React, { Component } from 'react';

import FormSelect from '../FormSelect/FormSelect';

function NewTicketForm(props) {
  const {
    form,
    handleSubmit,
    handleSelect,
  } = props;

  return (
    <div>
      <h1>Novo atendimento</h1>
      <form onSubmit={ handleSubmit }>
        <FormSelect
          field="type"
          label="Tipo"
          onChange={ handleSelect }
          options={ form.types }
        />

        <FormSelect
          field="state"
          label="Estado"
          onChange={ handleSelect }
          options={ form.states }
        />

        <FormSelect
          field="reason"
          label="Motivo"
          onChange={ handleSelect }
          options={ form.reasons }
        />

        <label htmlFor="details">Detalhes</label>
        <textarea name="details" onChange={ handleSelect }></textarea>

        <button type="submit">Finalizar</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
