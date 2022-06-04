import { Link } from "@tanstack/react-location";
import * as React from "react";
import Heading from "../components/Heading";
import { useQuizTimer } from "../hooks/useQuizTimer";

interface IHome {}

const Home = ({}: IHome) => {
  const { start } = useQuizTimer();
  return (
    <>
      <Heading text="Welcome" type="h1" />
      <Link to={"/q1"}>
        <button onClick={start}>Start</button>
      </Link>
    </>
  );
};

export default Home;
