const fetch = require("node-fetch");

const apiCall = async (nameOfPokemon) => {
    try {
        const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOfPokemon}/`);
        const result = await api.json();
        return result;
    } catch (error) {
        return error;
    }
}

const findPokemonIdByName = async (nameOfPokemon) => {
    try {
        let pokemonToFind = await apiCall(nameOfPokemon);
        return pokemonToFind.id;
    } catch (error) {
        return error;
    }

}

module.exports = findPokemonIdByName;