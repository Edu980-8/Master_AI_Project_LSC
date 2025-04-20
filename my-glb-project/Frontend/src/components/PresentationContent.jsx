// En esta seccion se realizara el contenido de la presentacion de la pagina. El getStarted y el learnMore seran los encargados de llevarnos a traves de un recorrido por la plataforma, alli conoceremos como funciona tanto el avatar como el sistema de reconocimiento de gestos.

import React from "react";
import PresentationText from "./PresentationText";
import Avatar from "./Avatar";
import { useAvatar } from "../context/AvatarContext";

const PresentationContent = () => {
  const { avatar, setAvatar, Juanchito, Leidy } = useAvatar();
  const handleChange = () => {
    setAvatar(avatar.name === "Leidy" ? Juanchito : Leidy);
  };
  return (
    <div className="grid grid-cols-2 items-center  mt-35  mx-4 shadow-lg shadow-gray-300 bg-white rounded-2xl p-4">
      <PresentationText nombre={avatar.name}></PresentationText>
      <div className="flex  flex-row justify-center p-4 bg-gradient-to-b from-gray-100 to-gray-300 h-full rounded-xl shadow-md">
        <div className="relative flex flex-col items-center justify-center w-full h-full">
          <button
            className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 z-40  absolute top-0  right-0 rounded"
            onClick={handleChange}
          >
            Cambiar Avatar
          </button>
          <Avatar glbPath={avatar.glbPath} fbxPath={avatar.fbxPath} />
        </div>
        
      </div>
    </div>
  );
};

export default PresentationContent;
