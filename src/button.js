import { useDispatch } from "react-redux";
import { ColorChange } from "./store/action";

export default function BUTTON() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const color = e.target.name;
    dispatch(ColorChange(color));
  };
  return (
    <div>
      <button className="btn" onClick={handleClick} name="red">
        Red
      </button>
      <button className="btn" onClick={handleClick} name="blue">
        Blue
      </button>
      <button className="btn" onClick={handleClick} name="green">
        Green
      </button>
      <hr />
    </div>
  );
}
