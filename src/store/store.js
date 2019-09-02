import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store  = new Vuex.Store({
    state:{
        menuCategories:[],
        roomCategories:[],
        tableCategories:[],
        selectedMenuCategory:[],
        selectRoomCategory:[],
    },
    getters:{
        menu: state => state.menuCategories,
        menu_items: state => state.selectedMenuCategory,
        rooms: state => state.roomCategories,
        room_items: state => state.selectRoomCategory
    },
    mutations:{
        SET_MENUCATEGORIES:(state, payload)=>{
            state.menuCategories = payload
        },
        SET_SELECTEDMENUCATEGORY:(state, payload)=>{
            state.selectedMenuCategory = payload
        },
        SET_ROOMS: (state, payload) =>{
            state.roomCategories = payload
        },
        SET_SELECTEDROOMCATEGORY:(state, payload)=>{
            state.selectRoomCategory = payload
        }
    },
    actions:{
          // eslint-disable-next-line 
        GET_MENUCATEGORIES: async (context, payload) =>{
            let { data } = await axios.get('http://localhost:3000/api/v1/menucategories')
            context.commit('SET_MENUCATEGORIES',data)
        },
        SET_SELECTEDMENU: async (context, payload)=>{
            context.commit('SET_SELECTEDMENUCATEGORY',payload)
        },
         // eslint-disable-next-line 
        GET_ROOMCATEGORIES: async (context, payload) => {
            let { data } = await axios.get('http://localhost:3000/api/v1/rooms')
            context.commit('SET_ROOMS',data)
        },
         // eslint-disable-next-line 
        SET_SELECTEDROOMCATEGORY: async  (context, payload) => {
            context.commit('SET_SELECTEDROOMCATEGORY',payload)
        }
    }, 
})