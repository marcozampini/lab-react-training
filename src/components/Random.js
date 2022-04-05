const Random = (props) => {
  const randomValue =
    Math.floor(Math.random() * (props.max - props.min)) + props.min;
  return (
    <p className="random">
      Random value between {props.min} and {props.max} => {randomValue}
    </p>
  );
};
export default Random;
