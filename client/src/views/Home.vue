<template>
  <div class="home">
    <dashboard-component />
  </div>
</template>

<script>
import DashboardComponent from '../components/DashboardComponent';
export default {
  name: 'home',
  components: {
    DashboardComponent,
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin: 0 auto !important;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
}
</style>
