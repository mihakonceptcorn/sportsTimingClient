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
          <i class="pi pi-calendar-plus"></i>
        </span>
        <InputCalendar placeholder="Date" id="date" v-model="formData.date"/>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <ButtonComponent label="Create" icon="pi pi-check-square" @click.prevent="createCompetition()"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateCompetition",
  data() {
    return {
      formData: {
        name: null,
        stages: null,
        roundsInStage: null,
        date: null,
      }
    }
  },
  methods: {
    createCompetition() {

    }
  }
}
</script>

<style scoped>

</style>