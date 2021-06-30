export const dateFormator = date => {
  return date
    .split('/')
    .reduce((acc, curr) => curr + '-' + acc, '')
    .slice(0, 10);
};

export const ifNotCurrentDate = date => {
  if (date) {
    let day = date.split('/')[0].trim();
    return day === new Date().getDate().toString();
  }
  return false;
};

//'1995-12-17'
export const getDay = date => {
  let dateString = new Date(dateFormator(date));
  return dateString.toDateString().slice(0, 10);
};
