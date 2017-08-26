export const buildArr = (obj) => {
  const arr = [];
  Object.keys(obj).forEach((key) => {
    arr.push(obj[key]);
  });
  return arr;
};

export const formatDate = (date) => {
  const formatted = new Date(date);
  return `${formatted.getMonth()+1}/${formatted.getDate()}/${formatted.getFullYear()}`;
};
