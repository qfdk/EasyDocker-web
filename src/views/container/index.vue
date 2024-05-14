<script setup lang="ts">
import PureDescriptions from "@pureadmin/descriptions";
import { ref } from "vue";
import { useColumns } from "./columns";

defineOptions({
  name: "Container"
});

let columns = ref();

const loadColumns = async () => {
  const { columns: loadedColumns } = await useColumns();
  columns.value = loadedColumns;
};

loadColumns();
</script>

<template>
  <div>
    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">Containers 信息</span>
        </div>
      </template>
      <el-scrollbar>
        <PureDescriptions border :columns="columns" :column="4" />
      </el-scrollbar>
    </el-card>
  </div>
</template>
