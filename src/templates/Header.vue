<template>
<div id="topnav">
    <v-toolbar id="toolbar" >
      <v-toolbar-title>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn text medium id="items" @click="redirect('/login')">Login</v-btn>
        <v-divider
          class="mx-4"
          inset
          vertical>
        </v-divider>
        <v-btn text medium id="items" @click="redirect('/register')">Register</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<style scoped lang="scss">
#toolbar{
  background-color: skyblue !important;
}
#logo{
  margin-left: -30% !important;
  cursor: pointer !important;
}
</style>

<script>
// import ROUTER from "router";    
export default {
  name: "headernav",
//   methods: {
//     redirect(route) {
//       ROUTER.push(route);
//     }
//   }
}
</script>