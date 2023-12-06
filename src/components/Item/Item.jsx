import { Link } from "react-router-dom";

export const Item = ({ info }) => {
  return (
    <>
      <Link to={`/item/${info.id}`}>
        <img src={info.img} alt="" />
      </Link>
      <p> {info.title} </p>
      <p> {info.price} </p>
    </>
  );
};
