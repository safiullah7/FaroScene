import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => 
        axios.get(url).then(responseBody),
    post: (url: string, body: {}) =>
        axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => 
        axios.put(url, body).then(responseBody),
    del: (url: string) => 
        axios.delete(url).then(responseBody),
    postForm: (url: string, file: Blob) => {
        let formData = new FormData();
        formData.append('File', file); // key 'File' must match with api method param
        return axios.post(url, formData, {
            headers: {'Content-type': 'multipart/form-data'}
        }).then(responseBody)
    }
}