import axios from 'axios';
const SERVER_URL = 'http://localhost:5000/';

const Api = ({ url, type = 'GET', params, contentType = 'application/json' }) => {
  const headers = {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    'Access-Control-Allow-Headers':
      'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization',
  };

  if (accessToken !== null) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return axios({
    method: type,
    url: `${SERVER_URL}${url}`,
    headers,
    data: params,
  });
};

export default Api;
