| Solución al problema 2 |

Para ejecutar el código primero se debe hacer npm install para la instalación de la dependencia y luego, simplemente hay que escribir en consola, estando en la misma carpeta que contiene los archivos, el comando node index.js y tener instalado Node.js en la computadora.

Cabe resaltar que como el problema 2 tiene varios casos para consumir la API de https://pokeapi.co/ es necesario llamar a la función específica que se desea observar. Algunas estan comentadas ya para su validación pero si lo desea se pueden cambiar los valores de los parámetros. 

La función totalPokeByOneType recibe como parámetro un string que equivale al tipo del Pokémon y esta devolverá en consola la cantidad de pokémones que existen actualmente con ese tipo.

La función nameOfPokemonByTwoTypes recibe como parámetros dos strings y ambos corresponden los tipos del Pokémon. Devolverá en consola los nombres de los pokémones que tengan esos dos tipos.

La función pokemonIdByName recibe como parámetro un string que equivale al nombre del Pokémon y esta devolverá en consola el id (número con respecto a la pokedex) de dicho Pokémon.

La función statsOfPokemonById recibe como parámetro un número que equivale al id del Pokémon y devolverá en consola, mediante un objeto, las estadísticas bases del Pokémon, como lo son su vida, ataque, defensa, ataque especial, defensa especial y velocidad.

La función newArrayPokemonsById recibe como parámetros un array de números y un string, donde el array equivale a los ids de los Pokémones y el string un ordenador (nombre, tipo o peso). Devolverá en consola un arreglo con objetos de los Pokémones validados por los ids y además, serán ordenados con respecto al ordenador que se habría indicado en el parámetro.

La función checkPokemonTypeById recibe como parámetros un número y un string, donde el primero equivale al id del Pokémon y el segundo el tipo de Pokémon. Esta devolverá en consola un true o false dependiendo si ese Pokémon tiene el tipo que se pasó por parámetro.