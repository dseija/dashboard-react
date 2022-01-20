export const getRandomKey = (prefix = '') =>
  `${prefix}_${Math.floor(Math.random() * Date.now()).toString(36)}`;
