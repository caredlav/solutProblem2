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

const findPokemonStatsById = async (pokemonId) => {
    try {
        let pokemonToFind = await apiCall(pokemonId);
        let stats = {
            HP: pokemonToFind.stats[0].base_stat,
            Attack: pokemonToFind.stats[1].base_stat,
            Defense: pokemonToFind.stats[2].base_stat,
            SpecialAttack: pokemonToFind.stats[3].base_stat,
            SpecialDeffense: pokemonToFind.stats[4].base_stat,
            Speed: pokemonToFind.stats[5].base_stat
        }
        return stats;
    } catch (error) {
        return error;
    }
}

module.exports = findPokemonStatsById;