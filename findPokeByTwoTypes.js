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

const findPokeByTwoTypes = async (typeOfPokemon1, typeOfPokemon2) => {
    try {
        let pokes = [];
        for (let i = 1; i <= 10249; i++) {
            if (i < 906 || i > 10000) {
                let apiResult = await apiCall(i);
                if (apiResult.types.length == 2) {
                    if (apiResult.types[0].type.name === typeOfPokemon1 && apiResult.types[1].type.name === typeOfPokemon2)
                        pokes.push(apiResult.name);
                }
            }
        }
        return pokes;
    } catch (error) {
        return error;
    }
}

module.exports = findPokeByTwoTypes;