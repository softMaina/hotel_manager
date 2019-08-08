import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store  = new Vuex.Store({
    state:{
        menuCategories:[],
        roomCategories:[],
        tableCategories:[],
        selectedMenuCategory:[]
    },
    getters:{
        menu: state => state.menuCategories,
        menu_items: state => state.selectedMenuCategory
    },
    mutations:{
        SET_MENUCATEGORIES:(state, payload)=>{
            state.menuCategories = payload
        },
        SET_SELECTEDMENUCATEGORY:(state, payload)=>{
            state.selectedMenuCategory = payload
        }
    },
    actions:{
          // eslint-disable-next-line 
        GET_MENUCATEGORIES: async (context, payload) =>{
            let { data } = await axios.get('http://localhost:3000/menucategories')
            context.commit('SET_MENUCATEGORIES',data)
        },
        SET_SELECTEDMENU: async (context, payload)=>{
            context.commit('SET_SELECTEDMENUCATEGORY',payload)
        }
    }, 
})