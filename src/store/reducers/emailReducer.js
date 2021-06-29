import { types } from "../types/types";
import data from "../../samples/mail-data.json";

const initialState = {
  emails: data,
  filter: [],
  search: ""
};

export const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.add:
      return {
        ...state,
        emails: [action.payload, ...state]
      };

    case types.filter:
      return {
        ...state,
        filter: state.emails.filter(item => item.section === action.payload)
      };

    case types.search:
      console.log(action.payload);
      return {
        ...state,
        search: action.payload.value,
        filter: search
          ? state.emails.filter(
              item =>
                item.section === action.payload.section &&
                item.subject
                  .toLowerCase()
                  .indexOf(action.payload.value.toLowerCase()) > -1
            )
          : state.emails.filter(item => item.section === action.payload.section)
      };

    case types.readed:
      return { ...state };
    // return state.map(item =>
    //   item.id === action.payload
    //     ? { ...item, isReaded: !item.isReaded }
    //     : item
    // );

    case types.section:
      return { ...state };
    // return state.map(item =>
    //   item.id === action.payload.id
    //     ? { ...item, section: action.payload.section }
    //     : item
    // );

    default:
      break;
  }

  return state;
};
