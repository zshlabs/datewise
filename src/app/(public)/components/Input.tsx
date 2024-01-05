"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IconArrowRight } from "@tabler/icons-react";
import { joinWaitList } from "../actions";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function Input() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    const response = await joinWaitList(email);

    // console.log(response);

    // alert(response?.message);

    if (response?.status === 400) {
      toast.error(response?.message);
      return;
    } else if (response?.status === 200) {
      toast.success(response.message);
      return;
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          onChange={handleInputChange}
          placeholder="walter@breakingbad.com"
          className="rounded-l-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10  py-3 md:py-5 px-4 md:px-10 text-secondary bg-neutral-950 placeholder:text-neutral-700"
        />
        <button
          type="submit"
          className="text-4xl rounded-r-lg bg-primary py-2 px-5 bg-white text-black z-10"
        >
          <IconArrowRight />
        </button>
      </form>
      <ToastContainer />
    </>
  );
}
