import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../../App.css";
import AddImageForm from "../addImageForm";
import GalleryCard from "../galleryCard";
import ModalComponent from "../modal";
import Loading from "../loading";
import ErrorMessage from "../errorMessage";
import { toggleUserUpdate } from "../../redux/User/user.actions";

const Home = ({ user, toggleUserUpdate, isUserUpdate }) => {
  const [open, setOpen] = useState(false);
  const [currentObject, setCurrentObject] = useState({});
  const [openForm, setOpenForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState(false);
  const [_update] = useState(isUserUpdate);
  const [refreshKey, setRefreshKey] = useState("initialKey");
  useEffect(() => {
    setLoading(true);
    fetchData();
    if (isUserUpdate) {
      toggleUserUpdate();
    }
  }, [_update]);
  const fetchData = () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      setLoading(true);
      axios.get("/api/gallery", config).then((res) => {
        console.log(res.data);

        setGallery(res.data);
        setLoading(false);
        setRefreshKey(Math.random().toString());
      });

      console.log("data is here", "data");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
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
      {console.log("gallery inside return", gallery)}
      {loading && <Loading />}
      {error && <ErrorMessage />}
      <Button variant='contained' color='primary' onClick={handleOpenForm}>
        Add New Image
      </Button>
      <ModalComponent open={openForm} handleClose={handleClose}>
        <AddImageForm
          refreshData={fetchData}
          openForm={openForm}
          setOpenForm={setOpenForm}
        />
      </ModalComponent>
      <ModalComponent open={open} handleClose={handleClose}>
        <img
          style={{ maxHeight: "100%", width: "100%" }}
          src={currentObject.img}
          alt='image'
        />
      </ModalComponent>
      <div className='gallery__container'>
        <React.Fragment key={refreshKey} style={{ display: "none" }}>
          {gallery.map((item) => {
            return (
              <div key={item._id} className='gallery__card'>
                <GalleryCard
                  onClick={() => handleOpen(item)}
                  item={item}
                  refreshData={fetchData}
                />
              </div>
            );
          })}
        </React.Fragment>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    isUserUpdate: state.user.isUserUpdate,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleUserUpdate: () => dispatch(toggleUserUpdate()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
