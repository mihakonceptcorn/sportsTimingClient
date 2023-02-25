<template>
  <h3>Add Competitor to {{formData.competitionId}}</h3>
  <div class="">
    <div class="col-12 md:col-4">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-id-card"></i>
        </span>
        <InputText placeholder="Name" id="name" type="text" v-model="formData.name"/>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-id-card"></i>
        </span>
        <InputText placeholder="Second Name" id="secondName" type="text" v-model="formData.secondName"/>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-users"></i>
        </span>
        <DropdownComponent v-model="formData.gender" :options="genders" optionLabel="gender" placeholder="Gender" />
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-book"></i>
        </span>
        <DropdownComponent v-model="formData.category" :options="categories" optionLabel="category" placeholder="Category" />
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-inputgroup">
        <CalendarComponent v-model="formData.dob" :showIcon="true" placeholder="Date Of Birth"/>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-discord"></i>
        </span>
        <InputText placeholder="Team" id="team" type="text" v-model="formData.team"/>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-flag"></i>
        </span>
        <InputText placeholder="Country" id="country" type="text" v-model="formData.country"/>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-flag-fill"></i>
        </span>
        <InputText placeholder="Region" id="region" type="text" v-model="formData.region"/>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-flag-fill"></i>
        </span>
        <InputText placeholder="Locality" id="locality" type="text" v-model="formData.locality"/>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-sort-numeric-up"></i>
        </span>
        <InputNumber placeholder="Number" id="competitionNumber" v-model="formData.competitionNumber"/>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <ButtonComponent label="Add" icon="pi pi-check-square" @click.prevent="add()"/>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "AddCompetitor",
  data() {
    return {
      formData: {
        competitionId: this.$route.params.id,
        name: null,
        secondName: null,
        gender: null,
        category: null,
        dob: null,
        team: null,
        country: null,
        region: null,
        locality: null,
        competitionNumber: null,
      },
      genders: [{gender: 'male'}, {gender: 'female'}],
      categories: [
        {category: 'amateurs'},
        {category: 'masters'},
        {category: 'elite'},
        {category: 'juniors'},
      ],
    }
  },
  methods: {
    ...mapActions('competitor', ['addCompetitor']),
    async add() {
      const response = await this.addCompetitor({
        competitionId: this.formData.competitionId,
        name: this.formData.name,
        secondName: this.formData.secondName,
        gender: this.formData.gender.gender,
        category: this.formData.category.category,
        dob: this.formData.dob.toISOString().slice(0, 19).replace('T', ' '),
        team: this.formData.team,
        country: this.formData.country,
        region: this.formData.region,
        locality: this.formData.locality,
        competitionNumber: this.formData.competitionNumber,
      })
      if (response.status === 200) {
        this.$router.push({name: 'previewCompetition', params: {id: this.formData.competitionId}})
      } else {
        console.warn('Something went wrong')
      }
    }
  },
}
</script>

<style scoped>

</style>