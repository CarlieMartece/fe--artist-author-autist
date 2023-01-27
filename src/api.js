import axios from "axios";
const api = axios.create({
  baseURL: "https://artist-author-autist.onrender.com/api",
});

export const fetchArt = (year, category) => {
  return api.get(`/art`, { params: { year: year, category: category } })
    .then((res) => {
      return res.data;
    })
};

export const fetchArtSingle = (project_id) => {
  return api.get(`/art/${project_id}`).then((res) => {
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
