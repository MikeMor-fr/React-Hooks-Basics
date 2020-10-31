import { CHANGE_SEARCH_FIELD, SEARCH_MONSTERS } from "./constants/constants";

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
};

export const setMonsters = (data) => {
  return {
    type: SEARCH_MONSTERS,
    payload: data
  };
};
