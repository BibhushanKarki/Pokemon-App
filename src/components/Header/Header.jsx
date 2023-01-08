import { Grid } from "@mui/material";
import React from "react";
import Logo from "../Logo";
import Search from "../Search";

export const Header = () => (
  <Grid container direction="column" justifyContent="center"
  alignItems="center" rowSpacing={4} style={{maxWidth:"1024px",margin:"0 auto 1rem auto"}}>
    <Logo />
    <Search />
  </Grid>
);
