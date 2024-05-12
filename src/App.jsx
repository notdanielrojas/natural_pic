import "bootstrap/dist/css/bootstrap.min.css"; // Importa el archivo CSS de Bootstrap
import "./App.css"; // Importa el archivo CSS de la aplicación

import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importa componentes de react-router-dom
import { PhotoProvider } from "./contexts/PhotoContext"; // Importa el proveedor de contexto PhotoProvider
import Navbar from "./components/Navbar"; // Importa el componente Navbar
import Home from "./views/Home"; // Importa la vista Home
import Favoritos from "./views/Favorites"; // Importa la vista Favoritos
import NotFound from "./views/NotFound"; // Importa la vista NotFound

function App() { // Define el componente principal App
  return (
    <> {/* Fragmento de React */}
      <PhotoProvider> {/* Proveedor de contexto para las fotos */}
        <BrowserRouter> {/* Componente de enrutamiento */}
          <Navbar /> {/* Barra de navegación */}
          <Routes> {/* Componente de enrutamiento */}
            <Route path='/' element={<Home />} /> {/* Ruta para la vista Home */}
            <Route path='/favoritos' element={<Favoritos />} />{" "} {/* Ruta para la vista Favoritos */}
            <Route path='*' element={<NotFound />} /> {/* Ruta para la vista NotFound */}
          </Routes>
        </BrowserRouter>
      </PhotoProvider>
    </>
  );
}

export default App; // Exporta el componente App como predeterminado
