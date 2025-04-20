import { Link } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navItems = ["Inicio", "Cursos", "Práctica", "Contacto"];

  return (
    <header className="flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur px-12 py-4 shadow-md">
      {/* Logo */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-1">
          <img className="w-12 h-12" src="/assets/puno.png" alt="Logo de la plataforma" />
          <img className="w-12 h-12" src="/assets/colombia.png" alt="Bandera de Colombia" />
        </div>
        <p>
          <span className="font-bold text-md text-yellow-300">Hablando </span>
          <span className="font-bold text-md text-blue-500">con las </span>
          <span className="font-bold text-md text-red-500">Manos</span>
        </p>
      </div>

      {/* Menú de navegación */}
      <nav>
        <ul className="flex gap-10 text-md font-semibold items-center">
          {navItems.map((item, index) => (
            <li
              key={item}
              className="relative cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <p>{item}</p>
              {activeIndex === index && (
                <motion.div
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-500"
                  layoutId="underline"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Botón de inicio de sesión */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Iniciar Sesión
      </button>
    </header>
  );
};

export default Header;
