import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const inputFilterHandler = evt => {
    dispatch(setFilter(evt.target.value));
  };
  return <input type="text" style={{margin: '10px'}} name="filter" onChange={inputFilterHandler} />;
};

