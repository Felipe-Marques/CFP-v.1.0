import axios from 'axios';

const baseURL = 'http://192.168.1.180:8080/api/transaction';

const getAll = (currentPeriod, searchByDescription) => {
  return axios.get(
    `${baseURL}?period=${currentPeriod}&&description=${searchByDescription}`
  );
};

const insertTransaction = (data) => {
  return axios.post(baseURL, data);
};

const update = async (_id, data) => {
  const response = await axios.patch(`${baseURL}/${_id}`, data);
  return response.data;
};

const remove = (_id) => {
  return axios.delete(`${baseURL}/${_id}`);
};

export default { getAll, insertTransaction, update, remove };
