<template>
  <div>
    <router-link to="/">Home</router-link>
    <h1>Account</h1>
    <p>{{user.id}}</p>
    <p>{{user.name}}</p>
    <p>{{user.second_name}}</p>
    <p>{{user.email}}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "AccountView",
  computed: {
    ...mapGetters('user', ['user'])
  },
  created() {
    this.setUserData()
  },
  methods: {
    ...mapActions('user', ['setUserData']),
  },
}
</script>

<style scoped>

</style>