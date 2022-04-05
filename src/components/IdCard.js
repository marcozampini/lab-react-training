const IdCard = (props) => {
  return (
    <div className="card">
      <picture>
        <img src={props.picture} alt={props.firstName + props.lastName} />
      </picture>
      <div className="card-info">
        <div>First name: {props.firstName}</div>
        <div>Last name: {props.lastName}</div>
        <div>Gender: {props.gender}</div>
        <div>Height: {props.height}</div>
        <div>Birth: {props.birth.toDateString()}</div>
      </div>
    </div>
  );
};
export default IdCard;
