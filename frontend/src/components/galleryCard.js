import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { gallery } from "../redux/Gallery/gallery.actions";
import ModalComponent from "./modal";
import AddImageForm from "./addImageForm";
import axios from "axios";
import Loading from "./loading";
import ErrorMessage from "./errorMessage";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    objectFit: "contain",
  },
});

const GalleryCard = ({ user, refreshData, item, ...props }) => {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateFunction = (e) => {
    console.log("called");
    e.stopPropagation();
    setModal(true);
    setOpenForm(true);
  };
  const handleClose = () => {
    setOpenForm(false);
  };
  const deleteFunction = (id) => {
    console.log("id of the particular card", id);
    console.log("user", user);

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      setLoading(true);
      axios.delete(`/api/gallery/${id}`, config).then((res) => {
        console.log(res.data);

        // setGallery(res.data);
        setLoading(false);
        refreshData();
        // setRefreshKey(Math.random().toString());
      });

      console.log("data is here", "data");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <Card className={classes.root}>
      <ModalComponent open={openForm} handleClose={handleClose}>
        <div
          style={{
            textAlign: "center",
            fontFamily: "Otomanopee One",
          }}>
          Gallery Image
        </div>
        <AddImageForm
          refreshData={() => {
            refreshData();
            setModal(false);
          }}
          _id={item._id}
          _title={item.title}
          _description={item.description}
          img={item.img}
          buttonType={"update"}
        />
      </ModalComponent>
      <>
        {console.log(item._id)}
        {loading && <Loading />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <CardActionArea key={item._id} onClick={props.onClick}>
          <CardMedia
            className={classes.media}
            image={item.img}
            title={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {item.title}
            </Typography>

            <Typography variant='body2' color='textSecondary' component='p'>
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='large' color='primary' onClick={updateFunction}>
            Update
          </Button>
          <Button
            size='large'
            color='secondary'
            onClick={() => deleteFunction(item._id)}>
            Delete
          </Button>
        </CardActions>
      </>
    </Card>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    isUserUpdate: state.user.isUserUpdate,
  };
};

export default connect(mapStateToProps, null)(GalleryCard);
