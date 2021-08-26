import axios from 'axios';

const JSON_HEADER = { Accept: 'application/json' };

export const getFilmsPromise = (url) => axios({
    headers: JSON_HEADER,
    method: 'get',
    url: url,
});
