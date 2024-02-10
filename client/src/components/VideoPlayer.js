import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import  makeStyles from '@mui/styles/makeStyles';
import { SocketContext } from '../Context';

const useStyles = makeStyles({
    video: {
      width: '300px',
      borderRadius:"10px"
    },
    gridContainer: {
      justifyContent: 'center',
  
    },
    paper: {
      padding: '10px',
      border: '3px solid black',
      margin: '10px',
      borderRadius:"10px"
    },
  });

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
