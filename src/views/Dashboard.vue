<template>
  <div class="dashboard">
    <el-input placeholder="Search..." class="search-bar" prefix-icon="el-icon-search" />
    <div class="card-grid">
      <el-card v-for="item in cards" :key="item.title" class="func-card">
        <div class="card-icon">
          <component :is="item.icon" style="font-size:32px;" />
        </div>
        <div class="card-title">{{ item.title }}</div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { Document, User, Setting, Star, Goods, CollectionTag, DataAnalysis, Histogram, Coin, Box, Tickets, ChatLineRound } from '@element-plus/icons-vue'
const cards = [
  { title: 'Product line management', icon: Document },
  { title: 'Product management', icon: Goods },
  { title: 'Public Database', icon: DataAnalysis },
  { title: 'Supplier management', icon: User },
  { title: 'Order management', icon: Box },
  { title: 'Inventory management', icon: Histogram },
  { title: 'Price management', icon: Coin },
  { title: 'Tag management', icon: CollectionTag },
  { title: 'ESG management', icon: Star },
  { title: 'System settings', icon: Setting },
  { title: 'Ticket management', icon: Tickets },
  { title: 'Message center', icon: ChatLineRound },
]
</script>

<style scoped>
.dashboard {
  padding: 24px;
}
.search-bar {
  width: 320px;
  margin-bottom: 32px;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
}
.func-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 140px;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.func-card:hover {
  box-shadow: 0 4px 24px #409eff22;
}
.card-icon {
  margin-bottom: 12px;
}
.card-title {
  font-size: 16px;
  font-weight: 500;
}
</style> 