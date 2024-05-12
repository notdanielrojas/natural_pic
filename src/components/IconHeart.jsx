import PropTypes from "prop-types"; // Importa el módulo PropTypes para la validación de tipos
import { useContext } from "react"; // Importa el hook useContext de React
import { Context } from "../contexts/PhotoContext"; // Importa el contexto PhotoContext

export default function IconHeart({ id }) { // Define el componente IconHeart con un prop id
  const { fotos, setFotos } = useContext(Context); // Obtiene el contexto de fotos y la función para establecer fotos
  const fotoFavorita = fotos.find((foto) => foto.id === id); // Busca la foto correspondiente al ID proporcionado

  function handleClick() { // Función para manejar el clic en el icono de corazón
    fotoFavorita.liked = !fotoFavorita.liked; // Cambia el estado liked de la foto
    const newFotos = [...fotos]; // Crea una copia del array de fotos
    setFotos(newFotos); // Actualiza el estado de las fotos con la nueva copia
  }

  const color = fotoFavorita.liked ? "red" : "white"; // Determina el color del corazón según el estado liked

  return (
    <span className='heart' onClick={handleClick}> {/* Contenedor del icono de corazón */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill={color}
        className='bi bi-heart-fill'
        viewBox='0 0 16 16'
      >
        <path
          fillRule='evenodd'
          d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
        />
      </svg>
    </span>
  );
}

IconHeart.propTypes = {
  id: PropTypes.number.isRequired, // Propiedad id es un número requerido
};
