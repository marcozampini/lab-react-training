const BoxColor = (props) => {
  return (
    <div
      className="coloredBox"
      style={{
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
      }}
    >
      <div>
        rgb({props.r}, {props.g}, {props.b})
      </div>
      <div>
        #{props.r.toString(16).padStart(2, '0')}
        {props.g.toString(16).padStart(2, '0')}
        {props.b.toString(16).padStart(2, '0')}
      </div>
    </div>
  );
};
export default BoxColor;
