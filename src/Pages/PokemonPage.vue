<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
        <h1>Quien es este pokemon?</h1>
        <!-- recomendado que los componentes personalizados esten escritos como
        UpperCamelCase para que se vean como componentes, y los vbinds como kebabcase -->
        <PokemonPictures :pokemon-id="pokemon.id"
                         :show-pokemon="showPokemon"/>
        <!-- se le pasa el arreglo montado, el @selection es un evento
        personalizado creado en el pokemonOptions -->
        <PokemonOptions :pokemons="pokemonArr"
                        @selection="checkAnswer"
        />

        <!--tambien se puede usar <template/> para no crear un div agrupador para temas de css-->
        <div v-if="showAnswer" >
        <h2 >{{ message }}</h2>
        <button @click="newGame">Nuevo Juego</button>
        </div>
        

    </div>
</template>

<script>

// Componente encargado de cargar las opciones en base a la imagen que se muestra
import PokemonOptions from '@/components/PokemonOptions.vue'

 // Componente encargado en cargar la imagen en el momento respectivo
import PokemonPictures from '@/components/PokemonPicture.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

//console.log(getPokemonsOptions())

export default {
    components: {
        PokemonOptions,
        PokemonPictures
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        //se crea el metodo, que lo que hace es tomar el arreglo vacio
        //de la data, y llama al metodo de getPokemonOptions y lo almacena ahi
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            // randomizar el numero de 0 a 3
            const  rndInt = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr[rndInt]
            
        },
        checkAnswer(pokemonId) {
            this.showAnswer = true
            if (pokemonId === this.pokemon.id) {
                this.showPokemon = true
                this.message = `Correcto, este pokemon es ${this.pokemon.name}`
            } else {
                this.showPokemon = false
                this.message = `Falso, este pokemon es ${this.pokemon.name}`
            }
            
            
        },
        // asi se recarga la pagina completa
        // newGame() {
        //     document.location.reload(true)
        // }

        newGame() {
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null
            this.mixPokemonArray()
        }
    },
    // mounted permite llamar al metodo al momento que se carga la pagina
    mounted() {
        this.mixPokemonArray()
    }
}
</script>
