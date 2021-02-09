import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchWord } from "../Redux/actions/searchForWordAction";

function Search() {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(searchWord(textInput));
    setTextInput("");
  };
  return (
    <>
      <form className="search" action="">
        <input
          type="text"
          placeholder="search..."
          value={textInput}
          onChange={inputHandler}
        />
        <button className="search__button" onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default Search;
