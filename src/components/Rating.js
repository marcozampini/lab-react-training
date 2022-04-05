const Rating = ({ children }) => {
  children = children > 0 ? children : 0;
  const rating = Math.round(children) < 5 ? Math.round(children) : 5;
  const stars = '★'.repeat(rating).padEnd(5, '☆');

  return <div>{stars}</div>;
};

export default Rating;
