<template>
  <div class="home">
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
