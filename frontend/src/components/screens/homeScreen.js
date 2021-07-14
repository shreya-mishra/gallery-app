import { Button, Container } from "@material-ui/core";
import React, { useState } from "react";
import "../../App.css";
import AddImageForm from "../addImageForm";
import gallery from "../data/gallery";
import GalleryCard from "../galleryCard";
import ModalComponent from "../modal";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [currentObject, setCurrentObject] = useState({});
  const [openForm, setOpenForm] = useState(false);

  const handleOpen = (item) => {
    console.log(item);
    setOpen(true);
    setCurrentObject(item);
  };
  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleClose = () => {
    setOpenForm(false);
    setOpen(false);
  };
  return (
    <>
      <Button variant='contained' color='primary' onClick={handleOpenForm}>
        Add New Image
      </Button>
      <ModalComponent open={openForm} handleClose={handleClose}>
        <div
          style={{
            textAlign: "center",
            fontFamily: "Otomanopee One",
          }}>
          Gallery Image
        </div>
        <AddImageForm />
      </ModalComponent>
      <div className='gallery__container'>
        <ModalComponent open={open} handleClose={handleClose}>
          <img
            style={{ maxHeight: "100%", width: "100%" }}
            src={currentObject.img}
            alt='image'
          />
        </ModalComponent>
        {gallery.map((item) => {
          return (
            <div key={item._id} className='gallery__card'>
              <GalleryCard onClick={() => handleOpen(item)} item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
