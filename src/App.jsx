import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Phonebook } from './components/Phonebook/Phonebook.jsx';
import { fetchContacts } from 'redux/operations.js';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return <Phonebook />;
};
