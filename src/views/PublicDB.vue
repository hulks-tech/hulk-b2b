<template>
  <div class="public-db">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="Material" name="material" />
      <el-tab-pane label="Fibre" name="fibre" />
      <el-tab-pane label="Yarn" name="yarn" />
      <el-tab-pane label="Fabric" name="fabric" />
      <el-tab-pane label="Garment" name="garment" />
    </el-tabs>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="type" label="Type" />
      <el-table-column prop="desc" label="Description" />
      <el-table-column label="Actions">
        <template #default="scope">
          <el-button size="small">Detail</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const activeTab = ref('material')
const tableData = ref([
  { name: 'Cotton', type: 'Material', desc: 'Natural fibre' },
  { name: 'Polyester', type: 'Material', desc: 'Synthetic fibre' },
])
watch(activeTab, (tab) => {
  // 可根据 tab 切换不同数据
})
</script>

<style scoped>
.public-db {
  padding: 24px;
}
</style> 