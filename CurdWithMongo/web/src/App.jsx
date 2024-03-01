import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Read from "./pages/Read";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
