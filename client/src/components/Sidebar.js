import React, { useState, useContext } from "react";
import { Button, TextField, Grid, Typography, Paper } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";
import makeStyles from "@mui/styles/makeStyles";
import { SocketContext } from "../Context";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },

  margin: {
    marginTop: 20,
    backgroundColor: "#d64785",
  },
  padding: {
    padding: 20,
  },
  paper: {
    margin: "35px 0",
    padding: "10px 20px",
    border: "1px solid black",
    borderRadius: "10px",
  },
});

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  const classes = useStyles();

  return (
    <Paper elevation={1} className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container>
          <Grid item xs={12} md={12} className={classes.padding}>
            <Typography
              gutterBottom
              variant="body2"
              sx={{ fontWeight: "bold" }}
            >
              Your Name
            </Typography>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputLabelProps={{ style: { color: 'black' } }}
              sx={{
                color:"black",
                "& .MuiInputBase-root": {
                  color: "black",
                
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
              fullWidth
            />
            <CopyToClipboard text={me} className={classes.margin}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#d64785" }}
                fullWidth
                startIcon={<Assignment fontSize="large" />}
              >
                Copy Meeting ID
              </Button>
            </CopyToClipboard>
          </Grid>
          <Grid item xs={12} md={12} className={classes.padding}>
            <Typography
              gutterBottom
              variant="body2"
              sx={{ fontWeight: "bold" }}
            >
              Joined call
            </Typography>
            <TextField
              label="ID to call"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
              fullWidth
              InputLabelProps={{ style: { color: 'black' } }}
              sx={{
                color:"black",
                "& .MuiInputBase-root": {
                  color: "black",
                
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
            />
            {callAccepted && !callEnded ? (
              <Button
                variant="contained"
                style={{ backgroundColor: "#d64785" }}
                startIcon={<PhoneDisabled fontSize="large" />}
                fullWidth
                onClick={leaveCall}
                className={classes.margin}
              >
                Hang Up
              </Button>
            ) : (
              <Button
                variant="contained"
                style={{ backgroundColor: "#d64785" }}
                startIcon={<Phone fontSize="large" />}
                fullWidth
                onClick={() => callUser(idToCall)}
                className={classes.margin}
              >
                Call
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
      {children}
    </Paper>
  );
};

export default Sidebar;
