import { div } from "motion/react-client";
import ProgressBar from "./ProgressBar";

const cards = [
  {
    img: "",
    title: "Nivel Básico",
    description:
      "Aprende señas básicas, aquí podras encontrar saludos y el alfabeto dactilológico.",
    lessons: 3,
    progress: 12,
  },
  {
    img: "",
    title: "Nivel Intermedio",
    description:
      " Aquí encontrarás señas relacionadas con los miembros de la familia, animales y objetos, ademas de interacciones sociales.",
    lessons: 4,
    progress: 5,
  },
  {
    img: "",
    title: "Nivel Avanzado",
    description:
      "Expresiones mas avanzadas expresiones relacionadas con la cultura colombiana, festivales y eventos culturales.",
    lessons: 5,
    progress: 24,
  },
];

const SignsListCourse = () => {
  return (
    <div className="flex flex-col bg-gray-100 mt-6 ">
      <h1 className="text-3xl font-bold text-gray-800 mt-4 px-20 py-4">
        Niveles de aprendizaje
      </h1>
      <div className="grid grid-cols-3 mt-2 gap-4 p-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4 w-[80%] mx-auto "
          >
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              {card.title}
            </h2>
            <img className="w-full h-[10rem]" src="" alt="" />
            <p className="text-gray-600 mt-4">{card.description}</p>
            <div className="grid grid-cols-2 mt-6">
              <p className="text-gray-600 ">{card.lessons} Lecciones</p>
              <ProgressBar progressQuantity={card.progress}></ProgressBar>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[92%] mx-auto mt-8 bg-white border border-gray-200 rounded-lg shadow-md p-4  ">
        <h2 className="text-lg font-semibold  text-gray-800">Progreso General</h2>
        <ProgressBar progressQuantity={50}></ProgressBar>
      </div>
    </div>
  );
};

export default SignsListCourse;
