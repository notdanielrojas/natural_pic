import { Container } from "react-bootstrap"; // Importa el componente Container de react-bootstrap

const NotFound = () => {
  // Define la vista NotFound
  return (
    <Container // Contenedor principal
      className='pt-5 d-flex flex-column justify-content-center text-center w-100' // Clases de estilo para centrar el contenido verticalmente y horizontalmente
      style={{ minHeight: "70vh" }} // Altura mínima del contenedor
    >
      <p className='icono-error'>⛔</p> {/* Icono de error */}
      <h1>Error 404: La página no ha sido encontrada.</h1>{" "}
      {/* Mensaje de error */}
    </Container>
  );
};

export default NotFound; // Exporta la vista NotFound como predeterminada
