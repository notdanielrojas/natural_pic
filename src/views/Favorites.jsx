import { Container, Row } from "react-bootstrap"; // Importa los componentes Container y Row de react-bootstrap
import Gallery from "../components/Gallery"; // Importa el componente Gallery

export default function Favoritos() {
  // Define la vista Favoritos
  return (
    <Container>
      {" "}
      {/* Contenedor principal */}
      <h1 className='py-3'>Favoritos</h1> {/* Título de la página */}
      <Row xs={1} md={2} lg={4} className='g-3 mb-3'>
        {" "}
        {/* Fila con ajuste de columnas según el tamaño de la pantalla */}
        <Gallery filtro={"favoritos"} />{" "}
        {/* Galería filtrada por fotos marcadas como favoritas */}
      </Row>
    </Container>
  );
}
