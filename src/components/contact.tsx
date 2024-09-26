export default function Contact() {
  return (
    <section className="flex lg:flex-row flex-col justify-center items-center space-x-5 bg-[#242424] mt-16">
      <div className="flex flex-col lg:justify-start justify-center lg:items-start gap-y-4 py-2 items-center lg:w-1/2 max-w-[350px] lg:gap-y-10">
        <h1 className="text-text-heading text-heading-l font-bold">Contact</h1>
        <p className="text-text-body lg:text-start text-center">
          Want to work together? I’d love to hear from you. Send me a message
          and I’ll respond as soon as possible.
        </p>
      </div>
      <form className="mt-10 flex flex-col lg:w-1/2 max-w-[445px] ">
        <input
          className="h-12 my-3 border-b bg-transparent text-text-body caret-text-body p-4 transition-all focus:outline-none focus:border-b-2 focus:border-text-link"
          name="name"
          type="name"
          required
          maxLength={500}
          placeholder="Your name"
        />
        <input
          className="h-12 my-3 border-b bg-transparent text-text-body caret-text-body p-4 transition-all focus:outline-none focus:border-b-2 focus:border-text-link"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-28 my-3 border-b bg-transparent text-text-body caret-text-body p-4 transition-all focus:outline-none focus:border-b-2 focus:border-text-link"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button type="submit" className="mt-4">
          Send Message
        </button>
      </form>
    </section>
  );
}
