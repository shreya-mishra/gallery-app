const express = require("express");
const {
  createGalleryImage,
  getGalleryImage,
  getGalleryImageById,
  updateGalleryImage,
  deleteGalleryImageById,
} = require("../controllers/galleryControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();
//GET get gallery
router.route("/").get(protect, getGalleryImage);
// POST create  gallery
router.route("/create").post(protect, createGalleryImage);
//GET, PUT,DELETE image in gallery with particular id
router
  .route("/:id")
  .get(getGalleryImageById)
  .put(protect, updateGalleryImage)
  .delete(protect, deleteGalleryImageById);
module.exports = router;
