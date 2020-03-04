import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function SearchAppBar() {
  return (
    <AppBar position="relative" style={{ backgroundColor: '#333333', padding: '30px' }}>
      <Toolbar style={{ display: 'contents' }}>
        {/* <CameraIcon className={classes.icon} /> */}
        <div style={{ width: '100%' }}>
          <Typography variant="h3" color="inherit" noWrap>
            HN Feed
          </Typography>
        </div>
        <div style={{ width: '100%' }}>
          <Typography variant="h6" color="inherit" noWrap>
            {"We <3 hacker news!"}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}