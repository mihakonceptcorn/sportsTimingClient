<template>
  <div class="authContainer">
    <RegisterComponent></RegisterComponent>
  </div>
</template>

<script>
import RegisterComponent from "@/components/auth/RegisterComponent";
export default {
  name: "AuthView",
  components: {
    RegisterComponent,
  }

}
</script>

<style scoped>
.authContainer {

}
</style>