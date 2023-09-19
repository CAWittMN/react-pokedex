import "./Pokedex.css";
import Pokecard from "./Pokecard";
const Pokedex = (props) => {
  return (
    <div className="Pokedex container text-center">
      <h1 className="Pokedex-title">Pokedex</h1>
      <h4 className="Pokedex-exp">Total Experience: {props.exp}</h4>
      <h4 className={props.isWinner ? "Pokedex-winner" : "Pokedex-loser"}>
        {props.isWinner ? "WINNER!" : "LOSER!"}
      </h4>
      <div className="row">
        {props.pokemon.map((p) => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            base_experience={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
