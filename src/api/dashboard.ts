import { http } from "@/utils/http";
import { baseUrlApi } from "@/api/utils";

type Result = {
  success: boolean;
  data?: any;
};

export const getDashboard = () => {
  return http.request<Result>("get", baseUrlApi("dashboard"));
};
