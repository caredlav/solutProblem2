const { throws } = require("assert");
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

const sumPokeByType = async (typeOfPokemon) => {
    try {
        let sum = 0;
        for (let i = 1; i <= 10249; i++) {
            if (i < 906 || i > 10000) {
                let apiResult = await apiCall(i);
                apiResult.types.forEach(item => {
                    if (item.type.name === typeOfPokemon) {
                        sum++;
                    }
                });
            }
        }
        return sum;
    } catch (error) {
        return error;
    }
}

module.exports = sumPokeByType;