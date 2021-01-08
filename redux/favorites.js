import * as ActionTypes from "./ActionTypes";

export const favorites = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_FAVORITE:
      // if favorite is already favorite is already saved, return state
      if (state.includes(action.payload)) {
        return state;
      }
      // if favorite is not saved, concat favorite to array
      return state.concat(action.payload);
    default:
      return state;
  }
};
