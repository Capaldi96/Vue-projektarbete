<template>
    <div>
      <div v-if="!showModifyComponent" class="container">
        <h1>All Projects</h1>
        <div class="search-box">
            <b-form-input id="input-none" v-model="search" placeholder="Search project"></b-form-input>
        </div>
        <div class="error-log" v-show="isDisabled">{{message}}</div>
        <transition name="fade-in" appear>
          <div class="row">
            <div class="col-lg-4 col-sm-6 mb-4" v-for="project in filterProjects" :key="project._id">
              <div class="card h-100" >
                <button v-if="loggedIn" @click="deleteProject(project._id)" type="button" class="close" aria-label="Close">
                  <span>&times;</span>
                </button>
                <div class="card-body">
                  <h5 class="card-title">{{project.projectName}}</h5>
                  <div class="card-text">
                    <div v-if="project.comments" class="members">Comments:<p>{{project.comments}}</p></div>
                    <div class="links">
                      <div v-for="(link,index) in project.links" :key="`link-${index}`">
                        <a :href="link.url" class=" links btn btn-primary btn-sm btn-block">{{link.interface}}</a>
                      </div>
                    </div>  
                    <button @click="editProject(project._id)" type="button" class="btn btn-secondary btn-sm btn-block" :disabled="!loggedIn">Modify</button>
                  </div>                    
                </div>
                <div class="card-footer text-muted">
                  <small v-if="project._updatedOn">Updated: {{project._updatedOn.substr(0,10)}}</small>
                  <small v-else>Created: {{project._createdOn.substr(0,10)}}</small>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <editComponent v-if="showModifyComponent" :editProject="identifier"></editComponent>
    </div>
</template>
<script>

import editComponent from './edit-component'   // figure it out for edit component to only open when edit button pressed maybe routing
import axios from 'axios'

export default {
  name: 'listComponent',
  components: {
    editComponent
  },
  data: () => ({
    search: "",
    loggedIn: false,
    projects:[],
    showModifyComponent:false,
    isDisabled:true,
    message: String,
    identifier: String,
  }),
  computed:{
    filterProjects:function(){
      return this.projects.filter((project) =>{
        return project.projectName.toLowerCase().match(this.search.toLowerCase());
      });
    }
  },
  methods:{
    waitingForApi(waiting){
    if(waiting == true){
      this.message = 'The API is loading please wait';
      this.isDisabled = true;
    } else{
      this.isDisabled = false;
    }
    },
    listProjects(){
      this.waitingForApi(true);
      axios.get('https://jsonbox.io/vueProjekt_feu2019ECutbildning')
      .then(response => {
        this.waitingForApi(false);
        this.projects = response.data;
      })
      .catch(e => {
        this.message = 'The Api request failed, try again by reloading the page.';
        console.log(e);
      })
    },
    deleteProject(param){
      this.waitingForApi(true);
      axios.delete('https://jsonbox.io/vueProjekt_feu2019ECutbildning/' + param)
      .then(response => {
        console.log(response)
        this.listProjects();
      })
      .catch(e => {
        this.message = 'The Api request failed, try again by reloading the page.';
        console.log(e);
      })
    },
    editProject(param){
      this.identifier = param;
      this.showModifyComponent = true;
    }
  },
  created(){
    this.listProjects();
  },  
}
</script>
<style scoped>
  .fade-in-enter, .fade-in-leave-to{
    opacity: 0;
  }
  .fade-in-enter-active{
    transition: opacity 2000ms;
  }
  .fade-in-leave-active{
    transition: opacity 2000ms;
  }
  .links{
    margin-top:0.5em;
    margin-bottom: 0.5em;
  }
  .close{
    position: absolute;
    top:0;
    right:0.2em;
  }
  .search-box{
    padding:2em 0 2em 0;
  }
  .card-body{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .btn-secondary:disabled{
    cursor:not-allowed;
  }
    
</style>