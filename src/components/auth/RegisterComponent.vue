<template>
  <div class="container">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-4 relative">
      <ProgressSpinner v-if="loading" aria-label="Loading"></ProgressSpinner>
      <div class="text-center mb-5">
        <img src="@/assets/images/timer-stopwatch-svgrepo-com.svg" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Register</div>
        <span class="text-600 font-medium line-height-3">Already have an account?</span>
        <a
          class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
          @click.prevent="$emit('goToLogin')"
        >
          Go to login page!
        </a>
      </div>

      <form>
        <label for="userName" class="block text-900 font-medium mb-2">Name</label>
        <InputText
          id="userName"
          type="text"
          class="w-full mb-3"
          autocomplete="false"
          v-model="formData.userName"
        />

        <label for="secondName" class="block text-900 font-medium mb-2">Second Name</label>
        <InputText
          id="secondName"
          type="text"
          class="w-full mb-3"
          autocomplete="false"
          v-model="formData.secondName"
        />

        <label for="email" class="block text-900 font-medium mb-2">Email</label>
        <InputText
          id="email"
          type="email"
          class="w-full mb-3"
          autocomplete="false"
          v-model="formData.email"
        />

        <label for="password" class="block text-900 font-medium mb-2">Password</label>
        <InputText
          id="password"
          type="password"
          class="w-full mb-3"
          autocomplete="false"
          v-model="formData.password"
        />

        <ButtonComponent
          label="Register"
          icon="pi pi-user"
          class="w-full"
          @click.prevent="registerUser()"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterComponent",
  data() {
    return {
      loading: false,
      formData : {
        userName: null,
        secondName: null,
        email: null,
        password: null,
      },
    }
  },
  methods: {
    registerUser() {
      this.loading = true
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
        .then(response => {
          this.loading = false
          if (response.data.status === 200) {
            this.$emit('goToLogin')
          }
        })
        .catch(e => {
          this.loading = false
          console.warn(e)
        })
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
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  .p-progress-spinner {
    position: absolute;
    background-color: rgba(0, 0, 0, .2);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
}
</style>