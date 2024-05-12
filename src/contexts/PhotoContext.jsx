import { createContext, useState, useEffect } from "react"; // Importa funciones y hooks de React
import PropTypes from "prop-types"; // Importa el módulo PropTypes para la validación de tipos
const baseURL = "https://api.pexels.com/v1/curated?page=10&per_page=40"; // URL base de la API de Pexels
const API_KEY = "VGVXd8nnBL31B9m0FD4m39m76Vbddv82W37YYq737OB49SnruQT7klFl"; // Clave de la API de Pexels

export const Context = createContext(); // Crea un contexto llamado Context

export function PhotoProvider({ children }) {
  // Define el proveedor de contexto PhotoProvider
  const [fotos, setFotos] = useState([]); // Estado para almacenar las fotos

  const getData = async () => {
    // Función para obtener los datos de la API
    const res = await fetch(baseURL, {
      // Realiza la solicitud a la API
      headers: {
        Authorization: API_KEY, // Agrega la clave de autorización en los encabezados
      },
    });
    const data = await res.json(); // Convierte la respuesta en formato JSON
    const photos = data.photos.map((photo) => {
      // Mapea los datos de las fotos
      return {
        id: photo.id, // ID de la foto
        src: photo.src.tiny, // URL de la imagen en tamaño pequeño
        alt: photo.alt, // Texto alternativo de la imagen
        liked: false, // Estado inicial de "liked" (favorito)
      };
    });

    setFotos(photos); // Establece las fotos en el estado
  };

  useEffect(() => {
    // Efecto para cargar datos al montar el componente
    getData(); // Llama a la función para obtener los datos
  }, []); // Dependencia vacía, se ejecuta solo una vez al montar el componente

  const globalState = { fotos, setFotos }; // Objeto de estado global

  return <Context.Provider value={globalState}> {children} </Context.Provider>; // Proporciona el contexto y los componentes hijos
}

PhotoProvider.propTypes = {
  children: PropTypes.node.isRequired, // Propiedad children es un nodo requerido
};
