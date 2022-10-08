import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Call } from "@mui/icons-material";

import { setRender } from "../reduxToolkit/callSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Backdrop } from "@mui/material";
function Contact() {
  const [open, setOpen] = useState(false);
  const history = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRender(true));
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setOpen(true);
    emailjs
      .sendForm(
        "contact_form",
        "template_x92ln2c",
        form.current,
        "ObRZYtKtgpC_ECSnD"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setOpen(false);
          history("/");
        },
        (error) => {
          setOpen(false);
          console.log(error.text);
        }
      );
  };

  return (
    <div className="">
      <Backdrop open={open} />
      <div>
        <form
          ref={form}
          id="contact-form"
          className="mt-[100px]  flex flex-col items-center mb-[10px]"
          onSubmit={sendEmail}
        >
          <input
            className="w-[50%] mb-[10px] border-black border-2 pl-[10px] rounded-md"
            maxLength="30"
            type="text"
            name="user_name"
            placeholder="Enter Your Name"
            required
          />
          <br />
          <input
            className="w-[50%] mb-[10px] border-black border-2 pl-[10px] rounded-md"
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
            required
          />
          <input
            className="w-[50%] mb-[10px] border-black border-2 pl-[10px] rounded-md"
            type="text"
            name="user_number"
            placeholder="Enter Your Number"
            required
          />
          <input
            className="w-[50%] mb-[10px] border-black border-2 pl-[10px] rounded-md"
            type="text"
            name="user_sub"
            placeholder="Enter Your Subject"
            required
          />
          <br />
          <textarea
            className="w-[50%] mb-[30px] border-black border-2 pl-[10px] rounded-md"
            name="message"
            placeholder="Enter Your Message"
            maxLength="1500"
            required
          />
          <br />
          <input
            className="border-black border-2 rounded-md w-[100px] p-[5px] bg-stone-100 hover:bg-sky-500 hover:text-amber-300"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
