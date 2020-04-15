let auth = false; 
function authenticated(input){
    auth = input
    console.log('setAuth in service     ' + auth)
}

function  getAuth(){
    console.log(auth)
    return auth
}
export default{
    
    methods: {getAuth,authenticated}
}

// import Vue from 'vue'
// export const data =  {

//     methods: {
//         getAuth(){
//             state.isLoggedIn = !state.isLoggedIn;
//             console.log(state.isLoggedIn)
//             return state.isLoggedIn
            
//         }
//     }
// }

// const state = Vue.observable({ // this is the magic
//     isLoggedIn: false
   
// });