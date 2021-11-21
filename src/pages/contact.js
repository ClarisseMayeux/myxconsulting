import React, { useState } from "react";
import emailjs from "emailjs-com"
import {Container, Form, FormButton, FormContent, FormH1, FormInput, FormInputMessage, FormLabel, FormWrap} from '../style/ContactElements';

const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFeedback("template_d2bnbyj", {
      name,
      company,
      phone,
      email,
      message,
    });
  };

  const sendFeedback = (templateId, variables) => {

    emailjs
      .send("service_6g2hkel", templateId, variables, "user_1Lri5q3lboLN4ltnWZIJS")
      .then((res) => {
        console.log(res);
        setName("");
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
                        <FormH1>Contactez-nous</FormH1>

                        <FormLabel htmlFor='for'>Nom</FormLabel>
                        <FormInput
                            type="text"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="nom *"
                            value={name}
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