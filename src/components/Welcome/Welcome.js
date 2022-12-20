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
    //     <Box
    //       sx={{
    //         width: 300,
    //         height: 300,
    //         backgroundColor: "primary.dark",
    //         "&:hover": {
    //           backgroundColor: "primary.main",
    //           opacity: [0.9, 0.8, 0.7],

    //         },
    //       }}
    //     >
    //  <h1>Thanks for Order!</h1>
    //     </Box>

    // <Card sx={{ maxWidth: 345 }}>
    //   <CardActionArea>
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         Lizard
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000
    //         species, ranging across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
  );
}
export default Welcome;