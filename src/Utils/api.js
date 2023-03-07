import axios from "axios";
const axiosClient=axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        "Content-type": "application/json",
    },
})

axiosClient.interceptors.response.use(res=>res.data)

export default axiosClient