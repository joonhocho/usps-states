import data from './data';

const byName = Object.create(null);
const byAbbr = Object.create(null);

for (let i = 0, il = data.length; i < il; i++) {
  const item = data[i];
  const {name, abbr} = item;
  byName[name] = item;
  byAbbr[abbr] = item;
}


export {
  data,
  byName,
  byAbbr,
};

export default {
  data,
  byName,
  byAbbr,
};
