<template>
    <h1>Quien es este pokemon?</h1>
    <PokemonPictures :pokemonId="8" :showPokemon="true"/>
    <PokemonOptions/>
</template>

<script>

// Componente encargado de cargar las opciones en base a la imagen que se muestra
import PokemonOptions from '@/components/PokemonOptions.vue'

 // Componente encargado en cargar la imagen en el momento respectivo
import PokemonPictures from '@/components/PokemonPicture.vue'

import getPokemonsOptions from '@/helpers/getPokemonOptions'

//console.log(getPokemonsOptions())

export default {
    components: {
        PokemonOptions,
        PokemonPictures
    }
}
</script>
