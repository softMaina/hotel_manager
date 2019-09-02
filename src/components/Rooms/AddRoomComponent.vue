<template>
       
            <div class="col-md-6 shadow mt-3" style="margin:auto;">
            <form @submit.prevent="addRoom">
                <div class="form-group">
                    <label for="">Room Title</label>
                    <input class="form-control" v-model="room.title">
                </div>
                <div class="form-group">
                    <label for="">Room Description</label>
                    <textarea class="form-control" v-model="room.description"></textarea>
                </div>
                <div class="form-group">
                    <label for="" class="label-control">Category</label>
                    <select name="category" id="" class="form-control">
                        <option value="">Family</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="">Number of people</label>
                    <input class="form-control" v-model="room.no_of_people"/>
                </div>
                <div class="form-group">
                    <label for="">Cost per 24hrs</label>
                    <input class="form-control" v-model="room.cost"/>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-sm btn-dark">Add room</button>
                </div>
            </form>
    
    </div>
    
</template>
<script>
import axios from "axios"
export default {
    name:'addroom',
    data(){
        return {
                 room:{
                title:'',
                description:'',
                cost:'',
                category:'5d529f158eeef20e0c98e966',
                no_of_people:''
            },
        }
    },
    methods:{
        addRoom(){
            axios.post('http://localhost:3000/api/v1/saveRoom',this.room)
                .then((response)=>{
                    console.log(response)
                })
        }
    }
}
</script>
<style>

</style>
