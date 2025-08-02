<template>
  <div class="product-management">
    <el-row>
      <el-col :span="4">
        <el-menu :default-active="activeMenu" class="side-menu" @select="onSelect">
          <el-menu-item index="material">Material</el-menu-item>
          <el-menu-item index="fibre">Fibre</el-menu-item>
          <el-menu-item index="yarn">Yarn</el-menu-item>
          <el-menu-item index="fabric">Fabric</el-menu-item>
          <el-menu-item index="garment">Garment</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="Product Name" />
          <el-table-column prop="type" label="Type" />
          <el-table-column prop="supplier" label="Supplier" />
          <el-table-column prop="stock" label="Stock" />
          <el-table-column prop="price" label="Price" />
          <el-table-column label="Actions">
            <template #default="scope">
              <el-button size="small" type="primary">Detail</el-button>
              <el-button size="small">Edit</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const activeMenu = ref('material')
const tableData = ref([
  { name: 'Cotton', type: 'Material', supplier: 'Supplier A', stock: 100, price: 10 },
  { name: 'Polyester', type: 'Material', supplier: 'Supplier B', stock: 200, price: 12 },
])
const onSelect = (key) => {
  activeMenu.value = key
  // 可根据 key 切换不同数据
}
</script>

<style scoped>
.product-management {
  padding: 24px;
}
.side-menu {
  min-height: 400px;
}
</style> 