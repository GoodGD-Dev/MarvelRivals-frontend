import { useContext } from "react";
import { HeroContext } from "../context/HeroContext";

export default function Heroes() {
  const context = useContext(HeroContext);

  if (!context) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Heróis</h1>
      <ul>
        {context.heroes.map((hero) => (
          <li key={hero.id}>
            <img src={`${hero.image}`} alt={hero.name} width={100} />
            <p>{hero.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
