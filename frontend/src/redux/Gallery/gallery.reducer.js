import { galleryActionTypes } from "../Gallery/gallery.types";

const INITIAL_STATE = {
  user: {},
};

const galleryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case galleryActionTypes.GALLERY:
      return {
        user: action.payload,
      };

    default:
      return state;
  }
};

export default galleryReducer;
