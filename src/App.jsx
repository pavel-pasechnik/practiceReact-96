import { data } from "./data/users.js";
import { Section } from "./components/Section/Section.jsx";
import { User } from "./components/User/User.jsx";
import { UsersList } from "./components/UsersList/UsersList";
import "./App.css";

export default function App() {
  return (
    <>
      <Section>
        <User user={data[0]} />
      </Section>
      <Section title="List of users">
        <UsersList users={data} />
      </Section>
    </>
  );
}
