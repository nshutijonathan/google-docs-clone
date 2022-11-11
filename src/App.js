import "./App.css";
import Docs from "./components/Docs";
import { app, database } from "./firebase";
function App() {
  return <Docs database={database} />;
}

export default App;
