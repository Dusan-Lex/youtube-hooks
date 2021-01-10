import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onSearchSubmit(inputValue);
  };

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onSubmitHandler}>
        <div className="field">
          <label>Video search</label>
          <input
            type="text"
            value={inputValue}
            onChange={onChangeHandler}
          ></input>
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
