export const PROTOCOL_HTTP = 'http';
export const PROTOCOL_HTTPS = 'https';

export const BASE_URL = "swapi.dev/api";

export const ENDPOINT_PEOPLE = `people`;
export const ENDPOINT_STARSHIPS = `starships`;

export const HTTPS_ENDPOINT_PEOPLE = `${PROTOCOL_HTTPS}://${BASE_URL}/${ENDPOINT_PEOPLE}`;
export const HTTPS_ENDPOINT_STARSHIPS = `${PROTOCOL_HTTPS}://${BASE_URL}/${ENDPOINT_STARSHIPS}`;

export const HTTP_ENDPOINT_PEOPLE = `${PROTOCOL_HTTP}://${BASE_URL}/${ENDPOINT_PEOPLE}`;
export const HTTP_ENDPOINT_STARSHIPS = `${PROTOCOL_HTTP}://${BASE_URL}/${ENDPOINT_STARSHIPS}`;

