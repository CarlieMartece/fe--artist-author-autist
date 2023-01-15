import axios from "axios";
const api = axios.create({
    baseURL: "https://artist-author-autist.onrender.com/api"
})

export const fetchProjects = () => {
    return api.get(`/code`)
    .then((res) => {
        return res.data;
    })
};