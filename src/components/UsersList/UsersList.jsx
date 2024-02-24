import { User } from "../User/User";

export const UsersList = ({ users, onDelete, onChange }) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <User user={user} onDelete={onDelete} onChange={onChange} />
          </li>
        );
      })}
    </ul>
  );
};
