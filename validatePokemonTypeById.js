const fetch = require("node-fetch");

const apiCall = async (pokemonId) => {
    try {
        const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
        const result = await api.json();
        return result;
    } catch (error) {
        return error;
    }
}

const validatePokemonTypeById = async (pokemonId, typeOfPokemon) => {
    try {
        let pokemonToFind = await apiCall(pokemonId);
        let result;
        for (let i = 0; i < pokemonToFind.types.length; i++) {
            if (pokemonToFind.types[i].type.name === typeOfPokemon) {
                result = true;
                break;
            } else {
                result = false;
            }
        }
        return result;
    } catch (error) {
        return error;
    }
}

module.exports = validatePokemonTypeById;