import { Container, Row } from "react-bootstrap"; // Importa los componentes Container y Row de react-bootstrap
import Gallery from "../components/Gallery"; // Importa el componente Gallery

export default function Home() {
  // Define la vista Home
  return (
    <>
      <Container>
        {" "}
        {/* Contenedor principal */}
        <h1 className='my-3'>Natural Pic</h1> {/* Título de la página */}
        <Row xs={1} md={2} lg={4} className='g-3 mb-3'>
          {" "}
          {/* Fila con ajuste de columnas según el tamaño de la pantalla */}
          <Gallery filtro={"home"} />{" "}
          {/* Galería filtrada por fotos para la página de inicio */}
        </Row>
      </Container>
    </>
  );
}
