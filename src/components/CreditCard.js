const CreditCard = (props) => {
  return (
    <div
      className="credit-card"
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
      }}
    >
      <div className="type">{props.type}</div>
      <div className="number">
        •••• •••• •••• {props.number.slice(props.number.length - 4)}
      </div>
      <span className="expiration">
        Expires {props.expirationMonth.toString().padStart(2, '0')} /{' '}
        {props.expirationYear}
      </span>
      <span className="bank">{props.bank}</span>
      <div className="owner">{props.owner}</div>
    </div>
  );
};
export default CreditCard;
