import React from "react";
import VideoRecorder from "./VideoRecorder";
import Avatar from "./Avatar";
import { useAvatar } from "../context/AvatarContext";

const ValidateAnimationSection = () => {
  const { avatar } = useAvatar(); // Desestructuramos el avatar del contexto
  return (
    <div className="flex flex-col bg-gray-100 mt-6 ">
      <h1 className="text-3xl font-bold text-gray-800 mt-2 px-20 py-4">
        Lección Actual
      </h1>
      <div className="grid grid-cols-2  gap-16 bg-gray-100 my-8 w-full  px-20 mx-auto ">
        <section className="flex flex-col bg-white border border-gray-200  rounded-2xl shadow-md items-center py-4">
          <Avatar glbPath={avatar.glbPath} fbxPath={avatar.fbxPath} />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            Avatar de Referencia
          </h2>
        </section>
        <section className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow-md justify-center ">
          <VideoRecorder />
        </section>
      </div>
    </div>
  );
};

export default ValidateAnimationSection;
