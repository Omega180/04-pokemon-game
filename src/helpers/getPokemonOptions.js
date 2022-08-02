import pokemonApi  from '../api/pokemonApi'

// Funcion que se usa para poder crear el arreglo de pokemons
// y ponerles un numero asignado
const getPokemons = () => {
    // lo que hace aca es crear un arreglo basado en el arreglo de adentro
    const pokemonsArr = Array.from( Array(650) )
    
    // .map es una funcion de los arreglos que permite barrer cada uno de los
    //valores del arreglo, luego se le agregara el index + 1 por cada barrido

    return pokemonsArr.map( (_ , index ) => index + 1 )

}

// funcion principal a exportar

const getPokemonOptions = async() => {
    // Sort lo que hace es randomizar el orden en el que los valores 
    // se ordenan dentro del Array
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    // la funcion de splice corta los valores que le indiques del arreglo
    //en este caso, toma la 0, 1 , 2 y 3, ademas esta como async para poder
    // resolver las promesas dentro de la funcion
    const pokemons =  await getPokemonNames(mixedPokemons.splice(0,4))

    return pokemons
}
 // se le pasa el arreglo como un array y se desestructura para poder acceder
 // como variables


 // funcion que se usa para traerse los datos con axios de la api 
const getPokemonNames = async( [a,b,c,d] = [] ) => {
    // se crea un arreglo de promesas, que son basicamente las peticiones 
    // por Axios
    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]

    // se desestructura el arreglo para poder elegir los 4 resultados

     const [p1, p2, p3, p4] = await Promise.all(promiseArr)
     return [
        //se retornan los valores name y id de los pokemones tomados de la
        //peticion de axios
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id}
     ]
}

export default getPokemonOptions