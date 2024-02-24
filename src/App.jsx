import { data } from "./data/users.js";
import { Section } from "./components/Section/Section.jsx";
import { UsersList } from "./components/UsersList/UsersList";
import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = window.localStorage.getItem("savedUsers");

    if (savedUsers !== null) {
      return JSON.parse(savedUsers);
    }

    return data;
  });

  useEffect(() => {
    window.localStorage.setItem("savedUsers", JSON.stringify(users));
  }, [users]);

  const handleDelete = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== id);
    });
  };
  return (
    <>
      <Section title="List of users">
        <UsersList users={users} onDelete={handleDelete} />
      </Section>
    </>
  );
}
