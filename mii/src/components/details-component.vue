<template>
    <div><br/>
      <div class="container">
        <div class="error-log" v-show="isDisabled">{{message}}</div>
          <transition name="fade-in" appear>
            <div class="row">
              <div class="container">
                <div class="card h-100" >
                  <div class="card-body">
                    <h5 class="card-title">{{projects.projectName}}</h5>
                    <div class="card-text">
                      <div v-if="projects.comments" class="members">Comments:<p>{{projects.comments}}</p></div>
                      <div class="links">
                        <div v-for="(link,index) in projects.links" :key="`link-${index}`">
                          <a :href="link.url" class=" links btn btn-primary btn-sm btn-block">{{link.interface}}</a><span>{{link.url}}</span>
                        </div>
                      </div>                      
                    </div>
                  </div>
                  <div class="card-footer">
                    <small v-if="projects._updatedOn" class="text-muted">Last Updated: {{projects._updatedOn}}</small><br/>
                    <small class="text-muted">Created: {{projects._createdOn}}</small>
                    </div>
                                            <b-button
                  squared variant="btn btn-lg btn-primary  "
                  type="button"
                  @click="closeDetailsBackToList()"
                >Back To View All Projects</b-button>
                </div>
              </div>
            </div>
          </transition>
        </div>
    </div>
</template>
<script>

import axios from 'axios'
import data from '../service/data'
export default {
  name: 'detailsComponent',
  mixins: [data],

  props: {
      detailsProjectId: String()
    },


  data: () => ({
    search: "",
    loggedIn: false,
    projects:[],
    showModifyComponent:false,
    isDisabled:true,
    message: String,
    identifier: String,
    editProject: '5e9722853a0ab00017fc15c9',
  }),

  computed:{
    filterProjects:function(){
      return this.projects.filter((project) =>{
        return project.projectName.toLowerCase().match(this.search.toLowerCase());
      });
    }
  },

  methods:{
    closeDetailsBackToList() {
      this.$emit('detailsShowListComponent');
    },


    waitingForApi(waiting){
    if(waiting == true){
      this.message = 'The API is loading please wait';
      this.isDisabled = true;
    } else{
      this.isDisabled = false;
    } 
    },

    listProjects(){
      console.log('API called')
      this.waitingForApi(true);
      axios.get('https://jsonbox.io/vueProjekt_feu2019ECutbildning' + '/' + this.detailsProjectId)
      .then(response => {
        this.waitingForApi(false);
        this.projects = response.data;
        console.log(this.projects)
      })
      .catch(e => {
        this.message = 'The Api request failed, try again by reloading the page.';
        console.log(e);
      })
    },

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
  .members { /* Added by Tobias to be able to scroll comments */
  max-height: 18em;
  background-color: white;
  overflow: auto;
  }
    
</style>