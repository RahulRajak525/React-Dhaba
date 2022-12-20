import React from "react";
import { Grid } from "@mui/material";
import { MuiCard } from "../Card/MuiCard";
export const MealsList = () => {
  return (
    <Grid
      container
      flexDirection="row"
      my={8}
      rowSpacing={3}
      columnSpacing={2}
      justifyContent="space-evenly"
      spacing={2}
    >
      <MuiCard />
    </Grid>
  );
};
