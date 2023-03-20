import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChangeForm(event) {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  }

  handleSubmitForm(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetFormInput();
  }

  resetFormInput() {
    this.setState({
      name: '',
      number: '',
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChangeForm}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChangeForm}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contacts</button>
        </form>
      </div>
    );
  }
}
