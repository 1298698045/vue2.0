import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        count:1
    },
    getters:{

    },
    mutations:{
        getIncre(state){
            state.count ++;
        }
    },
    actions:{
        increment({state,commit,dispatch}){
            setTimeout(()=>{
                commit('getIncre');
            },1000)
        }
    },
    module:{
        
    }
})
