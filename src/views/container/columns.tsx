import { getDashboard } from "@/api/dashboard";

export async function useColumns() {
  const { data } = await getDashboard();
  const columns = [
    {
      label: "Containers",
      minWidth: 140,
      cellRenderer: () => {
        return (
          <el-tag size="default" type="primary">
            {data.ContainersRunning +
              data.ContainersPaused +
              data.ContainersStopped}
          </el-tag>
        );
      }
    },
    {
      label: "Running",
      minWidth: 140,
      cellRenderer: () => {
        return (
          <el-tag size="default" type="success">
            {data.ContainersRunning}
          </el-tag>
        );
      }
    },
    {
      label: "Paused",
      minWidth: 140,
      cellRenderer: () => {
        return (
          <el-tag size="default" type="warning">
            {data.ContainersPaused}
          </el-tag>
        );
      }
    },
    {
      label: "Stopped",
      minWidth: 140,
      cellRenderer: () => {
        return (
          <el-tag size="default" type="danger">
            {data.ContainersStopped}
          </el-tag>
        );
      }
    }
  ];
  return {
    columns
  };
}
