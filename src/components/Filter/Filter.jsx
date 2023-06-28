import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'components/redux/selectors';
import { setFilter } from 'components/redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onFilterChange = e => {
    const { value } = e.target;

    dispatch(setFilter(value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        placeholder="Enter name"
        onChange={onFilterChange}
        value={filter}
      />
    </Label>
  );
};

export default Filter;
