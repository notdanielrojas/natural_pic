// Importa las funciones necesarias de React y PropTypes
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Define la URL base para la API de Pexels y la clave de API
const baseURL = "https://api.pexels.com/v1/curated?page=10&per_page=40";
const API_KEY = "VGVXd8nnBL31B9m0FD4m39m76Vbddv82W37YYq737OB49SnruQT7klFl";

// Crea un contexto de React
export const Context = createContext();

// Define un componente funcional llamado PhotoProvider que utiliza children
export function PhotoProvider({ children }) {
  // Define el estado 'fotos' usando el hook useState, inicialmente vacío
  const [fotos, setFotos] = useState([]);

  // Define una función asincrónica llamada 'getData' para obtener datos de la API de Pexels
  const getData = async () => {
    // Realiza una solicitud GET a la API de Pexels con la clave de autorización
    const res = await fetch(baseURL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    // Convierte la respuesta en formato JSON
    const data = await res.json();
    // Extrae la información relevante de las fotos y las almacena en un formato deseado
    const photos = data.photos.map((photo) => {
      return {
        id: photo.id,
        src: photo.src.tiny,
        alt: photo.alt,
        liked: false,
      };
    });

    // Actualiza el estado 'fotos' con los datos obtenidos de la API
    setFotos(photos);
  };

  // Ejecuta la función 'getData' una vez al montar el componente (usando useEffect)
  useEffect(() => {
    getData();
  }, []);

  // Define un objeto 'globalState' que contiene el estado 'fotos' y la función 'setFotos'
  const globalState = { fotos, setFotos };

  // Renderiza el contexto proporcionando el valor 'globalState' a sus hijos
  return <Context.Provider value={globalState}> {children} </Context.Provider>;
}

// Define el tipo de propiedades esperadas para el componente PhotoProvider
PhotoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
