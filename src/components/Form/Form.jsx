export default function Form({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, street, city } = e.target.elements;

    const newUser = {
      name: name.value,
      email: email.value,
      address: {
        street: street.value,
        city: city.value,
      },
    };

    onSubmit(newUser);

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input type="text" name="name" />
        <br />
      </label>
      <label htmlFor="email">
        Email
        <input type="text" name="email" />
      </label>
      <br />
      <label htmlFor="street">
        Street
        <input type="text" name="street" />
      </label>
      <br />
      <label htmlFor="city">
        City
        <input type="text" name="city" />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
  );
}
