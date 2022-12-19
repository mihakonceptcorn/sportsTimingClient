<template>
  <div><h1>AuthView</h1></div>
  <RegisterComponent></RegisterComponent>
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

</style>