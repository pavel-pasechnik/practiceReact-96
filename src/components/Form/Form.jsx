// export default function Form({ onSubmit }) {
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, email, street, city } = e.target.elements;

//     const newUser = {
//       name: name.value,
//       email: email.value,
//       address: {
//         street: street.value,
//         city: city.value,
//       },
//     };

//     onSubmit(newUser);

//     e.target.reset();
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">
//         Name
//         <input type="text" name="name" />
//         <br />
//       </label>
//       <label htmlFor="email">
//         Email
//         <input type="text" name="email" />
//       </label>
//       <br />
//       <label htmlFor="street">
//         Street
//         <input type="text" name="street" />
//       </label>
//       <br />
//       <label htmlFor="city">
//         City
//         <input type="text" name="city" />
//       </label>
//       <br />
//       <button type="submit">Send</button>
//     </form>
//   );
// }
import { useState } from "react";

export default function Form({ onSubmit }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  const handleChange = ({ target: { value, name} }) => {
    if (name === "name") {
      setName(value); 
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "city") {
      setCity(value);
    } else if (name === "street") {
      setStreet(value);
    } 


  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      address: {
        street,
        city
      },
    };

    onSubmit(newUser);

    setName("");
    setEmail("");
    setCity("");
    setStreet("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} />
        <br />
      </label>
      <label>
        Email
        <input type="text" name="email" value={email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Street
        <input type="text" name="street" value={street} onChange={handleChange} />
      </label>
      <br />
      <label>
        City
        <input type="text" name="city" value={city} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
  );
}
