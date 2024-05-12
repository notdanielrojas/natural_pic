import PropTypes from "prop-types"; // Importa el módulo PropTypes para la validación de tipos
import { Col, Card } from "react-bootstrap"; // Importa los componentes Col y Card de react-bootstrap
import { useContext } from "react"; // Importa el hook useContext de React
import { Context } from "../contexts/PhotoContext"; // Importa el contexto PhotoContext
import IconHeart from "./IconHeart"; // Importa el componente IconHeart

export default function Gallery({ filtro = "home" }) {
  // Declara un componente Gallery con un prop filtro por defecto "home"
  const { fotos } = useContext(Context); // Obtiene el contexto de fotos usando el hook useContext

  return (
    <>
      {" "}
      {/* Fragmento de React */}
      {fotos
        .filter((foto) => (filtro === "favoritos" ? foto.liked === true : true)) // Filtra las fotos según el valor de filtro
        .map(
          (
            foto // Mapea las fotos filtradas para renderizarlas
          ) => (
            <Col key={foto.id}>
              {" "}
              {/* Col componente de react-bootstrap con una clave única */}
              <Card className='text-white'>
                {" "}
                {/* Card componente de react-bootstrap */}
                <Card.Img src={foto.src} alt={foto.alt} />{" "}
                {/* Imagen de la tarjeta */}
                <Card.ImgOverlay>
                  {" "}
                  {/* Capa superpuesta de la tarjeta */}
                  <Card.Text className='text-end'>
                    {" "}
                    {/* Texto en la esquina superior derecha */}
                    <IconHeart id={foto.id} />{" "}
                    {/* Icono de corazón con un ID de foto */}
                  </Card.Text>
                  <Card.Text>{foto.alt}</Card.Text>{" "}
                  {/* Texto de la descripción de la foto */}
                </Card.ImgOverlay>
              </Card>
            </Col>
          )
        )}
    </>
  );
}

Gallery.propTypes = {
  filtro: PropTypes.string.isRequired, // Propiedad filtro es una cadena requerida
};
