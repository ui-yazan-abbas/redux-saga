import FormikForm from "@components/FormikForm";
import { FC } from "react";
import styled from "@emotion/styled";

const StyledFlex = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const App: FC = () => {
  return (
    <StyledFlex>
      <FormikForm />
    </StyledFlex>
  );
};

export default App
