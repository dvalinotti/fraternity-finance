<template>
    <div class="dashboard-page-container md-layout">
        <md-card class="dashboard-card md-layout-item md-size-100 md-small-size-100">
            <span class="dashboard-page-title md-display-2">Header</span>
        </md-card>
    </div>
</template>

<script>
export default {
    name: 'dashboard-component'
}
</script>

<style lang="scss" scoped>
.dashboard-page-container {
    width: 100%;
    display: flex;

    .dashboard-card {
        padding: 30px;
        background-color: whitesmoke;

        .dashboard-page-title {
            text-align: left;
            margin-right: auto;
            padding-left: 30px;
        }
    }
}
</style>