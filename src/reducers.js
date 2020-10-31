import { CHANGE_SEARCH_FIELD, SEARCH_MONSTERS } from "./constants/constants";

const initialState = {
  searchField: "",
  monsters: []
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    case SEARCH_MONSTERS:
      return { ...state, monsters: action.payload };
    default:
      return state;
  }
};
