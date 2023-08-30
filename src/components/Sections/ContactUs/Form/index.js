import { useState } from "react";
import { send } from "emailjs-com";
import "./Form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_USER_ID
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Correo enviado");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        toast.warning(`Error: ${err}`);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const isEmpty = Object.values(toSend).some((e) => e === "");
    return isEmpty;
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="from_name">Su nombre</label>
      <input
        required
        type="text"
        id="from_name"
        name="from_name"
        placeholder="Su nombre"
        value={toSend.from_name}
        onChange={handleChange}
      />
      <label htmlFor="reply_to">Su correo electronico</label>
      <input
        required
        type="email"
        id="reply_to"
        name="reply_to"
        placeholder="Su correo electronico "
        value={toSend.reply_to}
        onChange={handleChange}
      />
      <label htmlFor="message">Su Mensaje</label>
      <textarea
        required
        type="text"
        id="message"
        name="message"
        placeholder="Su mensaje"
        value={toSend.message}
        onChange={handleChange}
      />
      <button type="submit" disabled={validateForm()}>
        enviar
      </button>
      <ToastContainer />
    </form>
  );
}
