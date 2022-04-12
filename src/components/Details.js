import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { category } = location.state;
  return (
    <div>
      <h2>{category.country}</h2>
      <h3>{category.confirmed}</h3>
    </div>
  );
};

export default Details;
