import { types } from "../types/types";

export const emailReducer = (state = {}, action) => {
  switch (action.type) {
    case types.add:
      // payload -> object.
      return [action.payload, ...state];

    case types.filter:
      // payload -> string.
      return state.filter(item => item.section === action.payload);

    case types.search:
      // payload -> object.
      return state.filter(
        item =>
          item.section === action.payload.section &&
          item.includes(action.payload.value)
      );

    case types.readed:
      // payload -> number.
      return state.map(item =>
        item.id === action.payload
          ? { ...item, isReaded: !item.isReaded }
          : item
      );

    case types.section:
      // payload -> object.
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, section: action.payload.section }
          : item
      );

    default:
      break;
  }

  return state;
};
