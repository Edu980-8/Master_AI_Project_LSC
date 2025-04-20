import { createContext, useContext } from "react";

// Creamos el contexto
export const AvatarContext = createContext();

// Hook personalizado para usar el contexto
export function useAvatar() {
  return useContext(AvatarContext);
}
