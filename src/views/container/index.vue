<script setup lang="ts">
import PureDescriptions from "@pureadmin/descriptions";
import { ref } from "vue";
import { useColumns } from "./columns";
import { getContainers } from "@/api/containers";

defineOptions({
  name: "Container"
});

let columns = ref();
let containers = ref();

const loadColumns = async () => {
  const { columns: loadedColumns } = await useColumns();
  columns.value = loadedColumns;
};
loadColumns();
const loadContainers = async () => {
  containers.value = (await getContainers()).data;
};
loadContainers();
const getTagType = state => {
  switch (state.toLowerCase()) {
    case "running":
      return "success";
    case "exited":
      return "danger";
    case "paused":
      return "warning";
    default:
      return "info";
  }
};
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
    <el-card class="m-4 box-card" shadow="never">
      <el-table :data="containers" stripe>
        <el-table-column prop="Names" label="Names" width="180" />
        <el-table-column prop="Status" label="Status" width="180" />
        <el-table-column prop="State" label="State">
          <template #default="{ row }">
            <el-tag :type="getTagType(row.State)">{{ row.State }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="Image" label="Image" />
      </el-table>
    </el-card>
  </div>
</template>
