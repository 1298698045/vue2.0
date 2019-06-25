import axios from 'axios'
import QS from 'qs';
// 环境的切换
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'https://test.api.aplusx.com';
}
else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = 'https://www.ceshi.com';
}
else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'https://www.production.com';
}
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}
function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
export { get, post };
