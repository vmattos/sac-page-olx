import  React, { Component } from 'react';

function FormSelect(props) {
  const {
    field,
    label,
    onChange,
    options,
  } = props;

  return (
    <div>
      <label htmlFor={ field }>{ label }</label>
      <select name={ field } onChange={ onChange }>
        {
          options.map((op, i) => (
            <option key={ i } value={ op }>{ op }</option>
          ))
        }
      </select>
    </div>
  );
}

export default FormSelect;
