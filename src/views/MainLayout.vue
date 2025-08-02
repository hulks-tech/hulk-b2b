<template>
  <div class="main-layout">
    <el-container style="height: 100vh">
      <el-aside width="220px" class="sidebar">
        <div class="logo">FBD 3.0</div>
        <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" router>
          <el-menu-item index="/app/home">Home Page</el-menu-item>
          <el-menu-item index="/app/product-line">Product line management</el-menu-item>
          <el-menu-item index="/app/product">Product management</el-menu-item>
          <el-sub-menu index="/app/db" popper-class="submenu">
            <template #title>Public Database</template>
            <el-menu-item index="/app/db/material">Material</el-menu-item>
            <el-menu-item index="/app/db/fibre">Fibre</el-menu-item>
            <el-menu-item index="/app/db/yarn">Yarn</el-menu-item>
            <el-menu-item index="/app/db/fabric">Fabric</el-menu-item>
            <el-menu-item index="/app/db/garment">Garment</el-menu-item>
          </el-sub-menu>
        </el-menu>
        <div class="sidebar-footer">
          <div>Digital Clothing Limited.</div>
          <div style="font-size:12px;">V1.0.1</div>
        </div>
      </el-aside>
      <el-container>
        <el-header class="header">
          <div class="header-right">
            <span class="user">Haoke Liu</span>
          </div>
        </el-header>
        <el-main class="main-content">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const activeMenu = ref(route.path)
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
}
.logo {
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  background: #2d3a4b;
  padding: 24px 0;
  text-align: center;
  letter-spacing: 2px;
}
.sidebar {
  background: #2d3a4b;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sidebar-footer {
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  font-size: 13px;
}
.header {
  background: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  box-shadow: 0 2px 8px #f0f1f2;
}
.header-right {
  display: flex;
  align-items: center;
}
.user {
  margin-left: 16px;
  color: #409eff;
  font-weight: bold;
}
.main-content {
  background: #f5f5f9;
  min-height: calc(100vh - 60px);
  padding: 24px;
}
</style> 