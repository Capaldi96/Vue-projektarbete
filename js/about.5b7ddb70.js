(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{3538:function(t,e,l){"use strict";l.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"addProject"},[n("transition",{attrs:{name:"fade-in",appear:""}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-9 col-md-7 col-lg-5 mx-auto"},[n("div",{staticClass:"card card-signin my-5"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title text-left"},[t._v("Add Project "),n("img",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],staticClass:"info",attrs:{src:l("07e6"),alt:"info"}})]),n("b-modal",{attrs:{id:"modal-center","ok-only":"",title:"Information"}},[n("pre",{staticClass:"infoModal"},[n("p",[t._v("                   \nProject Name: At least 3 characters \nlong. \nVerification (optional): \nProvided url links are verified by\nchecking the coresponding selected\nplatform such as GitHub, Slack, Trello \nand Goodle docs.\n"),n("span",{staticClass:"note"},[t._v("\nNote!: \n\nVerification with links that are longer \nmight give false validation. \n")]),t._v(" \n                      ")]),t._v("\n                    ")])]),n("hr",{staticClass:"my-4"}),n("form",{staticClass:"form-signin"},[n("div",{staticClass:"form-label-group text-left"},[n("label",{attrs:{for:"prName"}},[t._v("Project Name")]),n("b-form-input",{staticClass:"form-control",attrs:{type:"text",id:"prName",placeholder:"project name",state:t.valid},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),n("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v("Enter at least 3 letters")])],1),n("div",{staticClass:"text-left"},[n("label",{staticClass:"label",attrs:{for:"te"}},[t._v("Description")]),n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Project details/comments",rows:"6","max-rows":"8"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),t._l(t.links,(function(e,l){return n("div",{key:l,staticClass:"form-group text-left link",attrs:{id:"app"}},[n("label",{attrs:{for:"linkSelect"}},[t._v("Select Link")]),n("p",{directives:[{name:"show",rawName:"v-show",value:t.links.length>1,expression:"links.length > 1"}],staticClass:"rm",on:{click:function(e){return t.del(l)}}},[t._v("Delete")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.interface,expression:"item.interface"}],staticClass:"form-control selector",attrs:{id:"linkSelect"},on:{change:function(l){var n=Array.prototype.filter.call(l.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"interface",l.target.multiple?n:n[0])}}},[n("option",[t._v("GitHub")]),n("option",[t._v("Slack")]),n("option",[t._v("Trello")]),n("option",[t._v("Google docs")]),n("option",[t._v("Other")])]),n("b-form-input",{staticClass:"label",attrs:{id:"input-live","aria-describedby":"input-live-help input-feedback",placeholder:"URL link",trim:"",state:e.checku},model:{value:e.url,callback:function(l){t.$set(e,"url",l)},expression:"item.url"}}),n("b-form-invalid-feedback",{attrs:{id:"input-feedback"}},[t._v("Link does not correspont to platform selected")])],1)})),n("button",{staticClass:"btn btn-success add",attrs:{type:"button"},on:{click:t.add}},[t._v("Add Link +")]),n("b-button",{attrs:{squared:"",variant:"outline-info btn-lg btn-block",type:"button"},on:{click:t.check}},[t._v(" Verify Links (optional)")]),n("b-button",{attrs:{squared:"",variant:"btn btn-lg btn-primary btn-block ",type:"button",disabled:!t.valid},on:{click:t.addJsonBox}},[t._v("Create project")])],2)],1)])])])])])],1)},a=[],i=(l("4160"),l("a434"),l("4d63"),l("ac1f"),l("25f0"),l("159b"),l("bc3a")),o=l.n(i),s={computed:{valid:function(){return""===this.input?null:this.input.length>2}},data:function(){return{butDisable:null,APIurl:"https://jsonbox.io/vueProjekt_feu2019ECutbildning",text:"",input:"",links:[{interface:"",url:"",checku:null}]}},methods:{add:function(){this.links.push({interface:"",url:"",checku:null})},del:function(t){this.links.splice(t,1)},addJsonBox:function(){for(var t=0;t<this.links.length;t++)""!==this.links[t].url&&""!==this.links[t].interface||this.links.splice(t,1);o.a.post(this.APIurl,{projectName:this.input,comments:this.text,links:this.links}).then((function(t){return alert("Project: "+t.data.projectName+" has been added.")})).catch((function(t){return console.log("usually dosent work"+t)})),this.input="",this.text="",this.links=[{interface:"",url:"",checku:null}]},check:function(){var t=new RegExp(/^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/),e="";this.links.forEach((function(l){switch(console.log(l.url.length),l.interface){case"GitHub":l.url.length>65?console.log(l.checku=!1):"github"===t.exec(l.url)[3]?console.log(l.checku=!0):console.log(l.checku=!1);break;case"Slack":l.url.length>60?console.log(l.checku=!1):"app.slack"===t.exec(l.url)[3]?console.log(l.checku=!0):console.log(l.checku=!1);break;case"Trello":l.url.length>60?console.log(l.checku=!1):"trello"===t.exec(l.url)[3]?console.log(l.checku=!0):console.log(l.checku=!1);break;case"Google docs":e=l.url.substring(0,32),console.log("docs.google"===t.exec(e)[3]?l.checku=!0:l.checku=!1);break;case"Other":console.log(l.checku=!0);break}}))}}},c=s,r=(l("f333"),l("2877")),u=Object(r["a"])(c,n,a,!1,null,"ec0ae372",null);e["default"]=u.exports},"5a57":function(t,e,l){},f333:function(t,e,l){"use strict";var n=l("5a57"),a=l.n(n);a.a}}]);
//# sourceMappingURL=about.5b7ddb70.js.map