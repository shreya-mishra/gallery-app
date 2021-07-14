import React from "react";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
const ErrorMessage = ({ severity = "error", children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity={severity}>
        <strong>{children}</strong>
      </Alert>
    </div>
  );
};

export default ErrorMessage;
