import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./Components/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Products" element={<Products />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
