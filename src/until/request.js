import axios from "axios";

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL:
        process.env.NODE_ENV == "development"
            ? "/company"
            : "http://pmc01.qiiot.com:8081/stage-api/",
    // 超时
    timeout: 10000
});

// request拦截器
service.interceptors.request.use(
    config => {
        // get请求映射params参数
        if (config.method === "get" && config.params) {
            let url = config.url + "?";
            for (const propName of Object.keys(config.params)) {
                const value = config.params[propName];
                var part = encodeURIComponent(propName) + "=";
                if (value !== null && typeof value !== "undefined") {
                    // 如果是get请求，且params是数组类型如arr=[1,2]，则转换成arr=1&arr=2
                    if (typeof value === "object") {
                        for (const key of Object.keys(value)) {
                            let params = propName;
                            var subPart = encodeURIComponent(params) + "=";
                            url += subPart + encodeURIComponent(value[key]) + "&";
                        }
                    } else {
                        url += part + encodeURIComponent(value) + "&";
                    }
                }
            }
            url = url.slice(0, -1);
            config.params = {};
            config.url = url;
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    res => {

    },
    error => {
        return Promise.reject(error);
    }
);



export default service;
