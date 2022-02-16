// import './App.css';

import { BrowserRouter, Routes,Route } from "react-router-dom";
import ScreenTask from "./pages/ScreenTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ScreenTask />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
