import axios from "axios";
import React, { useState } from "react";
import "../App.css";
import ErrorMessage from "./errorMessage";
import Loading from "./loading";
import { connect } from "react-redux";
import { toggleUserUpdate } from "../redux/User/user.actions";

const AddImageForm = ({
  refreshData,
  user,
  _title,
  _id,
  _description,
  img,
  buttonType,
  toggleUserUpdate,
  openForm,
  setOpenForm,
}) => {
  const [isUpdate] = useState(buttonType === "update");

  const [title, setTitle] = useState(isUpdate ? _title : "");
  const [description, setDescription] = useState(isUpdate ? _description : "");
  const [galleryImage, setGalleryImage] = useState(isUpdate ? img : "");
  const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [updateData, setUpdateData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "/api/gallery/create",
        { title, description, img: galleryImage },
        config
      );
      console.log(data);
      setLoading(false);
      setOpenForm(false);
      refreshData();
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const postDetails = (pics) => {
    console.log(pics);
    if (!pics) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "gallery-app");
      data.append("cloud_name", "dfi2yf43v");
      fetch("https://api.cloudinary.com/v1_1/dfi2yf43v/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setGalleryImage(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  const updateHandler = (e) => {
    console.log("user & id of the post", user, _id);
    e.preventDefault();
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      console.log("DATAAAA", img, _title, _description);
      axios
        .put(
          `/api/gallery/${_id}`,
          { img: galleryImage, title: title, description: description },
          config
        )
        .then((res) => {
          console.log(res.data);
          setUpdateData(res.data);

          setLoading(false);
          toggleUserUpdate();
          refreshData();
        });

      console.log("data is here", "data");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <div className='formCenter' style={{ textAlign: "center" }}>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {loading && <Loading />}
      <div
        style={{
          textAlign: "center",
          fontFamily: "Otomanopee One",
        }}>
        {isUpdate ? "Update Image" : "Gallery Image"}
      </div>
      <form className='formFields'>
        <div style={{ height: 20 }} />

        <div className='formField'>
          <label className='formFieldLabel1' htmlFor='title'>
            Title
          </label>
          <input
            type='text'
            id='title'
            className='formFieldInput1'
            placeholder='Enter your title'
            name='title'
            onChange={(e) => {
              console.log(e.target.value);
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>
        <div style={{ height: 20 }} />
        <div className='formField'>
          <label className='formFieldLabel1' htmlFor='description'>
            caption
          </label>
          <input
            type='description'
            id='description'
            className='formFieldInput1'
            placeholder='Enter your description'
            name='description'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        {picMessage && <ErrorMessage>{picMessage}</ErrorMessage>}
        <div style={{ height: 20 }} />

        <div className='formField'>
          <label className='formFieldLabel1' htmlFor='galleryImage'>
            Image
          </label>
          <input
            type='file'
            id='galleryImage'
            accept='image/*'
            className='formFieldInput1'
            placeholder='Choose your Gallery Image'
            name='galleryImage'
            onChange={(e) => {
              postDetails(e.target.files[0]);
              console.log("your gallery image", e.target.files[0]);
            }}
          />
        </div>

        <div style={{ height: 20 }} />

        <div className='formField'>
          {isUpdate ? (
            <button className='formFieldButton' onClick={updateHandler}>
              Update
            </button>
          ) : (
            <button className='formFieldButton' onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleUserUpdate: () => dispatch(toggleUserUpdate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddImageForm);
