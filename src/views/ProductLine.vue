<template>
  <div class="product-line">
    <div class="toolbar">
      <el-button type="primary">Create Product Line</el-button>
      <el-input placeholder="Search..." v-model="search" class="search-input" />
      <el-button @click="onSearch">Search</el-button>
      <el-button @click="onReset">Reset</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" class="product-table">
      <el-table-column prop="name" label="Product Line Name" />
      <el-table-column prop="desc" label="Description" />
      <el-table-column prop="owner" label="Owner" />
      <el-table-column prop="created" label="Created At" />
      <el-table-column label="Actions">
        <template #default="scope">
          <el-button size="small" type="primary">Edit</el-button>
          <el-button size="small" type="danger">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const search = ref('')
const tableData = ref([
  { name: 'Line A', desc: 'Description A', owner: 'User1', created: '2024-01-01' },
  { name: 'Line B', desc: 'Description B', owner: 'User2', created: '2024-02-01' },
])
const onSearch = () => {}
const onReset = () => { search.value = '' }
</script>

<style scoped>
.product-line {
  padding: 24px;
}
.toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}
.search-input {
  width: 220px;
}
.product-table {
  background: #fff;
}
</style> 