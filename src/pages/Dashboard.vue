<script setup>
import DashboardSidebarVue from "../components/DashboardSidebar.vue";
import DashboardContent from "../components/DashboardContent.vue";
</script>

<template>
    <div>
        <div class="dashboard">
            <div class="sidebar">
                <DashboardSidebarVue></DashboardSidebarVue>
            </div>
            <div class="content">
                <DashboardContent></DashboardContent>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dashboard {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;

    .sidebar {
        width: 350px;
        height: 100%;
        border-right: 1px solid #e5e5e5;
        margin-top: 150px;
        margin-bottom: 130px;
        overflow-y: scroll;
    }

    .content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }
}
</style>
