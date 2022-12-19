<template>
  <div class="container">
    <div class="field">
      <span class="p-float-label">
        <InputText id="username" type="text" v-model="userName" />
        <label for="username">Name</label>
      </span>
    </div>
    <div class="field">
      <span class="p-float-label">
        <InputText id="secondName" type="text" v-model="secondName" />
        <label for="secondName">Second Name</label>
      </span>
    </div>
    <ButtonComponent label="Register" icon="pi pi-user"></ButtonComponent>
  </div>
</template>

<script>
export default {
  name: "RegisterComponent",
  data() {
    return {
      userName: '',
      secondName: '',
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>