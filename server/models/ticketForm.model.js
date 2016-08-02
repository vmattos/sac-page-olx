
class TicketForm {
  get types() {
    return ['Telefone', 'Chat', 'Email'];
  }

  get states() {
    return ['RJ', 'SP'];
  }

  get reasons() {
    return ['Dúvidas', 'Elogios'];
  }

  get details() {
    return new String();
  }

  buildForm() {
    return {
      types: this.types,
      states: this.states,
      reasons: this.reasons,
      details: this.details,
    };
  }
}

export default TicketForm;
