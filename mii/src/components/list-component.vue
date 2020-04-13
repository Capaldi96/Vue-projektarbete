<template>
    <div id="list">
        <h1>List of projekts</h1>
        <div class="error-log" v-show="error">Failed to load project list, reload the page to try again</div>
          <transition name="fade-in" appear>
            <div class="allProjects">
              <b-card-group v-for="project in projects" :key="project._id">
                <b-card :title="project.projectName">
                  <button v-if="loggedIn" type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                <b-card-text>
                  <div class="links">
                    <div v-for="(link,index) in project.links" :key="`link-${index}`">
                      <a :href="link.url" data-toggle="tooltip" :title="link.url">{{link.interface}}</a>
                    </div>
                  </div>
                  <div class="members">Members: {{project.comments}}</div>
                </b-card-text>
                <b-button variant="primary">Modify</b-button>
                <template v-slot:footer>
                  <small class="text-muted">Created: {{project._createdOn.substr(0,10)}}</small>
                </template>
                </b-card>
              </b-card-group>
            </div>
          </transition>
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
        console.log(response.data);
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
  .links{
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:0.5em;
    margin-bottom: 1em;
    min-height: 5em;
  }
  .card-group{
    width:15em;
  }
  .card-body{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .allProjects{
    margin-top:2em;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:1em;
  }
  a {
    border-bottom: 1px solid #453886;
    color: #453886;
    padding-bottom: .25em;
    text-decoration: none;
  }

  a:hover {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23453886' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
    background-position: bottom;
    background-repeat: repeat-x;
    background-size: 20%;
    border-bottom: 0;
    padding-bottom: .3em;
    text-decoration: none;
  }
    
</style>