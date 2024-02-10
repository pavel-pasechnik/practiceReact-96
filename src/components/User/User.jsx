/* eslint-disable react/prop-types */
// import css from "./User.module.css";
import { Address } from "../Address/Address";

export const User = ({
  user: {
    name,
    email,
    address: { street, city },
  },
}) => {
  return (
    <>
      <p> Name : {name}</p>
      <p> Email: {email}</p>
      <Address street={street} city={city} />
    </>
  );
};
