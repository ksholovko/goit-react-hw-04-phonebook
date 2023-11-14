import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./contactForm.module.css"

export default function ContactForm ({onSubmit}) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = nanoid();

    const telInputId = nanoid();

    const handleInputChange = event => {
    
        const { name, value } = event.target;

        switch (name) {
            case "name":
                setName(value);
                break;
        
            case "number":
                setNumber(value);
                break;
         
            default:
                break;
        }
    }
    
    const handleSubmit = event => {
    
        event.preventDefault();
      
      onSubmit({ name, number });
      
      setName('');
      setNumber('');
    }

return ( 
            
            <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={nameInputId} className={css.label}> Name </label>
                <input className={css.formInput} id={nameInputId} type="text" name="name" value={name} required onChange={handleInputChange} />
        <label htmlFor={telInputId} className={css.label}>Number</label>
        <input className={css.formInput} id={telInputId} type="tel" name="number" value={number} required onChange={handleInputChange} />     
                <button className={css.button} type="submit">Add contact</button>
    </form>
    
        )


}

// export default class ContactForm extends Component {
//     state = {
//         name: '',
//         number: '',
//     }


//     nameInputId = nanoid();

//     telInputId = nanoid();

//     handleInputChange = event => {
    
//         const { name, value } = event.currentTarget;
//         this.setState({ [name]: value })
//     }

//     handleSubmit = event => {
    
//         event.preventDefault();
      
//         this.props.onSubmit(this.state);
        
//         this.resetInput();
//     }
  
//     resetInput = () => { this.setState({ name: '', number: '' }) }
    
//     render() {

//         return ( 
            
//             <form className={css.form} onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId} className={css.label}> Name </label>
//                 <input className={css.formInput} id={this.nameInputId} type="text" name="name" value={this.state.name} required onChange={this.handleInputChange} />
//         <label htmlFor={this.telInputId} className={css.label}>Number</label>
//         <input className={css.formInput} id={this.telInputId} type="tel" name="number" value={this.state.number} required onChange={this.handleInputChange} />     
//                 <button className={css.button} type="submit">Add contact</button>
//     </form>
    
//         )
//     }
// }