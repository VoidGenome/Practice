<template>
  <div>
    <v-app>
    <v-layout>
      <v-navigation-drawer
       
        v-model="drawer"
      >
        <span>Sample lang</span>
       
      </v-navigation-drawer>
<!-- 
      <v-main style="height: 250px"></v-main> -->
      <v-app-bar >
        <v-row class='mb-n1 mt-3'>
        <v-col cols='1'>
       <v-app-bar-nav-icon @click.stop="drawer = !drawer">
       </v-app-bar-nav-icon>
       </v-col>
       <v-col cols='6'></v-col>
       <v-col cols='4'>
       <v-text-field density="compact"  append-inner-icon="mdi-magnify" variant="solo" placeholder='Search' rounded hide-details></v-text-field>
       </v-col>
       </v-row>
       
    </v-app-bar>
    </v-layout>
    
    </v-app>
  </div>  
</template>

<script>

export default {
  data:() =>({
    drawer:false
  })
}
</script>

<style>

</style>