import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tableSelect, setTableSelect] = useState([]);

  const toggleSelectTable = (id) =>
    setTableSelect((prevState) =>
      prevState.includes(id)
        ? prevState.filter((item) => item !== id)
        : [...prevState, id]
    );

  return (
    <AppContext.Provider value={{ tableSelect, toggleSelectTable }}>
      {children}
    </AppContext.Provider>
  );
};

// Thêm propTypes cho children
AppProvider.propTypes = {
  children: PropTypes.node.isRequired, // hoặc PropTypes.any nếu bạn không biết kiểu chính xác
};
