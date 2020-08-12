import React, { useEffect, useState } from "react";
import {
  Paragraph,
  Form,
  Input,
  WrapperCol,
  WrapperForm,
} from "../lib/stylesheet";
import { ButtonSubmit } from "./ButtonSubmit";

export const SignUpForm = () => {
  const [signUpMessage, setSignUpMessage] = useState("");

  const [name, setName] = useState("");
  const [phoneNbr, setPhoneNbr] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");

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
    fetch(`https://landing-page-pentia.herokuapp.com/users`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        phoneNbr: phoneNbr,
        email: email,
        zipCode: zipCode,
        city: city,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        console.log(res.ok);
        setSignUpMessage(
          "Thank you for showing interest in Pentia, we will contact you."
        );
        //Clears textarea is message is succesfully sent
        setName("");
        setPhoneNbr("");
        setEmail("");
        setZipCode("");
        setCity("");
      } else {
        setSignUpMessage(
          "Oh no, something went wrong! Make sure you filled in the form correctly."
        );
        console.log(res);
      }
    });
  };

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <WrapperCol>
        <Input
          onChange={(event) => {
            setName(event.target.value);
          }}
          width="100%"
          placeholder="Navn"
          type="text"
          value={name}
          required
        />
        <WrapperForm>
          <Input
            onChange={(event) => {
              setPhoneNbr(event.target.value);
            }}
            width={
              windowWidth > WINDOW_WIDTH_THRESHOLD
                ? INPUT_WIDTH_REDUCED
                : INPUT_WIDTH_EXPANDED
            }
            placeholder="Mobil"
            type="number"
            value={phoneNbr}
            required
          />
          <Input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            width={
              windowWidth > WINDOW_WIDTH_THRESHOLD
                ? INPUT_WIDTH_REDUCED
                : INPUT_WIDTH_EXPANDED
            }
            placeholder="e-mail"
            type="email"
            value={email}
            required
          />
        </WrapperForm>
        <WrapperForm>
          <Input
            onChange={(event) => {
              setZipCode(event.target.value);
            }}
            width={
              windowWidth > WINDOW_WIDTH_THRESHOLD
                ? INPUT_WIDTH_REDUCED
                : INPUT_WIDTH_EXPANDED
            }
            placeholder="Postnr."
            type="number"
            value={zipCode}
            required
          />
          <Input
            onChange={(event) => {
              setCity(event.target.value);
            }}
            width={
              windowWidth > WINDOW_WIDTH_THRESHOLD
                ? INPUT_WIDTH_REDUCED
                : INPUT_WIDTH_EXPANDED
            }
            placeholder="By"
            type="text"
            value={city}
            required
          />
        </WrapperForm>
        <ButtonSubmit text="Ring mig op" type="submit" />
        <Paragraph>{signUpMessage}</Paragraph>
      </WrapperCol>
    </Form>
  );
};
