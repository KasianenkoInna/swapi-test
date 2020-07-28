const queryString = require('query-string');

const getQueryFromUrl = (search) => {
    return queryString.parse(search, {arrayFormat: 'bracket'});
};

const setQueryParamsToUrl = (query, history) => {
    // history.push({
    //     pathname: history.location.pathname,
    //     search: queryString.stringify(query, {arrayFormat: 'bracket'})
    // });
};

const setLocationToUrl = (query, history, location) => {
    // locationhistory.push({
    //     pathname: location,
    //     search: queryString.stringify(query, {arrayFormat: 'bracket'})
    // });
};

export {getQueryFromUrl, setQueryParamsToUrl, setLocationToUrl};
