import React, { useEffect, useState } from "react";
import { Form, Input, WrapperCol, WrapperForm } from "../lib/stylesheet";
import { ButtonSubmit } from "./ButtonSubmit";

export const SignUpForm = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const WINDOW_WIDTH_THRESHOLD = 668;
  const INPUT_WIDTH_EXPANDED = "100%";
  const INPUT_WIDTH_REDUCED = "49%";

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

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
            width={
              windowWidth > WINDOW_WIDTH_THRESHOLD
                ? INPUT_WIDTH_REDUCED
                : INPUT_WIDTH_EXPANDED
            }
            placeholder="Mobil"
            type="number"
            required
          ></Input>
          <Input
            width={
              windowWidth > WINDOW_WIDTH_THRESHOLD
                ? INPUT_WIDTH_REDUCED
                : INPUT_WIDTH_EXPANDED
            }
            placeholder="e-mail"
            type="email"
            required
          ></Input>
        </WrapperForm>
        <WrapperForm>
          <Input
            width={
              windowWidth > WINDOW_WIDTH_THRESHOLD
                ? INPUT_WIDTH_REDUCED
                : INPUT_WIDTH_EXPANDED
            }
            placeholder="Postnr."
            type="number"
            required
          ></Input>
          <Input
            width={
              windowWidth > WINDOW_WIDTH_THRESHOLD
                ? INPUT_WIDTH_REDUCED
                : INPUT_WIDTH_EXPANDED
            }
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
