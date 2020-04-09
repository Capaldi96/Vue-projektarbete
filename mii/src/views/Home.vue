<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <listComponent></listComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import listComponent from '../components/list-component'
export default {
  name: 'Home',
  components: {
    listComponent
  }
}
</script>
