import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  createContext,
} from 'react';

// for search api

const URL = 'https://openlibrary.org/search.json?title=';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  //make random word
  const keywords = [
    'history',
    'science',
    'fiction',
    'biography',
    'philosophy',
    'harry',
    'games',
    'flowers',
    'key',
    'cat',
    'rich',
    'poor',
    'up',
    'run',
    'country',
    'animal',
    'smile',
    'tree',
    'left',
  ];
  const random_keyword = keywords[Math.floor(Math.random() * keywords.length)];

  // try two req for search api

  const [searchTerm, setSearchTerm] = useState(random_keyword);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState('');

  //discover more about this thing
  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;
          return {
            id: key,
            auuthor: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            publish_year: first_publish_year,
            title: title,
          };
        });

        setBooks(newBooks);

        if (newBooks.length > 1) {
          setResultTitle('Your search result');
        } else {
          setResultTitle('No search result found');
        }
      } else {
        setBooks([]);
        setResultTitle('No search result found');
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        resultTitle,
        setResultTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
