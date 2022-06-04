import { Link } from "@tanstack/react-location";
import * as React from "react";
import Heading from "../components/Heading";

interface IHome {}

const Home = ({}: IHome) => {
  return (
    <>
      <Heading text="Welcome" type="h1" />
      <Link to={"/q1"}>
        <button>Start</button>
      </Link>
    </>
  );
};

export default Home;
