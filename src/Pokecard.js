import "./Pokecard.css"

function Pokecard( props ){
  let {id, name, type , base_experience } = props;
  let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  return  (
    <div className = "Pokecard">
      <p>{name}</p>
      <img src = {img} alt={`Pokemon:${name}`}></img>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  )
}

export default Pokecard
