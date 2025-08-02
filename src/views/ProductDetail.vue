<template>
  <div class="product-detail">
    <el-row :gutter="24">
      <el-col :span="8">
        <el-card>
          <img src="https://via.placeholder.com/240x240" alt="Product" style="width:100%;margin-bottom:16px;" />
          <div><b>Product Name:</b> Cotton</div>
          <div><b>Type:</b> Material</div>
          <div><b>Supplier:</b> Supplier A</div>
          <div><b>Stock:</b> 100</div>
          <div><b>Price:</b> $10</div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-tabs>
          <el-tab-pane label="Product Info">
            <div>Product information details...</div>
          </el-tab-pane>
          <el-tab-pane label="Technical Index">
            <div>Technical index details...</div>
          </el-tab-pane>
          <el-tab-pane label="Environmental Index">
            <div>Environmental index details...</div>
          </el-tab-pane>
          <el-tab-pane label="Recycle Index">
            <div>Recycle index details...</div>
          </el-tab-pane>
          <el-tab-pane label="ESG">
            <div>ESG details...</div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
// 可根据实际需求补充数据和交互
</script>

<style scoped>
.product-detail {
  padding: 24px;
}
</style> 