import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import { routes } from "./config/routeConfig";
import { ModalProvider } from "./hooks/useModal";
import { QuizStatesProvider } from "./hooks/useQuizStates";
import { QuizTimerProvider } from "./hooks/useQuizTimer";

const location = new ReactLocation();
function App() {
  return (
    <Router routes={routes} location={location}>
      <QuizStatesProvider>
        <QuizTimerProvider>
          <ModalProvider>
            <main className="app min-h-[400px] w-full mx-auto max-w-4xl">
              <Outlet />
            </main>
          </ModalProvider>
        </QuizTimerProvider>
      </QuizStatesProvider>
    </Router>
  );
}

export default App;
