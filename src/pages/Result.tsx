import Lottie from "lottie-react";
import * as React from "react";
import Heading from "../components/Heading";
import useQuizRoutes from "../hooks/useQuizRoutes";
import { useQuizStates } from "../hooks/useQuizStates";
import { useQuizTimer } from "../hooks/useQuizTimer";
import confettiAnimation from "../lottie/confetti.json";
import trophyAnimation from "../lottie/trophy.json";
import { supabase } from "../supabaseClient";

interface IResultPage {}
interface IData {
  id: number;
  name: string;
  timer: string;
}
const ResultPage = ({}: IResultPage) => {
  const { start, pause, seconds, minutes, hours } = useQuizTimer();
  const [data, setData] = React.useState<IData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const { state } = useQuizStates();
  const { gotoHome } = useQuizRoutes();
  const finalTimeToString = [
    hours?.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }),
    minutes?.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }),
    seconds?.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }),
  ].join(":");

  React.useEffect(() => {
    if (!loading) {
      setLoading(false);
    } else {
      if (!state?.start) {
        gotoHome();
      } else {
        const setData = async () => {
          const { data, error } = await supabase
            .from("leaderboard")
            .insert([{ name: "anon test", timer: finalTimeToString }]);
          return data;
        };
        setData().then((resp) => {
          console.log(resp);
        });
      }
      const getData = async () => {
        let { data: leaderboard, error } = await supabase
          .from("leaderboard")
          .select("*");
        return leaderboard;
      };
      getData().then((resp) => {
        resp
          ? setData(
              resp?.map((r, i) => {
                return {
                  name: r.name,
                  timer: r.timer,
                  id: r.id,
                };
              })
            )
          : null;
      });
      pause!();
    }
  }, [loading]);

  return (
    <>
      <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-12">
        <div className="relative">
          <Lottie
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
            loop={true}
            animationData={confettiAnimation}
          />
          <div className="relative">
            <div className="flex flex-wrap p-2 lg:p-6  mx-auto w-fit bg-stone-500/30 rounded-lg backdrop-blur-sm">
              <div className="w-full">
                <Heading
                  text="Well Done!"
                  className="text-2xl leading-tight mb-1 lg:mb-2"
                  type="h1"
                />
              </div>
              <div className="w-full">
                <Heading text="Your time is;" type="h2" margin="mb-3 lg:mb-5" />
              </div>
              <div className="w-full text-4xl font-heading">
                {finalTimeToString}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="">
            <Lottie
              className={`w-[100px] h-[100px]`}
              loop={true}
              animationData={trophyAnimation}
            />
          </div>
          <div className="">
            <Heading
              text="leaderboard"
              className="text-2xl leading-tight mb-0"
              type="h1"
            />
          </div>
        </div>
        <div className="">
          {data ? (
            <ul className="text-xl text-center space-y-2 lg:space-y-3">
              {data
                .sort((a, b) => a.timer.localeCompare(b.timer))
                .map(({ id, timer }) => {
                  return (
                    <li className="" key={id}>
                      {timer}
                    </li>
                  );
                })}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ResultPage;
