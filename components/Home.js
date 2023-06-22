import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import Alert from "./Alert";
import { useState } from "react";
// import Card from "./Card";

export default function Home() {
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      <Navbar title="Text Editor" home="Home" />
      <Alert alert={alert} />
      <br />
      <Form showalert={showalert} title="Have a Look" />
      {/* <Card /> */}
    </>
  );
}
