import FormikForm from "./components/FormikForm";
import { FC } from "react";
import styled from "@emotion/styled";
import UsersList from "./components/UsersList";

const StyledFlex = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const App: FC = () => {
  return (
    <StyledFlex>
      <FormikForm />
      <UsersList />
    </StyledFlex>
  );
};

export default App
