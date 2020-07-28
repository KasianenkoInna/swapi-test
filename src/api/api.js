import {HTTPS_ENDPOINT_PEOPLE, HTTPS_ENDPOINT_STARSHIPS, PROTOCOL_HTTP, PROTOCOL_HTTPS} from "./endpoints";

const filterErrorResponse = (response) =>
{
    if (response.status >= 400) {
        return Promise.reject('server response code is error (>400)');
    }

    return response;
};

const filterNonJsonResponse = (response) =>
{
    if (false === response.headers.has('content-type')) {
        return Promise.reject('unknown response content-type');
    }

    if (-1 === response.headers.get('content-type').indexOf('json')) {
        return Promise.reject('response is not json');
    }

    return response;
};

/**
 * @param {String} url
 *
 * @returns {Promise}
 */
const sendGETRequest = (url) =>
{
    const options = {
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    };

    return fetch(url, options)
        .then(response => filterErrorResponse(response))
        .then(response => filterNonJsonResponse(response))
        .then(response => response.json())
        .catch(function(err) {
            console.log(err);
        });
};

/**
 * @param {String} url
 *
 * @returns {Promise}
 */
const getAllResults = (url) => {

    let dataArr = [];
    const getNextData = (url) => {
        return sendGETRequest(url)
            .then(response => {

                dataArr.push(...response.results);

                if (null !== response.next) {
                    return getNextData(response.next.replace(PROTOCOL_HTTP, PROTOCOL_HTTPS));
                }

                return dataArr;
            });

    };

    return getNextData(url);
};

export const starWarsApi = {
    /**
     * @returns {Promise}
     */
    getAllPeople: () => {
        return getAllResults(HTTPS_ENDPOINT_PEOPLE)
            .then(
                allResults => allResults,
                error => {
                    console.log(error);

                    return [];
                }
            );
    },

    /**
     * @returns {Promise}
     */
    getAllStarships: () => {
        return getAllResults(HTTPS_ENDPOINT_STARSHIPS).then(
            allResults => allResults,
            error => {
                console.log(error);

                return [];
            }
        );
    },

    /**
     * @param {String} id
     *
     * @returns {Promise}
     */
    getStarship: (id) => {
        const url = `${HTTPS_ENDPOINT_STARSHIPS}/${id}`;

        return sendGETRequest(url)
    }
};
