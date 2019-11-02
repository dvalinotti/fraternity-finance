<template>
    <div class="header-container">
        <md-tabs md-sync-route md-alignment="centered">
            <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
            <md-tab id="tab-budget" md-label="Budget" to="/budget" exact></md-tab>
            <md-tab id="tab-dues" md-label="Dues" to="/dues" exact></md-tab>
        </md-tabs>
    </div>    
</template>

<script>
export default {
    name: 'header-component'
}
</script>

<style lang="scss" scoped>
.header-container {
    div {
        div {
            background-color: #2c3e50 !important;

        }
    }
}
</style>