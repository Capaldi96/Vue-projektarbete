<template>
    <div id="list">
        <h1>List of projekts</h1>
        <div class="error-log" v-show="error">Failed to load project list, reload the page to try again</div>
        <div class="allProjects">
          <transition name="fade-in" appear>
            <div>
              <b-card-group v-for="project in projects" :key="project._id">
                <b-card :title="project.projectName">
                  <button v-if="loggedIn" type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                <b-card-text>
                  <div v-for="link in project.links" :key="link.url">
                    <a :href="link.url">{{link.interface}}</a>
                  </div>
                  <span>Members: {{project.comments}}</span>
                </b-card-text>
                <template v-slot:footer>
                  <small class="text-muted">Created: {{project._createdOn.substr(0,10)}}</small>
                </template>
                </b-card>
              </b-card-group>
            </div>
          </transition>
        </div>
    </div>
</template>

<script>
// import editComponent from './edit-component'   // figure it out for edit component to only open when edit button pressed maybe routing
import axios from 'axios'
export default {
  name: 'listComponent',
  components: {
    // editComponent
  },
  data: () => ({
    loggedIn:false,
    projects:Array,
    error:false,
    errorMsg: String,
  }),
  methods:{
     listObjects(){
      axios.get('https://jsonbox.io/vueProjekt_feu2019ECutbildning')
      .then(response => {
        this.projects = response.data;
      })
      .catch(e => {
        this.error = true;
        this.errorMsg = 'Failed to load project list, reload the page to try again'
        console.log(e);
      })
    }
  },
  created(){
    this.listObjects();
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
  #list{
    width:40em;
    margin:0 auto;
  }
  .close{
    top:0;
    right:0.2em;
    position: absolute;
  }
  .allProjects{
    margin-top:2em;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:1em;
  }
</style>