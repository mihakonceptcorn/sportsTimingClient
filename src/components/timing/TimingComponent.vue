<template>
  <div class="timing">
    <ConfirmPopup></ConfirmPopup>
    <DataTable
      v-if="isList"
      :value="competitors"
      :paginator="true"
      :rows="10"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rowsPerPageOptions="[10,20,50]"
      responsiveLayout="scroll"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
    >
      <TableColumn field="name" header="Name"></TableColumn>
      <TableColumn field="second_name" header="Second Name"></TableColumn>
      <TableColumn field="gender" header="Gender"></TableColumn>
      <TableColumn field="category" header="Category"></TableColumn>
      <TableColumn field="competition_number" header="Number"></TableColumn>
      <TableColumn header="Actions">
        <template #body="slotProps">
          <ButtonComponent label="Start" icon="pi pi-flag" @click="startTiming(slotProps.data.id)"/>
        </template>
      </TableColumn>
    </DataTable>
    <div v-else style="padding-bottom: 30px">
      <div>
        <DropdownComponent v-model="formData.gender" :options="genders" optionLabel="gender" placeholder="Gender" />
      </div>
      <div>
        <DropdownComponent v-model="formData.category" :options="categories" optionLabel="category" placeholder="Category" />
      </div>
      <ButtonComponent label="Go To List" icon="pi pi-flag" @click="goToList($event)"/>
    </div>
    <div style="padding-top: 50px">
      <ButtonComponent label="Close Timing!" icon="pi pi-times" @click="close($event)"/>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'TimingComponent',
  data() {
    return {
      isList: false,
      genders: [{gender: 'male'}, {gender: 'female'}],
      categories: [
        {category: 'amateurs'},
        {category: 'masters'},
        {category: 'elite'},
        {category: 'juniors'},
      ],
      formData: {
        category: null,
        gender: null,
      },
      competitors: null,
    }
  },
  methods: {
    ...mapActions('competitor', ['getCompetitorsByCompetitionId']),
    close(event) {
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Are you sure you want to close?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.$emit('close')
        },
        reject: () => {}
      });
    },
    async goToList(event) {
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Are you sure you want to continue?',
        icon: 'pi pi-exclamation-triangle',
        accept: async () => {
          const competitionId = this.$route.params.id
          const competitors = await this.getCompetitorsByCompetitionId(competitionId)
          this.competitors = competitors.filter(c => {
            return c.gender === this.formData.gender.gender && c.category === this.formData.category.category
          })
          this.isList = true
        },
        reject: () => {}
      });
    },
    startTiming(id) {
      console.log('startTiming id:', id)
    }
  },
}
</script>

<style scoped lang="scss">
.timing {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0d1a2c;
}
</style>