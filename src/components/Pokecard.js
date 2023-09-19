import "./Pokecard.css";

const Pokecard = ({ id, name, type, base_experience }) => {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  console.log(id);
  return (
    <div className="col col-3 Pokecard mx-2 my-3">
      <h3 className="Pokecard-title">{name}</h3>
      <div className="Pokecard-image">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">EXP: {base_experience}</div>
    </div>
  );
};

export default Pokecard;
