
const PresentationText = ({ nombre  }) => {
  return (
    <div className="flex flex-col  ml-10 gap-8 my-12 ">
        <h1 className="text-left text-4xl font-bold text-black font-semibold ">
          Hablando con las Manos (IA con Propósito)
        </h1>
        <p className="text-left mt-4 text-lg">
          En esta plataforma aprenderás a comunicarte con tu hijo sordo a través
          de la lengua de señas. Te acompañaremos en un proceso interactivo de
          aprendizaje y reconocimiento de gestos. Nuestro asistente virtual {" "}
          <span className="font-bold">{nombre}</span>, te guiará en cada paso,
          evaluando tu progreso y ayudándote a mejorar junto con la herramienta.
        </p>
        <div className="flex flex-row gap-4 mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Primeras Señas
          </button>
          <button className="bg-white border-2 border-blue-500 text-gray-600  hover:bg-blue-700 hover:text-white font-semibold py-2 px-4 rounded">
            Aprende Más
          </button>
        </div>
      </div>
  )
}

export default PresentationText
