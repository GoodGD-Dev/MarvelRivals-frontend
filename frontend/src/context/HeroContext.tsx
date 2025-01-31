import { createContext, useEffect, useState } from "react";
import axios from "axios";

export interface Hero {
  id: string;
  name: string;
  image: string;
}

interface HeroContextType {
  heroes: Hero[];
}

export const HeroContext = createContext<HeroContextType | undefined>(
  undefined
);

export function HeroProvider({ children }: { children: React.ReactNode }) {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/heroes/")
      .then((response) => setHeroes(response.data))
      .catch((error) => console.error("Erro ao buscar heróis", error));
  }, []);

  return (
    <HeroContext.Provider value={{ heroes }}>{children}</HeroContext.Provider>
  );
}
