<template>
  <div class="addProject">
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-left">Edit Project 
                <img 
                  v-b-modal.modal-center
                  class="info" 
                  src="../assets/info.svg" 
                  alt="info">
                </h5>
                  <b-modal id="modal-center" ok-only  title="Information">
                    <pre class="infoModal"><p>                   
Project Name: At least 3 characters 
long. 
Verification (optional): 
Provided url links are verified by
checking the coresponding selected
platform such as GitHub, Slack, Trello 
and Goodle docs.
<span class="note">
Note!: 

Verification with links that are longer 
might give false validation. 
</span> 
                      </p>
                    </pre>
                    
                  </b-modal>
              <hr class="my-4" />
              <form class="form-signin">
                <div class="form-label-group text-left">
                  <label for="prName">Project Name</label>
                  <b-form-input
                    type="text"
                    id="prName"
                    class="form-control"
                    placeholder="project name"
                    v-model="input"
                    :state="valid"
                    
                  ></b-form-input>
                  <b-form-invalid-feedback id="input-live-feedback">Enter at least 3 letters</b-form-invalid-feedback>
                </div>

                <div class="text-left">
                  <label class="label" for="te">Description</label>
                  <b-form-textarea
                    id="textarea"
                    v-model="text"
                    placeholder="Project details/comments"
                    rows="6"
                    max-rows="8"
                  ></b-form-textarea>
                </div>
                <div
                  class="form-group text-left link"
                  id="app"
                  v-for="(item,index) in links"
                  :key="index"
                >
                  <label for="linkSelect">Select Link</label>
                  <p class="rm" @click="del(index)" v-show="links.length > 1">Delete</p>
                  <select class="form-control selector" id="linkSelect" v-model="item.interface">
                    <option>GitHub</option>
                    <option>Slack</option>
                    <option>Trello</option>
                    <option>Google docs</option>
                    <option>Other</option>
                  </select>
                  
                  <b-form-input
                    class="label"
                    id="input-live"
                    aria-describedby="input-live-help input-feedback"
                    placeholder="URL link"
                    trim
                    v-model="item.url"
                    :state="item.checku"
                  ></b-form-input>
                  <b-form-invalid-feedback id="input-feedback">Link does not correspont to platform selected</b-form-invalid-feedback>
                </div>
                <button class="btn btn-success add" @click="add" type="button">Add Link +</button>
                <button class="btn btn-success add" @click="listObjects()" type="button">Get Data</button>
                
                <b-button   
                  squared variant="outline-info btn-lg btn-block"
                  type="button"
                  @click="check"
                > Verify Links (optional)</b-button>

                <b-button
                  
                  squared variant="btn btn-lg btn-primary btn-block "
                  type="button"
                  @click="updateJsonBox"
                  :disabled = "!valid"
                >Update Project</b-button>

                

              
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  computed: {
    valid() {
      if(this.input === ''){
        return null
      }else{
          return this.input.length > 2 ? true : false;
        }
      }  
  },  
  data() {
    return {
      
      butDisable: null,
      APIurl : "https://jsonbox.io/vueProjekt_feu2019ECutbildning",
      APIurlId : '/5e94453480197d0017c67100',
      text: "",
      input: "",
      links: [{ interface: "", url: "", checku: null }],

      projects:Array,
      error:false,
      modify:true,
      errorMsg: String,
    };
  },
  methods: {
    addDataFromAPi(projects) {
        this.input = projects.projectName;
        this.text = projects.comments;
        this.links = projects.links;
    },

    /*-----------------------------*/
    listObjects(){
      axios.get('https://jsonbox.io/vueProjekt_feu2019ECutbildning' + this.APIurlId)
      .then(response => {
        console.log(response.data);
        this.projects = response.data;
        this.addDataFromAPi(this.projects)

      })
      .catch(e => {
        this.error = true;
        this.errorMsg = 'Failed to load project list, reload the page to try again'
        console.log(e);
      })
    },
    /*-----------------------------*/
    add() {
      this.links.push({ interface: "", url: "", checku: null });
    },
    del(index) {
      this.links.splice(index, 1);
    },
    updateJsonBox() {
        
         axios.put(this.APIurl + this.APIurlId, { projectName: this.input, comments: this.text, links: this.links })
        .then(res => alert('Project: ' + res.data.projectName + ' has been added.'))
        this.listObjects()
        .catch(err => console.log('usually dosent work' + err))
        this.input = ''
     
    },
    check() {
      var webReg = new RegExp(/^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/ );  //eslint-disable-line
      var gDocs = "";
      //google docs link breaks the program as well the broweser tab freezed >:()
      //console.log(webReg.exec(el.url)[3] === "github" ? true : false);
      this.links.forEach(el => { //abomination of a code

      console.log(el.url.length)
        switch (el.interface) {
          case "GitHub":
            if(el.url.length > 65){
              console.log(el.checku = false)
              
            }else if(webReg.exec(el.url)[3] === "github"){
              console.log(el.checku = true)
              
            }else{
              console.log(el.checku = false)
            }
            break;
          case "Slack":
            if(el.url.length > 60){
              console.log(el.checku = false)
            }else if(webReg.exec(el.url)[3] === "app.slack"){
              console.log(el.checku = true);
            }else{
              console.log(el.checku = false)  
            }
            break;
          case "Trello":
            if(el.url.length > 60){
              console.log(el.checku = false)
            }else if(webReg.exec(el.url)[3] === "trello"){
              console.log(el.checku = true)
            }else{
              console.log(el.checku = false)    
            }
            break;
          case "Google docs":        
              gDocs = el.url.substring(0, 32); //link too long and crashes with the regex so taking only  https://docs.google.com/document
              console.log(webReg.exec(gDocs)[3] === "docs.google" ? el.checku = true : el.checku = false);
            break;
          case "Other":
              console.log(el.checku = true)
            break;
        }
      });
    }
  }
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap%27');
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

.rm {
  float: right;
  cursor: pointer;
}

.rm:hover {
  color: red;
}

.label {
  padding-top: 10px;
}

.selector {
  margin-bottom: 10px;
}

.info{
  height: 23px;
  float: right;
}

.infoModal{
  white-space: pre-wrap;
  padding-left: 20px ;
  font-family: 'Quicksand', sans-serif,monospace;
  font-size: 0.9em;

}
.note{
  color: red;
}
</style>