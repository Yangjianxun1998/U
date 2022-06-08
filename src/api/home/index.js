import request from "@/utils/request";

// 查询工艺路线分类列表
export function processlist(params) {
  return request({
    url: "/qironggu/processType/list",
    method: "get",
    params: params
  });
}
