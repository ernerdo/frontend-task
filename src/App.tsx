import "./App.css";
import { AppRouter } from "./router";
import { DefaultLayout } from "./layout";

function App() {
  return (
    <AppRouter>
      <DefaultLayout />
    </AppRouter>
  );
}

export default App;
