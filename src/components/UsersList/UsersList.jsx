import { User } from "../User/User";

export const UsersList = ({ users, onDelete }) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <User user={user} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};
