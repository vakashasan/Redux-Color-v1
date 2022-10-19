import { useSelector } from "react-redux";
import BUTTON from "./button";
import "./styles.css";

export default function App() {
  const selector = useSelector((state) => state.globalcolor);
  return (
    <div className="App">
      <BUTTON />
      <div className={selector}>
        <h1> {selector} </h1>
        <h2> Click on Button To Change Color</h2>
      </div>
    </div>
  );
}
