import { UserBoxProps } from "types/";
import { FC } from "react";
import styled from "@emotion/styled";

const StyledFlex = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
  border-radius: 3px;
  flex-direction: column;
  margin-top: 20px;
`;

const UserBox: FC<UserBoxProps> = ({ name, phone, email }) => {

  return (
    <StyledFlex>
      <h2>{name}</h2>
      <p>{phone}</p>
      <p>{email}</p>
    </StyledFlex>
  );
};

export default UserBox;
