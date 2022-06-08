import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import { routes } from "./config/routeConfig";
import { ModalProvider } from "./hooks/useModal";
import { QuizStatesProvider } from "./hooks/useQuizStates";
import { QuizTimerProvider } from "./hooks/useQuizTimer";

const challengelocation = new ReactLocation();
function App() {
  return (
    <Router routes={routes} basepath="/challenge" location={challengelocation}>
      <QuizStatesProvider>
        <QuizTimerProvider>
          <ModalProvider>
            <main className="app min-h-[400px] w-full mx-auto max-w-4xl px-8 py-12">
              <Outlet />
            </main>
          </ModalProvider>
        </QuizTimerProvider>
      </QuizStatesProvider>
    </Router>
  );
}

export default App;
