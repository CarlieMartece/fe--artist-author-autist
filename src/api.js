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

export const fetchBooks = () => {
  return api.get(`/books`).then((res) => {
    return res.data;
  });
};

export const fetchBookSingle = (book_id) => {
  return api.get(`/books/${book_id}`).then((res) => {
    return res.data;
  });
};

export const fetchArt = () => {
  return api.get(`/art`).then((res) => {
    return res.data;
  });
};