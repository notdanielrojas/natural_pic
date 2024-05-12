import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
const baseURL = "https://api.pexels.com/v1/curated?page=10&per_page=40";
const API_KEY = "VGVXd8nnBL31B9m0FD4m39m76Vbddv82W37YYq737OB49SnruQT7klFl";

export const Context = createContext();

export default function PhotoProvider({ children }) {
  const [fotos, setFotos] = useState([]);

  const getData = async () => {
    const res = await fetch(baseURL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await res.json();
    const photos = data.photos.map((photo) => {
      return {
        id: photo.id,
        src: photo.src.tiny,
        alt: photo.alt,
        liked: false,
      };
    });

    setFotos(photos);
  };

  useEffect(() => {
    getData();
  }, []);

  const globalState = { fotos, setFotos };

  return <Context.Provider value={globalState}> {children} </Context.Provider>;
}

PhotoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
