import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";

export default function routes() {
  return (
    <>
      <Router />

      <NavBar />
    </>
  );
}
