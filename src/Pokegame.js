import Pokedex from "./Pokedex"
import "./Pokegame.css"
import _ from "lodash"

function Pokegame( props ) {
  
  let pokeList=[
    {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
    {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
    {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
    {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
    {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
    {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
    {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
    {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
  ]
  
  pokeList = _.shuffle(pokeList);
  
  let pokedex1 = pokeList.slice(0, 4);
  let pokedex2 = pokeList.slice(4, pokeList.length);
  
  let pokedex1Score = addAllExperience(pokedex1);
  let pokedex2Score = addAllExperience(pokedex2);
  
  return ( 
    <div className = "pokegame"> 
      <Pokedex pokedex={pokedex1}/>
      <p>Player 1 score: {pokedex1Score}</p>
      <Pokedex pokedex={pokedex2}/>
      <p>Player 2 score: {pokedex2Score}</p>
    </div> )  
}

function addAllExperience(pokedex){
    let total = 0;
    
    pokedex.forEach( ele => total =+ ele.base_experience);
    
    return total;
}

export default Pokegame