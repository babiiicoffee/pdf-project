<template>
  <div class="home">
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src

import Login from "@/components/forms/Login.vue";

export default {
  name: "home",
  components: {
    Login
  }
};
</script>
