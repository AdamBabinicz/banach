import React, { useState } from "react";
import {
  FormColumn,
  Img,
  ImgWrapper,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormTitle,
  FormLabel,
  FormInputRow,
  FormMessage,
} from "./FormStyles";
import { Container, Button } from "../../globalStyles";
import { white } from "../../Colors";
import validateForm from "./validateForm";
import MainContent from "../Form/MainContent";
import { InnerLayout } from "../../Layouts";
// import bus from "/images/1.mp4";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({ name, email, password, confirmPass });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
    setError(null);
    setSuccess("Application was submitted!");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      color: white,
      boxShadow: "0px 0px 8px white",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  const formData = [
    {
      label: "Name",
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
    },
    {
      label: "Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
    },
    {
      label: "Password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: "password",
    },
    {
      label: "Confirm Password",
      value: confirmPass,
      onChange: (e) => setConfirmPass(e.target.value),
      type: "password",
    },
  ];
  return (
    <FormSection>
      <video src="./images/1.mp4" muted playsInline autoPlay loop></video>
      <ImgWrapper>
        <Img src="./images/12.jpg" alt="..." />
      </ImgWrapper>
      <InnerLayout>
        <MainContent />
      </InnerLayout>
      {/* <Container>
        <FormRow>
          <FormColumn></FormColumn>
          <FormColumn small>
            <FormTitle>Napisz</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}

              <Button
                variants={buttonVariants}
                whileHover="hover"
                type="submit"
              >
                Signup
              </Button>
            </FormWrapper>
            {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container> */}
    </FormSection>
  );
};

export default Form;
