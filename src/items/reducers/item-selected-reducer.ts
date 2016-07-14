import selectedItemTypes from '../item-selected-consts';

export const selectedItem = (state: any = {},
   { type, payload }) => {
  switch (type) {
    case selectedItemTypes.select_item:
      return { item: Object.assign({}, payload) };
    default: return state;
  }
};
