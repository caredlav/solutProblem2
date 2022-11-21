const fetch = require("node-fetch");

const apiCall = async (pokemonIds) => {
    try {
        const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIds}/`);
        const result = await api.json();
        return result;
    } catch (error) {
        return error;
    }
}

const createArrayPokemonById = async (pokemonIds, filter) => {
    try {
        let pokeArray = [];
        for (let i = 0; i < pokemonIds.length; i++) {
            let apiResult = await apiCall(pokemonIds[i]);
            let arrayTypes = [];
            apiResult.types.forEach(item => {
                arrayTypes.push(item.type.name)
            });
            let elementForArray = {
                name: apiResult.name,
                type: arrayTypes,
                weight: apiResult.weight
            }
            pokeArray.push(elementForArray);
        }

        if (filter === "nombre") {
            pokeArray.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                } else if (a.name < b.name) {
                    return -1;
                } else {
                    return 0;
                }
            });
        } else if (filter === "tipo") {
            pokeArray.sort((a, b) => {
                if (a.type > b.type) {
                    return 1;
                } else if (a.type < b.type) {
                    return -1;
                } else {
                    return 0;
                }
            });
        } else {
            pokeArray.sort((a, b) => {
                if (a.weight > b.weight) {
                    return 1;
                } else if (a.weight < b.weight) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }

        return pokeArray;
    } catch (error) {
        return error;
    }
}

module.exports = createArrayPokemonById;