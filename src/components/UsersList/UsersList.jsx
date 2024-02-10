import { User } from "../User/User";

export const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <User user={user} />
          </li>
        );
      })}
    </ul>
  );
};
