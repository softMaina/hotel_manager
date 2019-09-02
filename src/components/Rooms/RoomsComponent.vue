<template>
    <div class="container">
        <div class="row">
        <div class="col-md-9">
            <AddRoom v-if="addroom"/>
            <div class="row mt-3" v-if="!addroom">
            
               <div class="col-md-4">
                    <div class="card shadow">
                    <img class="card-img-top" src="../../assets/hotelroom.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>

                   <div class="col-md-4">
                    <div class="card shadow">
                    <img class="card-img-top" src="../../assets/hotelroom.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>

                   <div class="col-md-4">
                    <div class="card shadow">
                    <img class="card-img-top" src="../../assets/hotelroom.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
     

         <div class="col-md-3 shadow">
                <h4>Rooms Categories</h4>
                <div>
                    <button class="btn btn-sm btn-info m-1" @click="addRoom">Add Room</button>
                     <button class="btn btn-sm btn-warning m-1" @click="addCategory">Add Category</button>
                </div>
                <div v-if="addcategory">
                    <form @submit.prevent="addRoomCategory">
                        <div class="form-group">
                            <label for="" class="label-control">Title</label>
                            <input type="text" v-model="category.title" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="" class="label-control">Description</label>
                            <textarea type="text" v-model="category.description" class="form-control"></textarea>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-sm btn-dark" type="submit">Add</button>
                        </div>
                    </form>
                </div>
                 <div>
                    <ul class="list-group">
                        <li class="list-group-item active">Wedding</li>
                        <li class="list-group-item">Business Meetings</li>
                        <li class="list-group-item">Religious</li>
                        <li class="list-group-item">Team Building</li>
                        <li class="list-group-item">Schooling</li>
                    </ul>
                </div>
        </div>
          
        </div> 
    </div>  
</template>
<script>
import AddRoom from "./AddRoomComponent"
import axios from "axios"
export default {
    name:'rooms',
    components:{
        AddRoom
    },
    data(){
        return {
            addroom:false,
            addcategory:false,
            category:{
                title:'',
                description:''
            }
        }
    },
    mounted(){
      this.$store.dispatch('GET_ROOMCATEGORIES').then(
          ()=>{
              this.select_category()
          }
      )
      
    },
    methods:{
        addRoom(){
            this.addroom = !this.addroom
        },
        addCategory(){
            this.addcategory = !this.addcategory
        },
        addRoomCategory(){
            axios.post("http://localhost:3000/api/v1/saveRoomCategory",this.category)
                .then((response)=>{
                    console.log(response)
                })
        },
          select_category(id){ 
          
          if(id !== ''){
              this.selected_menu_category = this.$store.getters.menu[id]
              this.$store.dispatch('SET_SELECTEDMENU',this.selected_menu_category)
          }else if(id === undefined){
              this.selected_menu_category = this.$store.getters.menu[0]
              this.$store.dispatch('SET_SELECTEDMENU',this.selected_menu_category)
          }

      }
    }   
}
</script>
<style>

</style>
