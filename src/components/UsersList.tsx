import { selectHasUsers, selectUsers } from "@store/selectors";
import { User, Users } from "types/";
import { FC } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import UserBox from "./UserBox";

const UsersList: FC = () => {
  const users: any = useSelector<Users>(selectUsers);
  const hasUsers = useSelector(selectHasUsers);

  return (
    <div>
      {hasUsers &&
        users?.map((user: User) => (
          <UserBox
            key={uuidv4()}
            name={user.name}
            phone={user.phone}
            email={user.email}
          />
        ))}
    </div>
  );
};

export default UsersList;
