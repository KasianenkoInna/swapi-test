import {normalizeArray, assignArray, assignDistinctArray} from '../helper/arrayUtils'
import {helper} from "../../api/helper";
let actionValue, currentValue;

export default {
    actions: {
        addQueryToArray({commit, dispatch, state}, obj) {
            let newState = state.query;
            actionValue = assignArray(obj.value);
            currentValue = normalizeArray(newState[obj.key]);
            currentValue = assignDistinctArray(currentValue, actionValue);
            newState[obj.key] = currentValue;

            if (obj.key !== 'page') {
                newState['page'] = [1];
            }
            commit('addQuery', newState);

            return dispatch('getStarships')
        },

        removeQueryFromArray({commit, dispatch, state}, obj) {
            let newState = state.query;
            actionValue = assignArray(obj.value);
            currentValue = normalizeArray(newState[obj.key]);

            for (let item of actionValue) {
                let removeItemIndex = currentValue.indexOf(item);
                if (-1 !== removeItemIndex) {
                    currentValue.splice(removeItemIndex, 1);
                }
            }

            if (currentValue.length <= 0) {
                delete newState[obj.key];
            } else {
                newState[obj.key] = currentValue;
            }

            if (obj.key !== 'page') {
                newState['page'] = [1];
            }
            commit('addQuery', newState);

            return dispatch('getStarships')
        },

        setQuery({commit, dispatch, state}, obj) {
            let newState = state.query;
            newState[obj.key] = [obj.value];


            if (obj.key !== 'page') {
                newState['page'] = [1];
            }
            commit('addQuery', newState);
            return dispatch('getStarships');
        }

    },
    mutations: {
        addQuery(state, newState) {
            return state.query = newState;
        }
    },
    state: {
        query: {}
    },
    getters: {
        getAllQuery(state) {
            return state.query
        },

        minCrewQuery(state, getters){
            const query = state.query;
            const range = helper.normalizeMaxMinRange(query, getters.minCrew, getters.maxCrew);
            return  range.min;
        },
        maxCrewQuery(state, getters){
            const query = state.query;
            const range = helper.normalizeMaxMinRange(query, getters.minCrew, getters.maxCrew);
            return range.max;
        },

        minPsngsQuery(state, getters){
            const query = state.query;
            const range = helper.normalizeMaxMinRangePsngrs(query, getters.minPsngs, getters.maxPsngs);
            return  range.min;
        },
        maxPsngsQuery(state, getters){
            const query = state.query;
            const range = helper.normalizeMaxMinRangePsngrs(query, getters.minPsngs, getters.maxPsngs);
            return range.max;
        }

    }
}