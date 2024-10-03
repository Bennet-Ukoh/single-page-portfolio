import Image from "next/image";
import Link from "next/link";
import introImg from "@/public/group 26.png";

export default function Contact() {
  return (
    <section className="flex lg:flex-row flex-col justify-center items-center gap-4 bg-[#242424] mt-16 pb-12">
      <div className="flex flex-col lg:justify-start justify-center lg:items-start gap-y-4 py-2 items-center lg:w-1/2 max-w-[495px] lg:gap-y-10">
        <h1 className="text-text-heading lg:text-heading-xl text-heading-l font-bold md:text-6xl md:pt-8">
          Contact
        </h1>
        <p className="text-text-body md:text-lg lg:text-start text-center max-w-[445px]">
          Want to work together? I’d love to hear from you. Send me a message
          and I’ll respond as soon as possible.
        </p>
      </div>
      <form className="mt-10 flex flex-col lg:w-1/2 lg:max-w-[495px] md:w-full md:max-w-[507px] ">
        <input
          className="h-12 my-3 border-b bg-transparent text-text-body caret-text-body p-4 transition-all focus:outline-none focus:border-b-2 focus:border-text-link"
          name="name"
          type="name"
          required
          maxLength={500}
          placeholder="NAME"
        />
        <input
          className="h-12 my-3 border-b bg-transparent text-text-body caret-text-body p-4 transition-all focus:outline-none focus:border-b-2 focus:border-text-link"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="EMAIL"
        />
        <textarea
          className="h-28 my-3 border-b bg-transparent text-text-body caret-text-body p-4 transition-all focus:outline-none focus:border-b-2 focus:border-text-link"
          name="message"
          placeholder="MESSAGE"
          required
          maxLength={500}
        />

        <Link
          href="#contact"
          type="submit"
          className="self-end ml-auto w-[120px] border-b border-text-link hover:text-text-link text-text-body mt-6 mb-16 "
        >
          SEND MESSAGE
        </Link>
      </form>
      <Image
        src={introImg}
        alt="intro bg image"
        className="h-[119px] w-[530px] absolute lg:top-[3150px] top-[4430px] -left-[243px] lg:-left-[205px] md:-left-[368px] md:top-[2950px]"
      />
    </section>
  );
}
