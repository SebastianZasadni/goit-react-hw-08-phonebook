import { useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { deleteContact } from 'redux/operations';
import { Filter } from 'components/Filter/Filter';
import { selectContactsCount } from 'redux/selectors';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const contactsCount = useSelector(selectContactsCount);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().startsWith(filter && filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return contactsCount > 0 ? (
    <div className={css.sectionContacts}>
      <h3>Contacts</h3>
      <h5>
        You have{' '}
        {contactsCount === 1
          ? contactsCount + ' contact.'
          : contactsCount + ' contacts.'}
      </h5>
      <ul className={css.contactsList}>
        {filter
          ? filteredContacts.map(c => (
              <li key={c.id}>
                {c.name}: {c.number}
                <button type="button" onClick={() => handleDelete(c.id)}>
                  Delete
                </button>
              </li>
            ))
          : contacts.map(c => (
              <li key={c.id}>
                {c.name}: {c.number}
                <button type="button" onClick={() => handleDelete(c.id)}>
                  Delete
                </button>
              </li>
            ))}
      </ul>
      <Filter />
    </div>
  ) : (
    <p>You have no contacts.</p>
  );
};
