import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <ContactsForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </>
  );
};

export default Contacts;
