<template>
    <div class="container">
        <div class="row">
         <form @submit.prevent="onSubmit" enctype="multipart/form-data">
            <div class="form-group">
                <label class="form-control">Select file</label>
                <input type="file" ref="file" @change="onSelect" class="form-control">
            </div>
            <div class="form-group">
                <button class="btn btn-default" type="submit">Submit</button>
            </div>
          </form>
        </div>
    </div>
</template>
<script>
var axios = require('axios')
export default {
    name:'FileUpload',
    data(){
        file:''
    },
    methods:{
        onSelect(){
            const file = this.$refs.file.files[0];
            this.file = file
        },
        async onSubmit(){
            const formData = new FormData();
            formData.append('file',this.file)
            try{   
            
                
                await axios.post('http://localhost:3000/uploadfile',formData).then((response)=>{
                    console.log(response)
                })
                // await fetch('http://localhost:3000/uploadfile',{
                //     method:'POST',
                //     body:formData
                // }).then((response)=>{
                //     console.log(response)
                // })
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>
<style scoped>

</style>
