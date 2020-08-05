import React, { useEffect, useState } from "react";
import { Form, Input, WrapperCol, WrapperForm } from "../lib/stylesheet";
import { ButtonSubmit } from "./ButtonSubmit";

export const SignUpForm = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const inputWidth = (width) => {
    if (width < 668) {
      return "100%";
    } else {
      return "49%";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("This button doesn't do that much right now");
  };

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <WrapperCol>
        <Input width="100%" placeholder="Navn" type="text" required></Input>
        <WrapperForm>
          <Input
            width={inputWidth(windowWidth)}
            placeholder="Mobil"
            type="number"
            required
          ></Input>
          <Input
            width={inputWidth(windowWidth)}
            placeholder="e-mail"
            type="email"
            required
          ></Input>
        </WrapperForm>
        <WrapperForm>
          <Input
            width={inputWidth(windowWidth)}
            placeholder="Postnr."
            type="number"
            required
          ></Input>
          <Input
            width={inputWidth(windowWidth)}
            placeholder="By"
            type="text"
            required
          ></Input>
        </WrapperForm>
        <ButtonSubmit text="Ring mig op" type="submit" />
      </WrapperCol>
    </Form>
  );
};
