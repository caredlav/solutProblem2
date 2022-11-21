const sumPokeByType = require("./sumPokeByType");
const findPokeByTwoTypes = require("./findPokeByTwoTypes");
const findPokeByName = require("./findPokemonIdByName");
const findPokeStatsById = require("./findPokemonStatsById");
const validatePokeTypeById = require("./validatePokemonTypeById");
const createArrayPokeById = require("./createArrayPokemonById");

const pokeApiFunctions = {
    totalPokeByOneType: async (typeOfPokemon) => {
        try {
            let result = await sumPokeByType(typeOfPokemon);
            console.log(`Cantidad de pokémones del tipo ${typeOfPokemon}: ${result}.`);
        } catch (error) {
            throw "Hay inconvenientes con la API."
        }
    },
    nameOfPokemonByTwoTypes: async (typeOfPokemon1, typeOfPokemon2) => {
        try {
            let result = await findPokeByTwoTypes(typeOfPokemon1, typeOfPokemon2);
            console.log(`Los pokémones de tipo ${typeOfPokemon1} y ${typeOfPokemon2} son: ${result.join(", ")}.`);
        } catch (error) {
            throw "Hay inconvenientes con la API."
        }
    },
    pokemonIdByName: async (nameOfPokemon) => {
        try {
            let result = await findPokeByName(nameOfPokemon);
            console.log(`El pokémon ${nameOfPokemon} corresponde al número ${result}.`);
        } catch (error) {
            throw "Hay inconvenientes con la API."
        }
    },
    statsOfPokemonById: async (pokemonId) => {
        try {
            let result = await findPokeStatsById(pokemonId);
            console.log(`Las estadísticas del pokémon con número ${pokemonId} son:`);
            console.log(result);
        } catch (error) {
            throw "Hay inconvenientes con la API."
        }
    },
    newArrayPokemonsById: async (pokemonIds, filter) => {
        try {
            let result = await createArrayPokeById(pokemonIds, filter);
            if (filter === "nombre") {
                console.log("Arreglo de pokémon(es) ordenado(s) por nombre:");
                console.log(result);
            } else if (filter === "tipo") {
                console.log("Arreglo de pokémon(es) ordenado(s) por tipo:");
                console.log(result);
            } else {
                console.log("Arreglo de pokémon(es) ordenado(s) por peso:");
                console.log(result);
            }
        } catch (error) {
            throw "Hay inconvenientes con la API."
        }
    },
    checkPokemonTypeById: async (pokemonId, typeOfPokemon) => {
        try {
            let result = await validatePokeTypeById(pokemonId, typeOfPokemon);
            console.log(result);
        } catch (error) {
            throw "Hay inconvenientes con la API."
        }
    }
}

// pokeApiFunctions.totalPokeByOneType("dark");
// pokeApiFunctions.nameOfPokemonByTwoTypes("dragon","flying");
// pokeApiFunctions.pokemonIdByName("rillaboom");
// pokeApiFunctions.statsOfPokemonById(25);
pokeApiFunctions.newArrayPokemonsById([537,201,621,25,889],"peso");
// pokeApiFunctions.checkPokemonTypeById(151,"psychic");