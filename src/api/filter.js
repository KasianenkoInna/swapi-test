import {helper} from './helper'
const sortHelper = {
    MGLT: 'normalizedMGLT',
    COST: 'normalizedCost',
    CREW: 'normalizedCrew'
};
export const filter = {

    getFilteredStarships: (starships, query, minMax) => {
        return starships.filter(starship => {
            if (query.pilots && query.pilots.length) {
                const starshipPilotIds = starship.pilots.map(url => helper.getHumanIdByUrl(url));
                if (query.pilots.filter(id => starshipPilotIds.includes(id)).length <= 0) {
                    return false;
                }
            }

            const rangeCrew = helper.normalizeMaxMinRange(query, minMax.minCrew, minMax.maxCrew);

            if (starship.normalizedCrew < rangeCrew.min || starship.normalizedCrew > rangeCrew.max) {
                return false;
            }

            const rangePsngrs = helper.normalizeMaxMinRangePsngrs(query, minMax.minPsngs, minMax.maxPsngs);

            if (starship.normalizedPassengers < rangePsngrs.min || starship.normalizedPassengers > rangePsngrs.max) {
                return false;
            }

                return true;
        });
    },

    getSortedStarships: (starships, sortBy = 'MGLT') => {
        let sortKey = sortHelper[sortBy];
        let nanValueStarships = [];
        let normalStarships = starships.filter(starship => {
            if(isNaN(starship[sortKey])) {
                nanValueStarships.push(starship);
                return false;
            }
            return true;
        });
        let sorted = normalStarships.sort((a, b) =>  a[sortKey] - b[sortKey]);
        return [...sorted, ...nanValueStarships]
    },

    getPaginationStarship: (starship, page = 1) => {
        page = !page || page <= 0 ? 1 : page;
        let countOfStarships = 6 * page;
        if(starship.length <= countOfStarships) {
            return starship;
        }
        return starship.splice(0, countOfStarships);
    }

};
