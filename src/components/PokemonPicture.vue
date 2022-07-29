<template>
<div class="pokemon-container">

    <!-- Ojo, para poder usar la propiedad computada hay que usar el v-bind
    en el src para que funcione, se manda la propiedad computada sin
    los () para que funcione de igual manera -->
  <img class="hidden-pokemon" :src="imgSrc" alt="pokemon">
  <img class="fade-in" v-if="showPokemon" :src="imgSrc" alt="pokemon">
</div>



</template>

<script>
export default {

    props: {
        // Definir directamente el nombre de la propiedad que recibira el dato
        pokemonId: {
            type: Number,
            required: true
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }

    },
    computed: {
        imgSrc() {
            // se puede manejar la prop directamente en el url del link
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        } 
    }
}
</script>

<style scoped>
    .pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    right: 32%;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}

    .hidden-pokemon {
        filter: brightness(0);
    }

</style>