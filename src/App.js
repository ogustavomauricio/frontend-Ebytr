// import './App.css';

import { BrowserRouter, Routes,Route } from "react-router-dom";
import EditTable from "./pages/EditTable";
import ScreenTask from "./pages/ScreenTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ScreenTask />} />
        <Route path='/editTask/:id' element={<EditTable />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
