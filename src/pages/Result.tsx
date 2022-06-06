import Lottie from "lottie-react";
import * as React from "react";
import Button from "../components/Button";
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
  isUser: boolean;
}
function getNumberWithOrdinal(n: number) {
  var s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

[-4, -1, 0, 1, 2, 3, 4, 10, 11, 12, 13, 14, 20, 21, 22, 100, 101, 111].forEach(
  (n) => console.log(n + " -> " + getNumberWithOrdinal(n))
);
const ResultPage = ({}: IResultPage) => {
  const { start, pause, seconds, minutes, hours } = useQuizTimer();
  const [data, setData] = React.useState<IData[]>([]);
  const [formState, setFormState] = React.useState({
    submit: false,
    isSubmitting: false,
  });
  const [name, setName] = React.useState("");
  const [submit, setSubmit] = React.useState(false);

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
  // console.log("fts", finalTimeToString);
  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const handleOnClickSubmit = () => {
    console.log("submit");
    // setSubmit(true);
    if (name.trim().length > 0) {
      setFormState((p) => ({ ...p, isSubmitting: true }));
    }
  };
  React.useEffect(() => {
    if (!formState.submit) {
      if (formState.isSubmitting) {
        const postData = async () => {
          const { data, error } = await supabase.from("leaderboard").insert([
            {
              name,
              timer:
                finalTimeToString !== "00:00:00"
                  ? finalTimeToString
                  : "66:66:66",
            },
          ]);
          return data;
        };
        postData().then((resp) => {
          console.log("finished submitting", resp);
          if (resp) {
            const { id, name, timer } = resp[0] as unknown as IData;
            setData((p) => [...p, { id, name, timer, isUser: true }]);
            setFormState({ submit: true, isSubmitting: false });
          } else {
            throw new Error("something wrong with the server");
          }
        });
      }
    }
  }, [formState]);
  // console.log("main", formState);
  React.useEffect(() => {
    if (!loading) {
      setLoading(false);
    } else {
      if (!state?.start) {
        // gotoHome();
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
              resp.map(({ id, timer, name }) => {
                return {
                  id,
                  timer,
                  name,
                  isUser: false,
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
            className={`absolute left-1/2 top-0 -translate-x-1/2  w-full h-full opacity-70`}
            loop={true}
            animationData={confettiAnimation}
          />
          <div className="relative">
            <div className=" p-2 lg:p-6  mx-auto w-[450px] max-w-full bg-stone-500/30 rounded-lg backdrop-blur-sm">
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
              <div className="w-full text-4xl font-heading mb-5 lg:mb-7">
                {finalTimeToString}
              </div>
              <div className="">
                {/* {submit ? "true" : "false"} */}

                {formState.submit ? (
                  <div className="">
                    <Heading
                      text="Your name has been submitted to leaderboard!"
                      type="h3"
                      margin="mb-3 lg:mb-5"
                    />
                  </div>
                ) : formState.isSubmitting === true ? (
                  <div className="">
                    <Heading
                      text="submitting!"
                      type="h3"
                      margin="mb-3 lg:mb-5"
                    />
                  </div>
                ) : (
                  <>
                    <Heading
                      text="Enter your name;"
                      type="h2"
                      margin="mb-3 lg:mb-5"
                    />
                    <div className="flex max-w-sm mx-auto flex-wrap items-center">
                      <div className="px-3 md:flex-1 pb-2">
                        <input
                          onChange={handleOnChangeInput}
                          type="text"
                          name=""
                          maxLength={12}
                          className="rounded w-full h-[32px] px-3 font-mono text-lg text-amber-600"
                          id=""
                        />
                      </div>
                      <div className="px-3">
                        <Button
                          onClick={() => handleOnClickSubmit()}
                          disabled={formState.isSubmitting}
                          label="submit"
                          type="submit"
                          size="sm"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="relative max-w-xl mx-auto">
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
            <div className="max-w-[350px] mx-auto">
              {data ? (
                <ul className="text-xl text-center space-y-2 lg:space-y-3">
                  {data
                    .sort((a, b) => a.timer.localeCompare(b.timer))
                    .map(({ id, timer, name, isUser }) => {
                      return (
                        <li
                          className={`space-x-2 py-1 px-2 md:py-2 md:px-4 rounded-md leading-tight  flex justify-between ${
                            isUser ? "bg-green-600/50" : ""
                          }`}
                          key={id}
                        >
                          <span className="block">{name}</span>
                          <span className="block">{timer}</span>
                        </li>
                      );
                    })}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
