import PropTypes from 'prop-types';

import { Form, Label, Input, Button } from './Search.styled';

export const Search = ({ value, onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Search movie:
        <Input
          type="text"
          name="searchName"
          value={value}
          onChange={onChange}
          autoComplete="off"
          autoFocus
          placeholder="enter a name..."
          pattern="[A-Za-z0-9]+"
          title="Only letters and numbers are allowed"
        />
      </Label>
      <Button type="submit">
        <span role="img" aria-label="Search">
          🔍
        </span>
      </Button>
    </Form>
  );
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
