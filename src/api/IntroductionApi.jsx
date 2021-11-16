import api from './api';

/**
 * @params {string} userId
 */

export const getIntroductionList = async () =>
  await api({
    url: '/introduction',
    method: 'get',
  });

export const getIntroduction = async (id) =>
  await api({ url: `/introduction/${id}`, method: 'get' });
