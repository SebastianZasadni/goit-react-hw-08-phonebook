import css from './Phonebook.module.css';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactsList } from '../ContactsList/ContactsList';

export const Phonebook = () => {
  return (
    <div className={css.sectionPhonebook}>
      <h1>Phonebook</h1>
      <ContactsForm />
      <ContactsList />
    </div>
  );
};
