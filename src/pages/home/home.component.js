import React from "react";
import { Outlet } from "react-router";

function Home() {
  return (
    <Outlet>
      <h1>Hello world</h1>;
    </Outlet>
  );
}

export default Home;
