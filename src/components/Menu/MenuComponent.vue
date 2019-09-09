<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-md-8">
                <div class="row" v-if="!addMenu">
                    <div class="empty" v-if="this.$store.getters.menu_items.menu === undefined || this.$store.getters.menu_items.menu.length === 0">
                        <div class="col-md-12 bg-light ">
                             <p class="text-center text-info">doesnt have food items in this category</p>
                        </div>
                    </div>

                    <section class="col-md-12" v-if="this.$store.getters.menu_items.menu !== undefined && this.$store.getters.menu_items.menu.length > 0">
                    <div class="col-md-4 shadow" v-for="item in this.$store.getters.menu_items.menu" :key="item.id">
                        <div class="card">
                            <div class="card-header">
                                <div>
                                    <p class="badge badge-primary">0 Orders</p>
                                </div>
                                <h6>{{item.title}}</h6>
                                <small>{{selected_menu_category.title}}</small>
                                <div class="row">
                                    <button class="btn btn-sm btn-info">in stock</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="img">
                                    <p class="" style="display:none;"> {{ url = "https://hotelsjunior.herokuapp.com/"+item.image }}</p>
                                     <img :src="url" alt="img">
                                </div>
                                <div class="desc">
                                    <p><small>{{item.ingredients}}</small></p>
                                </div>
                               
                            </div>
                            <div class="card-footer">
                                <div class="row" style="float:right">
                                    <p class="card-link">Edit</p>
                                    <p class="card-link" @click="deletemenuitem(item._id)"><i class="fa fa-trash"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    </section>

                </div>
                <div class="row" v-if="addMenu">
                    <form @submit.prevent="post_food" enctype="multipart/form-data" style="margin:auto">
                        <div class="form-group">
                            <input class="form-control" type="text" v-model="food.title" placeholder="title">
                        </div>
                         <div class="form-group">
                            <select name="category" id="category" class="form-control" v-model="food.category_id">
                                <option :value="category._id" v-for="(category, index) in menus" :key="index">{{ category.title }}</option>
                            </select>
                        </div>
                         <div class="form-group">
                            <textarea class="form-control" type="text" v-model="food.description"  placeholder="description"></textarea>
                        </div>
                         <div class="form-group">
                            <input class="form-control" type="text" v-model="food.price" placeholder="price">
                        </div>
                         <div class="form-group">
                            <input class="form-control" type="text" v-model="food.ingredients" placeholder="ingredients">
                        </div>
                        <div class="form-group">
                      <div class="" id="preview">
                            <img v-if="url" :src="url" alt="image">
                        </div>
                        <div class="row">
                            <input type="file" name="file" ref="myFileRef" @change="onFileChange">
                        </div>
                    </div>
                        <div class="form-group">
                            <button class="btn btn-warning" type="submit">Add Item</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-4 shadow">
                <div class="row m-2">
                    <button class="btn btn-sm btn-default shadow" @click="add_item">{{ addCategory ? cancel : title}}</button>
                    <button class="btn btn-sm btn-info shadow" style="float:right" @click="add_menu_item">{{ addMenu ? cancel : m_title}}</button>
                </div>
                <div class="m-2" v-if="addCategory">
                    <form @submit.prevent="post_category">
                        <div class="form-group">
                            <input type="text" placeholder="category title" class="form-control" v-model="category.title">
                        </div>
                        <div class="form-group">
                            <textarea row='2' placeholder="category description" class="form-control" v-model="category.description">

                            </textarea>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-warning" type="submit">Add</button>
                        </div>
                    </form>
                </div>
                <ul class="list-group m-2">
                    <li class="list-group-item" v-for="(category, index) in menus" :key="index" @click="select_category(index)">{{category.title}}<span style="float:right"><button class="btn btn-sm btn-danger" @click="deletecatetory(category._id)"><i class="fa fa-trash"></i></button></span></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style>
    .img img{
        height:200px;
        width:190px;
    }
    .desc{
        line-height: 0.5em
    }
    .empty{
        height:400px;
        width:100%;
        margin:auto;
    }
</style>
<script>
import axios from 'axios'
export default {
  name: 'menus',
  data(){
      return{
          addCategory:false,
          addMenu:false,
          title:'add category',
          m_title:'add menu',
          cancel:'close',
          selected_menu_category:{},
          category:{
              title:'',
              description:''
          },
          food:{
              title:'',
              category_id:'',
              description:'',
              price:'',
              ingredients:'',
          },
          file:'',
          url:null
      }
  },
  mounted(){
      this.$store.dispatch('GET_MENUCATEGORIES').then(
          ()=>{
              this.select_category()
          }
      )
      
  },
  computed:{
      menus(){
          return this.$store.getters.menu
      },
  },
  methods:{
      add_item(){
          this.addCategory = !this.addCategory
          this.addMenu = false
      },
      add_menu_item(){
          this.addMenu = !this.addMenu
          this.addCategory = false
      },
      async post_category(){
          if(this.category.title !== '' && this.category.description !== ''){
             await axios.post('https://hotelsjunior.herokuapp.com/api/v1/menucategory',this.category)
                        .then((response)=>{
                            this.addCategory = false
                        })
                        .catch(error => console.log(error))
             
          }else{
              console.log('not working')
          }
      },
      select_category(id){ 
          
          if(id !== ''){
              this.selected_menu_category = this.$store.getters.menu[id]
              this.$store.dispatch('SET_SELECTEDMENU',this.selected_menu_category)
          }else if(id === undefined){
              this.selected_menu_category = this.$store.getters.menu[0]
              this.$store.dispatch('SET_SELECTEDMENU',this.selected_menu_category)
          }

      },
      async post_food(){
          this.file = this.$refs.myFileRef.files[0];

            if(!this.file){
                console.error("no file selected")
                return;
            }

            let formData = new FormData()

            formData.append('file',this.file)
            formData.append('body',JSON.stringify(this.food))
            return axios.post(
                'https://hotelsjunior.herokuapp.com/api/v1/addmenu',
                formData,
                {
                    headers: {
                        'Content-Type':'multipart/form-data'
                    }
                }
            ).then(response =>{
                console.info(response)
            })
            .catch(error =>{req.file
                console.error("file upload faild",error)
            });
      },
      async deletecatetory(id){
          return axios.delete('https://hotelsjunior.herokuapp.com/api/v1/deletemenucategory/'+id).then(response => {
              console.log(response)
          })
      },
      async deletemenuitem(id){
        return axios.delete('https://hotelsjunior.herokuapp.com/api/v1/deletemenu/'+id).then(response => {
            console.log(response)
        })
      },

    onFileChange(e){
        const file = e.target.files[0];
        let formData = new FormData()
        this.url = URL.createObjectURL(file);
    }
    
  }
}
</script>
