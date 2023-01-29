<template>
  <h3>Create Competition</h3>
  <div class="">
    <div class="col-12 md:col-4">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-flag"></i>
        </span>
        <InputText placeholder="Competition Name" id="name" type="text" v-model="formData.name"/>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-calendar-plus"></i>
        </span>
        <InputCalendar placeholder="Date" id="date" v-model="formData.date"/>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-calculator"></i>
        </span>
        <InputNumber placeholder="Stages" id="stages" v-model="formData.stages"/>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-calculator"></i>
        </span>
        <InputNumber placeholder="Rounds In Stage" id="roundsInStage" v-model="formData.roundsInStage"/>
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
          <i class="pi pi-flag"></i>
        </span>
        <InputText placeholder="City" id="city" type="text" v-model="formData.city"/>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-flag"></i>
        </span>
        <InputText placeholder="Location" id="location" type="text" v-model="formData.location"/>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-flag"></i>
        </span>
        <TextArea placeholder="Description" id="description" type="text" v-model="formData.description"/>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <ButtonComponent label="Create" icon="pi pi-check-square" @click.prevent="create()"/>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "CreateCompetition",
  data() {
    return {
      formData: {
        name: null,
        stages: null,
        roundsInStage: null,
        date: null,
        country: null,
        city: null,
        location: null,
        description: null,
      }
    }
  },
  methods: {
    ...mapActions('competition', ['createCompetition']),
    async create() {
      const responce = await this.createCompetition({
        name: this.formData.name,
        stages: this.formData.stages,
        rounds: this.formData.roundsInStage,
        date: this.formData.date.toISOString().slice(0, 19).replace('T', ' '),
        country: this.formData.country,
        city: this.formData.city,
        location: this.formData.location,
        description: this.formData.description,
      })
      if (responce.status === 200) {
        this.$router.push({name: 'previewCompetition', params: {id: responce.values.result.insertId}})
      } else {
        console.warn('Something went wrong')
      }
    }
  }
}
</script>

<style scoped>

</style>