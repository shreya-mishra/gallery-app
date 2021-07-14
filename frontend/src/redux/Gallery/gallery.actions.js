import { galleryActionTypes } from "../Gallery/gallery.types";

export const gallery = (user) => {
  return {
    type: galleryActionTypes.GALLERY,
    payload: user,
  };
};
