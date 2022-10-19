const INITIALSTATE = {
  globalcolor: "white"
};

const colorReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case "red":
      return {
        globalcolor: "RED"
      };
    case "blue":
      return {
        globalcolor: "BLUE"
      };
    case "green":
      return {
        globalcolor: "GREEN"
      };
    default:
      return {
        ...state
      };
  }
};

export default colorReducer;
