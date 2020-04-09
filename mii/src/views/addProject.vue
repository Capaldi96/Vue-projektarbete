<template>
  <div class="addProject">
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-left">Add Project</h5>
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
                  <!-- <input
                    class="form-control urlInput"
                    type="text"
                    placeholder="Related URL"
                    :state="validation"
                    v-model="item.url"
                  />-->
                  <b-form-input
                    class="label"
                    id="input-live"
                    aria-describedby="input-live-help input-live-feedback"
                    placeholder="URL link"
                    trim
                    v-model="item.url"
                  ></b-form-input>
                </div>
                <button class="btn btn-success add" @click="add" type="button">Add Link +</button>

                <button
                  class="btn btn-lg btn-primary btn-block text-uppercase"
                  type="button"
                  @click="check"
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
  computed: {
    valid() {
      return this.input.length > 2 ? true : false;
    },

  },
  data() {
    return {
      text:"",
      input: "",
      links: [{ interface: "", url: "" }]
    };
  },
  methods: {
    add() {
      this.links.push({ interface: "", url: "" });
    },
    del(index) {
      this.links.splice(index, 1);
    },
    check(){
     var webReg = new RegExp(/^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/) //eslint-disable-line
       
      this.links.forEach( el => {
        
        switch (el.interface){
          case 'GitHub':  console.log(webReg.exec(el.url)); break;
          case 'Slack' : console.log(webReg.exec(el.url));break;
          case 'Trello' : console.log(webReg.exec(el.url));break;
          case 'Google docs' : console.log(webReg.exec(el.url));break;
        }
      })
    }
  }
};
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

.rm {
  float: right;
}

.rm:hover {
  color: red;
}

.label {
  padding-top: 10px;
}

.selector{
  margin-bottom: 10px;
}
</style>