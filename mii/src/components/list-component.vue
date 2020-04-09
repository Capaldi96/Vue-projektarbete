<template>
    <div>
        <h1>This is the list component</h1>
        <editComponent></editComponent>
    </div>
</template>

<script>
import editComponent from './edit-component'   // figure it out for edit component to only open when edit button pressed maybe routing
export default {

  name: 'listComponent',
  components: {
    editComponent
  }
  
}
</script>