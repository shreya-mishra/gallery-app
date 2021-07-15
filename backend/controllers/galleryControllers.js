const Gallery = require("../models/galleryModel");
const asyncHandler = require("express-async-handler");
const { findById } = require("../models/galleryModel");

const getGalleryImage = asyncHandler(async (req, res) => {
  const galleryImage = await Gallery.find({ user: req.user._id });
  res.json(galleryImage);
});
const createGalleryImage = asyncHandler(async (req, res) => {
  const { title, description, img } = req.body;
  if (!title || !description || !img) {
    res.status(400);
    throw new Error("Please fill all the fields");
  } else {
    const gallery = await Gallery.create({
      user: req.user._id,
      title,
      description,
      img,
    });
    const createdGallery = await gallery.save();
    res.status(201).json(createdGallery);
  }
});

const getGalleryImageById = asyncHandler(async (req, res) => {
  const galleryImage = await Gallery.findById(req.params.id);
  if (galleryImage) {
    res.json(galleryImage);
  } else {
    res.status(404).json({ message: "Gallery Image not found" });
  }
  //   res.json(galleryImage);
});
const updateGalleryImage = asyncHandler(async (req, res) => {
  console.log("server got hit");
  const { title, description, img } = req.body;
  const galleryImage = await Gallery.findById(req.params.id);
  if (galleryImage.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You cant perform this action");
  }
  if (galleryImage) {
    galleryImage.title = title;
    galleryImage.description = description;
    galleryImage.img = img;

    const updatedGalleryImage = await galleryImage.save();
    res.json(updatedGalleryImage);
  } else {
    res.status(404);
    throw new Error("Gallery Image not found");
  }
});
const deleteGalleryImageById = asyncHandler(async (req, res) => {
  const galleryImage = await Gallery.findById(req.params.id);
  if (galleryImage.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You cant perform this action");
  }
  if (galleryImage) {
    await galleryImage.remove();
    res.json({ message: "Gallery Image Removed" });
  } else {
    res.status(404);
    throw new Error("Gallery Image not found");
  }
});

module.exports = {
  createGalleryImage,
  getGalleryImage,
  getGalleryImageById,
  updateGalleryImage,
  deleteGalleryImageById,
};
