<script setup lang="ts">
import { computed, ref } from "vue";
import { useColumns } from "./columns";
import PureDescriptions from "@pureadmin/descriptions";

export interface schemaItem {
  field: string;
  label: string;
}

const { pkg } = __APP_INFO__;
const { dependencies, devDependencies } = pkg;

const schema: schemaItem[] = [];
const devSchema: schemaItem[] = [];
let columns = ref();

const loadColumns = async () => {
  const { columns: loadedColumns } = await useColumns();
  columns.value = loadedColumns;
};

loadColumns();

defineOptions({
  name: "Dashboard"
});

const words = [
  "@pureadmin/utils",
  "@vueuse/core",
  "axios",
  "dayjs",
  "echarts",
  "vue",
  "element-plus",
  "pinia",
  "vue-i18n",
  "vue-router",
  "@iconify/vue",
  "@vitejs/plugin-vue",
  "@vitejs/plugin-vue-jsx",
  "eslint",
  "prettier",
  "sass",
  "stylelint",
  "tailwindcss",
  "typescript",
  "vite",
  "vue-tsc"
];

const getMainLabel = computed(
  () => (label: string) => words.find(w => w === label) && "main-label"
);

Object.keys(dependencies).forEach(key => {
  schema.push({ field: dependencies[key], label: key });
});

Object.keys(devDependencies).forEach(key => {
  devSchema.push({ field: devDependencies[key], label: key });
});
</script>

<template>
  <div>
    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">Docker 平台信息</span>
        </div>
      </template>
      <el-scrollbar>
        <PureDescriptions border :columns="columns" :column="4" />
      </el-scrollbar>
    </el-card>

    <el-card class="m-4 box-card" shadow="never">
      <template #header>
        <div class="card-header flex items-center">
          <span class="font-medium">生产环境依赖</span>
          <el-tag type="primary" effect="dark" size="small" round class="ml-1">
            {{ schema.length }}
          </el-tag>
        </div>
      </template>
      <el-scrollbar>
        <el-descriptions border size="small" :column="6">
          <el-descriptions-item
            v-for="(item, index) in schema"
            :key="index"
            :label="item.label"
            :label-class-name="getMainLabel(item.label)"
            class-name="pure-version"
            label-align="right"
          >
            <a
              :href="'https://www.npmjs.com/package/' + item.label"
              target="_blank"
            >
              <span
                :class="getMainLabel(item.label)"
                style="color: var(--el-color-primary)"
              >
                {{ item.field }}
              </span>
            </a>
          </el-descriptions-item>
        </el-descriptions>
      </el-scrollbar>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
:deep(.main-label) {
  font-size: 16px !important;
  color: var(--el-color-danger) !important;
}

:deep(.pure-version) {
  font-size: 14px !important;
  font-weight: 600 !important;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
}

.main-content {
  margin: 0 !important;
}
</style>
