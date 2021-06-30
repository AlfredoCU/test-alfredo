import { types } from "../types/types";

// payload -> object (data).
export const emailAdd = payload => ({ type: types.add, payload });

// payload -> object (data).
export const emailFilter = payload => ({ type: types.filter, payload });

// payload -> string (value).
export const emailSearch = payload => ({ type: types.search, payload });

// payload -> object (id).
export const emailReaded = payload => ({ type: types.readed, payload });

// payload -> object (id).
export const emailUnreaded = payload => ({ type: types.unreaded, payload });

// payload -> object (data).
export const emailSection = payload => ({ type: types.section, payload });

// payload -> number (id).
export const emailDetail = payload => ({ type: types.detail, payload });

// payload -> bool (show).
export const emailShow = payload => ({ type: types.showMenu, payload });
