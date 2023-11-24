import { createContext, useContext, useState } from "react";
import books from "../books";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [selected, setSelected] = useState([]);
  const [bookList, setBookList] = useState(books);
  return (
    <GlobalContext.Provider
      value={{
        selected,
        setSelected,
        bookList,
        setBookList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
