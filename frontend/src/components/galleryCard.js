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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    objectFit: "contain",
  },
});

export default function GalleryCard({ item, ...props }) {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const updateFunction = (e) => {
    console.log("called");
    e.stopPropagation();
    setModal(true);
    setOpenForm(true);
  };
  const handleClose = () => {
    setOpenForm(false);
  };
  return (
    <Card className={classes.root} onClick={props.onClick}>
      <ModalComponent open={openForm} handleClose={handleClose}>
        <div
          style={{
            textAlign: "center",
            fontFamily: "Otomanopee One",
          }}>
          Gallery Image
        </div>
        <AddImageForm
          _id={item._id}
          _title={item.title}
          _description={item.description}
          img={item.img}
          buttonType={"update"}
        />
      </ModalComponent>
      <>
        {console.log(item._id)}
        <CardActionArea key={item._id}>
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
          <Button size='large' color='secondary' onClick={() => {}}>
            Delete
          </Button>
        </CardActions>
      </>
    </Card>
  );
}
