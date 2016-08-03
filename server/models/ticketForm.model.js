
class TicketForm {
  constructor(form) {
    this.form = form;
  }

  get types() {
    return this.form.types;
  }

  get states() {
    return this.form.states;
  }

  get reasons() {
    return this.form.reasons;
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
