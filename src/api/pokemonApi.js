//Para usar Axios hay que primero que nada instalarlo en el proyecto con
// npm install axios
// segundo se debe hacer la importacion de axios con el codigo de abajo

import axios from "axios";

// axios lo que hace es crear la estructura base de la peticion que se 
//hara a la api

const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export default pokemonApi