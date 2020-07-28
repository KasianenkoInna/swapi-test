import {starWarsApi} from '../../api/api'
import {helper} from '../../api/helper'

export default {
    actions: {
        getPeople(ctx) {
            starWarsApi.getAllPeople().then(people => {
                ctx.commit('setPilots', helper.filterPilots(people));
                return ctx.commit('setPeople', people);
            });
        }
    },
    mutations: {
        setPeople(state, people) {
            state.people = people;
        },
        setPilots(state, pilots) {
            state.pilots = pilots;
        },
        updateShownFilter(state) {
            state.showAll = !state.showAll;
        }
    },
    state: {
        people: [],
        pilots: [],
        showAll: false
    },
    getters: {
        allPeople(state) {
            return state.people
        },
        allPilots(state, getters) {
            const checkedIds = getters.getAllQuery.pilots;

              let filtered = state.pilots.filter((pilot) => {
                    if ( checkedIds ) {
                      (checkedIds.includes(helper.getHumanId(pilot)) > 0)
                          ? pilot.checked = true
                          : pilot.checked = false
                    }
                    return true;
                });

            if(!state.showAll){
                return filtered.filter((p, index) => index < 6);
            }
            return filtered;
        },
        pilotsCount(state) {
            return state.pilots.length
        },
        isShown(state) {
            return state.showAll
        }
    }
}