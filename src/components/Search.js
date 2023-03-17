import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  const { setSearchTerm, setResultTitle } = useGlobalContext(); //read more
  const searchText = useRef(''); //read more
  const navigate = useNavigate(); //read more

  useEffect(() => searchText.current.focus(), []);

  function handleSubmit(e) {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, '').length === 0) {
      setSearchTerm('search...');
      setResultTitle('please enter smth...');
    } else {
      setSearchTerm(searchText.current.value);
    }
    navigate('/catalog');
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex content-center justify-center"
      >
        <div className="input_wrapper flex content-center ">
          <input
            type="text"
            placeholder="Search..."
            className="input input_search"
            ref={searchText}
          />
          <button
            type="submit"
            className="flex items-center"
            onClick={handleSubmit}
          >
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
