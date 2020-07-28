import {  HTTP_ENDPOINT_PEOPLE, HTTP_ENDPOINT_STARSHIPS } from "./endpoints";

/**
 * @param {String} url
 * @param {String} urlEndpoint
 *
 * @return {String}
 */
const getIdByUrl = (url, urlEndpoint) => {
    return url
        .replace(urlEndpoint, '')
        .replace(/\//g, '');
};

/**
 * @param {Object} entity
 * @param {String} urlEndpoint
 *
 * @return {String}
 */
const getEntityId = (entity, urlEndpoint) => {
    return getIdByUrl(entity.url, urlEndpoint);
};

const checkRange = (maxRange, minRange) => {

    if (maxRange < minRange) {
        return {min: maxRange, max: minRange};
    }

    return {min: minRange, max: maxRange}
};

export const helper = {
    /**
     * @param {Object} starship
     *
     * @return {String}
     */
    getStashipId: (starship) => {
        return getEntityId(starship, HTTP_ENDPOINT_STARSHIPS);
    },

    getStashipIdByUrl: (url) => {
        return getIdByUrl(url, HTTP_ENDPOINT_STARSHIPS);
    },

    /**
     * @param {Object} human
     *
     * @return {String}
     */
    getHumanId: (human) => {
        return getEntityId(human, HTTP_ENDPOINT_PEOPLE);
    },

    getHumanIdByUrl: (url) => {
        return getIdByUrl(url, HTTP_ENDPOINT_PEOPLE);
    },

    /**
     * @param {Object[]} people
     *
     * @returns {Object[]}
     */
    filterPilots: (people) => {
        return people.filter(human => human.starships && human.starships.length);
    },

    /**
     * @param {String} value
     *
     * @return {Number|NaN}
     */
    normalizeIntValue: (value) =>
    {
        const dashIndex = value.indexOf('-');
        if (dashIndex > -1) {
            return parseInt(value.substr(dashIndex + 1, value.length));
        }

        if (value.indexOf(',') > -1) {
            return parseInt(value.replace(/,/g, ''));
        }

        return isNaN(parseInt(value)) ? 0 : parseInt(value);
    },

    normalizeMaxMinRange:(query, minR, maxR) => {
        let maxRange = (query.crewMaxRange) ? query.crewMaxRange[0] : maxR;
        let minRange = (query.crewMinRange) ? query.crewMinRange[0] : minR;
        return checkRange(maxRange, minRange);
    },

    normalizeMaxMinRangePsngrs:(query, minR, maxR) => {
        let maxRange = (query.psngrsMaxRange) ? query.psngrsMaxRange[0] : maxR;
        let minRange = (query.psngrsMinRange) ? query.psngrsMinRange[0] : minR;

        return checkRange(maxRange, minRange);
    }
};
