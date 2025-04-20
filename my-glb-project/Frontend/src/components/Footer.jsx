import { div } from "motion/react-client";

const Footer = () => {
  return (
    <div className="flex flex-col bg-black mt-6 p-4 text-white">
      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto ">
        <div className="flex flex-col ">
          <h3 className="text-lg font-semibold  ">Hablando con las Manos</h3>
          <div className="mt-4 grid grid-cols-3 h-[0.3rem] w-35 border border-white/50 align-center rounded-full shadow-xl">
            <div className="bg-yellow-500 "></div>
            <div className="bg-blue-600"></div>
            <div className="bg-[#FF0000]"></div>
          </div>

          <p className=" mt-4">
            Nuestro equipo quiere que tu aprendizaje sea divertido y efectivo,
            por lo que hemos desarrollado una plataforma que te ayudará a
            aprender y comunicarte con tu hijo sordo.
          </p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-semibold  ">Contactanos</h3>
          <img src="./assets/whatsapp.png" alt="" />
          <img src="./assets/facebook.png" alt="" />
          <img src="./assets/instagram.png" alt="" />
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-semibold  ">Redes Sociales</h3>
          <p className=" mt-4">
            Si te gusta nuestro contenido, no dudes en seguirnos en nuestras
            redes sociales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
