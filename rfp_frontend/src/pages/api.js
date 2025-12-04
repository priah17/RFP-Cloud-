import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const login = (data) => API.post('/auth/login', data);
export const signup = (data) => API.post('/auth/signup', data);
export const createRFP = (data) => API.post('/rfps', data);
export const submitProposal = (data) => API.post('/proposals', data);
export const getRFPs = () => API.get('/rfps');
