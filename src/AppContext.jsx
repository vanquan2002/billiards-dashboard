import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tableItemOpen, setTableItemOpen] = useState([]);
  const [tableItemOrderFirst, setTableItemOrderFirst] = useState([]);
  const [isBillModal, setIsBillModal] = useState([]);

  const toggleTableItemOpen = (arr) => setTableItemOpen(arr);
  const toggleTableItemOrderFirst = (arr) => setTableItemOrderFirst(arr);
  const toggleIsBillModal = (bol) => setIsBillModal(bol);

  return (
    <AppContext.Provider
      value={{
        tableItemOpen,
        toggleTableItemOpen,
        tableItemOrderFirst,
        toggleTableItemOrderFirst,
        isBillModal,
        toggleIsBillModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
