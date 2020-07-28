import {starWarsApi} from '../../api/api'
import {filter} from '../../api/filter'
import {helper} from "../../api/helper";

export default {
    actions: {
        getStarships({commit, getters}) {
            starWarsApi.getAllStarships().then(starships => {
                starships = starships.map(starship => {
                    return Object.assign({}, starship, {
                        normalizedCrew: helper.normalizeIntValue(starship.crew),
                        normalizedPassengers: helper.normalizeIntValue(starship.passengers),
                        normalizedCost: helper.normalizeIntValue(starship.cost_in_credits),
                        normalizedMGLT: helper.normalizeIntValue(starship.MGLT),
                        normalizedId: helper.getStashipId(starship)
                    })
                });
                commit('setAllStarships', starships);
                const query = getters.getAllQuery;
                const minCrew = getters.minCrew;
                const maxCrew = getters.maxCrew;
                const minPsngs = getters.minPsngs;
                const maxPsngs = getters.maxPsngs;
                let filtered = filter.getFilteredStarships(starships, query, {
                    minCrew: minCrew,
                    maxCrew: maxCrew,
                    minPsngs: minPsngs,
                    maxPsngs: maxPsngs
                });
                let sortBy = !query.sortBy ? 'MGLT' : query.sortBy[0];
                let sorted = filter.getSortedStarships(filtered, sortBy);

                let page = !query.page ? 1 : query.page[0];
                let shortStarshipList = filter.getPaginationStarship(sorted, page);

                commit('setStarships', shortStarshipList)
            });
        },
        getStarshipById({commit, getters}, id) {
            starWarsApi.getStarship(id).then(starship => {
                commit('setStarship', starship)
            })
        }
    },
    mutations: {
        setAllStarships(state, starships) {
            state.allStarships = starships;
        },
        setStarships(state, starships){
            state.starships = starships;
        },
        setStarship(state, starship) {
            state.starship = starship;
            state.starshipAttr = [
                {key: "COST IN CREDITS", value: starship.cost_in_credits},
                {key: "CREW", value: starship.crew},
                {key: "passengers", value: starship.passengers},
                {key: "CARGO CAPACITY", value: starship.cargo_capacity},
                {key: "consumables", value: starship.consumables},
                {key: "FILMS COUNTER", value: starship.films.length},
            ];
        }
    },
    state: {
        allStarships: [],
        starships: [],
        starship: {},
        starshipAttr: []
    },
    getters: {
        allStarships(state) {
            return state.starships
        },
        starship(state) {
            return state.starship;
        },
        getStarshipAttr(state) {
            return state.starshipAttr;
        },
        maxCrew(state) {
            return state.allStarships.reduce((a, currentStarship) => {
                let crew =  (isNaN(currentStarship.normalizedCrew)) ? 0 : currentStarship.normalizedCrew;
                return a > crew ? a: crew;
            }, 0);
        },
        minCrew(state) {
            return state.allStarships.reduce((a, currentStarship) => {
                let crew =  (isNaN(currentStarship.normalizedCrew)) ? 0 : currentStarship.normalizedCrew;
                return a < crew ? a: crew;
            }, 0);
        },
        maxPsngs(state) {
             return state.allStarships.reduce((a, currentStarship) => {
                 let psngs =  (isNaN(currentStarship.normalizedPassengers)) ? 0 : currentStarship.normalizedPassengers;
                return a > psngs ? a: psngs;
            }, 0);
        },
        minPsngs(state) {
            return state.allStarships.reduce((a, currentStarship) => {
                let psngs =  (isNaN(currentStarship.normalizedPassengers)) ? 0 : currentStarship.normalizedPassengers;
                return a < psngs ? a: psngs;
            }, 0);
        }
    }
}