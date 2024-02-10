import React from "react";
import { Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import VideoPlayer from "./components/VideoPlayer";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";

const useStyles = makeStyles({
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography variant="body2" align="center" sx={{ fontWeight: "bold" , mt:"20px", fontSize:"25px"}}>
        Let's Talk{" "}
      </Typography>

      <Sidebar>
        <Notifications />
      </Sidebar>
      <VideoPlayer />
    </div>
  );
};

export default App;
