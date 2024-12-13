import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import TableScreen from "./screens/TableScreen";
import { useContext } from "react";
import { AppContext } from "./AppContext";

function App() {
  const { themeDarkMode } = useContext(AppContext);

  return (
    <div className={`${themeDarkMode ? "dark" : ""}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/table" element={<TableScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
