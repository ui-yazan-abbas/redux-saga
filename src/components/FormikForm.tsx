import { FC, useCallback } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled"

interface FormProps {
  email: string;
  password: string;
}

const StyledFlex = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormikForm: FC = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email(),
    password: Yup.string().required("fuck you"),
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
      <StyledFlex>
      <Form>
        <label htmlFor="email"> Email:</label>
        <Field name="email" />
        <ErrorMessage name="email" />

        <label htmlFor="password"> Password:</label>
        <Field name="password" />
        <ErrorMessage name="password" />
        <ErrorMessage name="password" />
        <button type="submit">Submit</button>
      </Form>
      </StyledFlex>
    </Formik>
  );
};

export default FormikForm;
