import { useState } from "react";
import VideoRecorder from "./components/VideoRecorder";
import SignsListCourse from "./components/SignsListCourse";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import PresentationContent from "./components/PresentationContent";
import ValidateAnimationSection from "./components/ValidateAnimationSection";
import Footer from "./components/Footer";
import { AvatarContext } from "../src/context/AvatarContext";

import "./index.css";
import "./App.css";

const Juanchito = {
  name: "Juanchito",
  glbPath: "./assets/models/AvatarHombre.glb",
  fbxPath: "./assets/Animations/Saludo_Hombre.fbx",
};

const Leidy = {
  name: "Leidy",
  glbPath: "./assets/models/AvatarMujer.glb",
  fbxPath: "./assets/Animations/Saludo_Mujer.fbx",
};

export default function Scene() {
  const [avatar, setAvatar] = useState(Juanchito);

  return (
    <AvatarContext.Provider value={{ avatar, setAvatar, Juanchito, Leidy }}>
      <div className="flex flex-col bg-gray-100">
        <Header />
        <PresentationContent />
        <SignsListCourse />
        <ValidateAnimationSection  />
        <Footer />
      </div>
    </AvatarContext.Provider>
  );
}
