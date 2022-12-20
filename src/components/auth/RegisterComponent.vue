<template>
  <div class="container">
    <CardComponent>
      <template #content>
        <div class="field">
        <span class="p-float-label">
          <InputText id="username" type="text" v-model="formData.userName" />
          <label for="username">Name</label>
        </span>
        </div>
        <div class="field">
        <span class="p-float-label">
          <InputText id="secondName" type="text" v-model="formData.secondName" />
          <label for="secondName">Second Name</label>
        </span>
        </div>
        <div class="field">
        <span class="p-float-label">
          <InputText id="email" type="email" v-model="formData.email" />
          <label for="email">Email</label>
        </span>
        </div>
        <div class="field">
        <span class="p-float-label">
          <InputText id="password" type="password" v-model="formData.password" />
          <label for="password">Password</label>
        </span>
        </div>
      </template>
      <template #footer>
        <ButtonComponent label="Register" icon="pi pi-user" @click.prevent="getFormData" />
      </template>
    </CardComponent>
  </div>
</template>

<script>
export default {
  name: "RegisterComponent",
  data() {
    return {
      formData : {
        userName: null,
        secondName: null,
        email: null,
        password: null,
      },
    }
  },
  methods: {
    getFormData() {
      console.log(this.formData)
      this.axios
        .post(
          'http://localhost:3000/api/auth/signup',
          {
            name: this.formData.userName,
            second_name: this.formData.secondName,
            email: this.formData.email,
            password: this.formData.password,
          }
        )
        .then(response => console.log(response))
        .catch(e => console.warn(e))
    }
  },
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .field {
    margin-bottom: 26px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>