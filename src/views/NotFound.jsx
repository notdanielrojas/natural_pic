import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container
      className='pt-5 d-flex flex-column justify-content-center text-center w-100'
      style={{ minHeight: "70vh" }}
    >
      <p className='icono-error'>⛔</p>
      <h1>Error 404: La página no ha sido encontrada.</h1>
    </Container>
  );
};

export default NotFound;
