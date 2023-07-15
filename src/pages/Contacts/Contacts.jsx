import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { fetchContacts } from 'redux/tasks/operations';
import { selectLoading } from 'redux/tasks/selectors';
import { ContactsList } from 'components/ContactsList/ContactsList';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </>
  );
}
