import { Component } from 'react';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return <div className={css.bodyApp}>React homework template</div>;
  }
}
