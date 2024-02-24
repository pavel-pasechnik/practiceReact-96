import { data } from "./data/users.js";
import { Section } from "./components/Section/Section.jsx";
import { UsersList } from "./components/UsersList/UsersList";
import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form.jsx";
import { nanoid } from "nanoid";

export default function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = window.localStorage.getItem("savedUsers");

    if (savedUsers !== null) {
      return JSON.parse(savedUsers);
    }

    return data;
  });

  const handleNewUser = (user) => {
    if (users.some((currentUser) => currentUser.email === user.email)) {
      alert("User with such email already in list!");
      return;
    }

    user.id = nanoid();
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const handelChangeStatus = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.id === id) {
          const status = user.isOnline === "yes" ? "no" : "yes";
          return { ...user, isOnline: status };
        }
        return user;
      });
    });
  };

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
      <Form onSubmit={handleNewUser} />
      <Section title="List of users">
        <UsersList
          users={users}
          onDelete={handleDelete}
          onChange={handelChangeStatus}
        />
      </Section>
    </>
  );
}
