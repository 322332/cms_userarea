import { produce } from "immer";

var initialState = [];

export function pageLayout(state = initialState, action) {
  switch (action.type) {
    case "GET_LAYOUT":
      return produce(state, (draftstate) => {
        draftstate.splice(0, draftstate.length);
        action.payload.map((item, id) => {
          draftstate.push(item);
        });
      });

    default:
      return state;
  }
}
