import React, { useState } from "react";
import emailjs from "emailjs-com"
import {Container, Form, FormButton, FormContent, FormH1, FormInput, FormInputMessage, FormLabel, FormWrap} from '../style/ContactElements';

const Contact = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFeedback("template_c0curvj", {
      name,
      firstName,
      company,
      phone,
      email,
      message,
    });
  };

  const sendFeedback = (templateId, variables) => {

    emailjs
      .send("service_kpf2krl", templateId, variables, "user_2BYHxzUIxnNFuL2vhJnlO")
      .then((res) => {
        console.log(res);
        setName("");
        setFirstName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch((err) =>console.log(err))
  };

  return (
    <>
        <Container>
            <FormWrap>
                <FormContent>
                    <Form onSubmit={handleSubmit} method="POST">
                        <FormH1>Présentez votre projet</FormH1>

                        <FormLabel htmlFor='for'>Nom</FormLabel>
                        <FormInput
                            type="text"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="nom *"
                            value={name}
                            required
                        />

                        <FormLabel htmlFor='for'>Prénom</FormLabel>
                        <FormInput
                            type="text"
                            name="firstName"
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="prénom *"
                            value={firstName}
                            required
                        />

                        <FormLabel htmlFor='for'>Société</FormLabel>
                        <FormInput
                            type="text"
                            name="company"
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="société"
                            value={company}
                        />

                        <FormLabel htmlFor='for'>Téléphone</FormLabel>
                        <FormInput
                            type="text"
                            name="phone"
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="téléphone"
                            value={phone}
                        />

                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput
                            type="mail"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email *"
                            value={email}
                            required
                        />

                        <FormLabel htmlFor='for'>Message</FormLabel>
                        <FormInputMessage
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="message *"
                            value={message}
                            required
                        />

                        <FormButton type="submit">Envoyer</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  );
};

export default Contact;