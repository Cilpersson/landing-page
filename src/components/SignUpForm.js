import React, { useEffect, useState } from "react";
import { Form, Input, WrapperCol, WrapperForm } from "../lib/stylesheet";

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

  return (
    <Form>
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
      </WrapperCol>
    </Form>
  );
};
