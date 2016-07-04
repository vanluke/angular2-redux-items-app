import selectedItemTypes from '../item-selected-consts';

export const selectedItem = (state: any = undefined,
   { type, payload }) => {
  switch (type) {
    case selectedItemTypes.select_item:
      return state.find(e => e.id === payload.id);
    default: return state;
  }
};
