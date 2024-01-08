import PropTypes from 'prop-types';

export const Search = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Movie name:
        <input
          type="text"
          name="searchName"
          value={value}
          onChange={onChange}
          autoComplete="off"
          autoFocus
          placeholder="Movie name..."
        />
      </label>
      <button type="submit">
        <span role="img" aria-label="Search">
          🔍
        </span>
      </button>
    </form>
  );
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
