import Vue from "vue"
import Vuex from 'vuex'
import starships from "./modules/starships"
import people from "./modules/people"
import query from "./modules/query"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        starships,
        people,
        query
    }
})