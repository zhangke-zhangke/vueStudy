import request from "@/utils/request";



// 登录接口
export function layoutLogin(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    });
}




