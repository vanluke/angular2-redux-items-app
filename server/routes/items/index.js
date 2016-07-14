import jsonData from './items.json';
const fakeGetItems = () => {
  return new Promise((resolve, reject) => {
    return resolve(jsonData);
  });
};

const fakeGetItem = (id) => {
  return new Promise((resolve, reject) => {
    return resolve(jsonData.items.find(e => parseInt(e.id, 10) === parseInt(id, 10)));
  });
};

const items = async function () {
    const data = await fakeGetItems();
    this.status = 200;
    this.body = data;
};

const item = async function () {
    const itemId = this.params.id;
    const data = await fakeGetItem(itemId);
    this.status = 200;
    this.body = data;
};

export { items, item }
