import api from './api';

/**
 * @params {string} userId
 */

export const getUserList = async () =>
  await api({
    url: '/user/list',
    method: 'get',
  });
