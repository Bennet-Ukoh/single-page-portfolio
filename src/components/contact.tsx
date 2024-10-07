"use client";
import Image from "next/image";
import introImg from "@/public/group 26.png";
import { FieldValues, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    reset();
  };

  return (
    <section
      className="flex lg:flex-row flex-col justify-center items-center gap-4 bg-[#242424] mt-16 pb-12"
      id="contact"
    >
      <div className="flex flex-col lg:justify-start justify-center lg:items-start gap-y-4 py-2 items-center lg:w-1/2 max-w-[495px] lg:gap-y-8">
        <h1 className="text-text-heading lg:text-heading-xl text-heading-l font-bold md:text-6xl md:pt-8 lg:pt-0">
          Contact
        </h1>
        <p className="text-text-body md:text-lg lg:text-start text-center max-w-[445px]">
          Want to work together? I’d love to hear from you. Send me a message
          and I’ll respond as soon as possible.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 flex flex-col lg:w-1/2 lg:max-w-[495px] md:w-full md:max-w-[507px]"
      >
        {/* Name Input */}
        <input
          className={`h-12 my-3 border-b bg-transparent text-text-body caret-text-body p-4 transition-all focus:outline-none ${
            errors.name
              ? "border-b-red-500"
              : "focus:border-b-2 focus:border-text-link"
          }`}
          type="name"
          {...register("name", {
            required: "Name is required",
            maxLength: { value: 20, message: "Max length is 20" },
            pattern: {
              value: /^[a-zA-Z\s]*$/,
              message: "No special characters allowed!",
            },
          })}
          placeholder="NAME"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{`${errors.name.message}`}</p>
        )}

        {/* Email Input */}
        <input
          className={`h-12 my-3 border-b bg-transparent text-text-body caret-text-body p-4 transition-all focus:outline-none ${
            errors.email
              ? "border-b-red-500"
              : "focus:border-b-2 focus:border-text-link"
          }`}
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email format!",
            },
          })}
          placeholder="EMAIL"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{`${errors.email.message}`}</p>
        )}

        {/* Message Input */}
        <textarea
          className={`h-28 my-3 border-b bg-transparent text-text-body caret-text-body p-4 transition-all focus:outline-none ${
            errors.message
              ? "border-b-red-500"
              : "focus:border-b-2 focus:border-text-link"
          }`}
          placeholder="MESSAGE"
          {...register("message", {
            required: "Message is required",
            maxLength: {
              value: 200,
              message: "Message should not exceed 200 characters",
            },
          })}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{`${errors.message.message}`}</p>
        )}

        {/* Submit Button */}
        <button
          disabled={isSubmitting}
          type="submit"
          className="self-end ml-auto w-[120px] border-b border-text-link hover:text-text-link text-text-body mt-6 mb-16"
        >
          SEND MESSAGE
        </button>
      </form>

      <Image
        src={introImg}
        alt="intro bg image"
        className="h-[119px] w-[530px] absolute lg:top-[3150px] top-[4430px] -left-[243px] lg:-left-[205px] md:-left-[368px] md:top-[2950px]"
      />

      {/* Toast Container for notifications */}
      <ToastContainer />
    </section>
  );
}
