import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import css from "./app.module.css"


export class App extends Component {

state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: "",
  }


  componentDidMount() {

    const contactItems = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contactItems);

    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }

}

   componentDidUpdate(prevProps, prevState) {

     
  if (this.state.contacts.length !== prevState.contacts.length) {
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }  }

  formSubmitHandler = (data) => {
    const { name, number } = data;
    const newContact = { id: nanoid(), name, number };
    
    if(this.state.contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
    alert(`${newContact.name} is already in the contacts`);
    return;
  }
    
      this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts]
    }));

  }

  handleFilterChange = (input) => {
    this.setState({ filter: input }); 
  }

  deleteContact = (contactId) => { 
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId )
    }))
     
   }

  render() {

    const { contacts, filter } = this.state;
    
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={css.container}>
        
        <h1 className={css.title}>Phonebook</h1>
        
        <ContactForm onSubmit={this.formSubmitHandler} />
        
        <h1 className={css.title}>Contacts</h1>

        <Filter onFilter={this.handleFilterChange} />
        
        <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
       
      </div>

  );}
  
};


