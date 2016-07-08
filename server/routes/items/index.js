import jsonData from './items.json';
const fakeGetItems = () => {
  return new Promise((resolve, reject) => {
    return resolve(jsonData);
  });
};

const items = async function () {
    const data = await fakeGetItems();
    this.status = 200;
    this.body = data;
};

export { items }
