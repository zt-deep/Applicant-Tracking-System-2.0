import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import searchImage from '../images/Search.svg';

function SearchComponent({
  getSearch = () => {},
  inputClass = '',
  value = '',
  placeholder = 'Search',
}) {
  // const [searchText, setSearchText] = useState('');
  // const previousSearchText = usePreviousValue(searchText || '');

  // useEffect(() => {
  //   if (searchText.length > 2) {
  //     getSearch(searchText);
  //   } else if (
  //     searchText.length === 0
  //     && previousSearchText
  //     && searchText !== previousSearchText
  //     && searchText.length < previousSearchText.length
  //   ) {
  //     getSearch('');
  //   }
  // }, [searchText, previousSearchText, getSearch]);

  return (
    <div
      className={clsx(['flex-start-center', 'search-component', inputClass])}
    >
      <img
        src={`${searchImage}`}
        style={{ width: 18, height: 18 }}
        className="icon"
        alt="search icon"
      />
      <input
        type="text"
        placeholder={placeholder || 'Search'}
        name="searchText"
        value={value}
        style={{ marginLeft: 6 }}
        onChange={getSearch}
        className="input-search"
      />
    </div>
  );
}

SearchComponent.defaultProps = {
  inputClass: '',
  placeholder: 'Search...',
};

SearchComponent.propTypes = {
  getSearch: PropTypes.func.isRequired,
  inputClass: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default SearchComponent;
