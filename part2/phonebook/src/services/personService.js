import axios from "axios";

const BASE_URL = "http://localhost:3001/persons";

const personService = {
  getAll: () => {
    return axios.get(BASE_URL).then(({ data }) => data);
  },
  add: (newPerson) => {
    return axios.post(BASE_URL, newPerson).then(({ data }) => data);
  },
  delete: (person) => {
    return axios.delete(`${BASE_URL}/${person.id}`);
  },
  update: (person) => {
    return axios
      .put(`${BASE_URL}/${person.id}`, person)
      .then(({ data }) => data);
  },
};

export default personService;
