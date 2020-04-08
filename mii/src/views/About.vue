<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-left">Add Project</h5>
              <hr class="my-4" />
              <form class="form-signin">
                <div class="form-label-group text-left" >
                  <label for="prName">Project Name</label>
                  <input
                    type="text"
                    id="prName"
                    class="form-control"
                    placeholder="project name"
                   
                  />
                </div>
                <div class="form-group text-left link" id="app" v-for="(item,index) in links" :key="index">
                  <label for="linkSelect">Select Link</label>
                  <p class="rm" @click="del(index)" v-show="links.length > 1">Delete</p>
                  <select class="form-control" id="linkSelect" v-model="item.interface">
                    <option>GitHub</option>
                    <option>Slack</option>
                    <option>Trello</option>
                    <option>Google docs</option>
                    <option>5</option>
                  </select>
                  <input
                    class="form-control urlInput"
                    type="text"
                    placeholder="Related URL"
                    v-model="item.url"
                    
                  />
                </div>
                <button class="btn btn-success add" @click="add" type="button">Add Link +</button>

                <button
                  class="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                  
                >Create project</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
      links : [
        { interface: '', url: ''},
      
      ]
    }
  },
  methods:{
    add(){
      this.links.push({ interface: '', url: ''})
    },
    del(index){
      this.links.splice(index,1)
    }
  }
}
</script>


<style scoped>
.link {
  padding-top: 10px;
}

.urlInput {
  margin-top: 10px;
}

.add {
  font-size: 18px;
  margin-bottom: 20px;
}

.rm{
    
    float: right;
}

.rm:hover{
  color: red;
}
</style>