import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function GalleryCard({ item, ...props }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={props.onClick}>
      <>
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
          <Button size='large' color='primary'>
            Update
          </Button>
          <Button size='large' color='secondary'>
            Delete
          </Button>
        </CardActions>
      </>
    </Card>
  );
}
