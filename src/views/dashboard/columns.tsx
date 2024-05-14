import { getDashboard } from "@/api/dashboard";

export async function useColumns() {
  const { data } = await getDashboard();
  console.log(data);
  const columns = [
    {
      label: "系统",
      minWidth: 100,
      cellRenderer: () => {
        return (
          <el-tag size="default" class="!text-base">
            {data.OperatingSystem}
          </el-tag>
        );
      }
    },
    {
      label: "Docker version",
      minWidth: 120,
      cellRenderer: () => {
        return (
          <el-tag size="default" class="!text-base">
            {data.ServerVersion}
          </el-tag>
        );
      }
    },
    {
      label: "DockerRootDir",
      minWidth: 140,
      cellRenderer: () => {
        return (
          <el-tag size="default" class="!text-base">
            {data.DockerRootDir}
          </el-tag>
        );
      }
    },
    {
      label: "Driver",
      minWidth: 140,
      cellRenderer: () => {
        return (
          <el-tag size="default" class="!text-base">
            {data.Driver}
          </el-tag>
        );
      }
    },
    {
      label: "KernelVersion",
      minWidth: 140,
      cellRenderer: () => {
        return (
          <el-tag size="default" class="!text-base">
            {data.KernelVersion}
          </el-tag>
        );
      }
    },
    {
      label: "CPU",
      minWidth: 140,
      cellRenderer: () => {
        return (
          <el-tag size="default" class="!text-base">
            {data.NCPU}
          </el-tag>
        );
      }
    },
    {
      label: "Containers",
      minWidth: 140,
      cellRenderer: () => {
        return (
          <el-tag size="default" class="!text-base">
            {data.Containers}
          </el-tag>
        );
      }
    },
    {
      label: "Images",
      minWidth: 140,
      cellRenderer: () => {
        return (
          <el-tag size="default" class="!text-base">
            {data.Images}
          </el-tag>
        );
      }
    },
    {
      label: "完整版代码地址",
      minWidth: 140,
      cellRenderer: () => {
        return (
          <a href="https://github.com/qfdk/EasyDockerWeb" target="_blank">
            <span style="color: var(--el-color-primary)">
              Github 完整版代码
            </span>
          </a>
        );
      }
    }
  ];
  return {
    columns
  };
}
