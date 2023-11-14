import css from "./conctactList.module.css";
import ContactItem from "./contactItem"

export default function ContactList({ contacts, onDeleteContact }) {
    return (
        <ul className={css.contactList}>
            {contacts.map(({ id, name, number }) => (<li key={id} className={css.contactItem}>
                <ContactItem is={id} name={name} number={number} onDelete={() => onDeleteContact(id)} /> </li>))}
        </ul>
    )
}