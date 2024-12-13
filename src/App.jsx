import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import TableScreen from "./screens/TableScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/table" element={<TableScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
