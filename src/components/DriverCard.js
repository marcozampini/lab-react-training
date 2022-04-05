import Rating from './Rating';
const DriverCard = (props) => {
  return (
    <div className="driver-card">
      <picture>
        <img className="driver-picture" src={props.img} alt={props.name} />
      </picture>
      <div className="driver-info">
        <div>{props.name}</div>
        <Rating>{props.rating}</Rating>
        <div>
          {props.car.model} - {props.car.licensePlate}
        </div>
      </div>
    </div>
    // img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
    // }}
  );
};
export default DriverCard;
