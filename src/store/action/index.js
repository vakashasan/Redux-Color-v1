const ColorChange = (color) => {
  return (dispatch) => {
    dispatch({
      type: color
    });
  };
};

export { ColorChange };
