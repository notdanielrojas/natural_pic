import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FotoProvider } from "./contexts/FotoContext";
import Navbar from "./componentes/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <FotoProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favoritos' element={<Favoritos />} />{" "}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FotoProvider>
    </>
  );
}

export default App;
