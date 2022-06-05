import { Link } from "@tanstack/react-location";
import * as React from "react";
import BodyCopy from "../components/BodyCopy";
import Button from "../components/Button";
import Heading from "../components/Heading";
import List from "../components/List";
import { routes } from "../config/routeConfig";
import { routeToArr } from "../hooks/useQuizRoutes";
import { useQuizTimer } from "../hooks/useQuizTimer";

interface IHome {}

const Home = ({}: IHome) => {
  const { start } = useQuizTimer();

  React.useEffect(() => {
    // const rA = routeToArr;

    console.log(routes);
    const rA = routes.map((route, i) => {
      console.log(route);
    });
  }, []);
  return (
    <>
      <div className="text-center max-w-2xl mx-auto">
        <Heading text="Welcome and thank you for your purchase." type="h1" />
        <Heading
          text="Instructions how to use this card and start your journey towards to your gift."
          type="h1"
          margin="mb-4 lg:mb-8"
        />
        <List
          text={[
            "Examine all sides of the card as the card includes clues",
            "Answer questions that will appear on the screen",
            "Your answers could be numbers, letters or symbols",
            "If you are stuck, you can use hints. Although there is a 1 minute penalty for each hint and 3 minutes penalty for each solution revealed.",
            "Your solving will be timed so you can access to the leader board.",
          ]}
        />
        <Link to={"/q1"}>
          <Button label={`start`} onClick={start} />
        </Link>
      </div>
    </>
  );
};

export default Home;
