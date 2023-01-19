import axios from "axios";
const api = axios.create({
  baseURL: "https://artist-author-autist.onrender.com/api",
});

export const fetchProjects = () => {
  return api.get(`/code`).then((res) => {
    return res.data;
  });
};

export const fetchProjectSingle = (project_id) => {
  return api.get(`/code/${project_id}`).then((res) => {
    return res.data;
  });
};
