import { FC, useCallback } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import { FormProps } from "../types";

const StyledFlex = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

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

const StyledLabel = styled("label")`
  display: inline-block;
  width: 80px;
  margin-right: 10px;
`;

const StyledField = styled(Field)`
  width: 700px;
`;

const SettingGridContent = styled("div")`
  width: 50%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

const StyledError = styled(ErrorMessage)`
  color: red;
  font-size: smaller;
`;

const FormikForm: FC = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required("Required Field"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });

  const handleSubmit = useCallback((values: FormProps) => {
    console.log(values);
  }, []);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <StyledFlex>
          <SettingGridContent>
            <StyledLabel htmlFor="email"> Email: </StyledLabel>
            <StyledField name="email" />
            <StyledError name="email" component="div" />
          </SettingGridContent>
          <SettingGridContent>
            <StyledLabel htmlFor="password"> Password: </StyledLabel>
            <StyledField name="password" />
            <StyledError name="password" component="div" />
          </SettingGridContent>
          <StyledButton type="submit">Submit</StyledButton>
        </StyledFlex>
      </Form>
    </Formik>
  );
};

export default FormikForm;
