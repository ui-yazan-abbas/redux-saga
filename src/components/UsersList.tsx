import { selectHasUsers, selectUsers } from "../store/selectors";
import { User, Users } from "../types";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { getUsers } from "../store/action";
import { v4 as uuidv4 } from "uuid";
import UserBox from "./UserBox";
import styled from "@emotion/styled";

const StyledButton = styled("button")`
  margin-top: 20px;
  background: transparent;
  color: green;
  border: 1px solid green;
  border-radius: 2px;
  height: 30px;
  :hover {
    background: green;
    color: white;
    cursor: pointer;
  }
`;

const UsersList: FC = () => {
  const users: any = useSelector<Users>(selectUsers);
  const hasUsers = useSelector(selectHasUsers);
  const dispatch = useDispatch();

  const handleGetUsers = useCallback(() => {
    dispatch(getUsers());
  }, [users, dispatch]);

  return (
    <div>
      {!hasUsers && (
        <StyledButton onClick={handleGetUsers}> Get Users </StyledButton>
      )}

      {users?.map((user: User) => (
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
