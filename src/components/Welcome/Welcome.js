import { Box } from '@mui/material';
import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import classes from './Welcome.module.css'
 const Welcome = () => {
  return (
    <div className={classes.primary}>
      <div className={classes.header}>
        <h1>Thanks for order!</h1>
      </div>
    </div>
    
  );
}
export default Welcome;