import axios from 'axios';

const JSON_HEADER = { Accept: 'application/json' };

export const getFilmsPromise = (url) => axios({
    headers: JSON_HEADER,
    method: 'get',
    url: url,
});


export const getCharactersPromise = (page) => axios({
    headers: JSON_HEADER,
    method: 'get',
    url: `https://swapi.dev/api/people/?page=${page}`
});


export const getPokemonListPromise = (page,limit) => axios({
    headers: JSON_HEADER,
    method: 'get',
    url: `https://pokeapi.co/api/v2/pokemon/?offset=${page*limit}&limit=${limit}`
});
