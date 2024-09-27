import Image from "next/image";
import introImg from "@/public/group 26.png";
import profileImg from "@/public/profileimage.jpg";
import oval from "@/public/oval.png";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="flex flex-col items-center md:flex-row lg:items-start z-20 mb-4 ">
      <div className=" lg:w-1/2 md:w-1/2 w-full mb-2 flex flex-col justify-center items-center md:items-start">
        <Image
          src={introImg}
          alt="intro bg image"
          className="h-[129px] w-[530px] absolute lg:top-[133px] top-[124px] -left-[342px] lg:-left-[100px] md:-left-[265px] md:top-[86px]"
        />

        <div className="lg:mt-4 md:mt-2 lg:max-w-[706px] md:max-w-[443px] lg:mb-[66px] md:mb-[34px] mt-[340px] max-w-[343px] mb-4">
          <h1 className="text-text-heading lg:text-6xl text-4xl md:text-start text-center ">
            Nice to meet you! I&apos;m{" "}
            <span className="border-b-4 border-text-link">Bennet</span>.
          </h1>
          <p className="md:max-w-[445px] text-text-body md:text-body-l mt-[43px] md:text-start text-center">
            Based in the UK, I&apos;m a front-end developer passionate about
            building accessible web apps that users love.
          </p>
        </div>

        <Link
          href="#contact"
          className="md:text-heading-m text-body-l border-b-2 text-text-body border-text-link hover:text-text-link "
        >
          CONTACT ME
        </Link>
      </div>

      <div className="">
        <Image
          src={profileImg}
          alt="profile image"
          className="lg:w-[445px] lg:h-[720px] md:w-[322px] md:h-[600px] md:left-[445px] opacity-50 absolute md:top-0 lg:left-[54.8%] left-[138px] top-[70px] w-[180px] h-[378px] z-0"
        />
        <Image
          src={oval}
          alt="oval on profile image"
          className="absolute lg:top-[521px] lg:left-[680px] w-[129px] h-[129px] md:left-[702px] md:top-[471px] left-[320px] top-[245px]  z-0"
        />
      </div>
    </section>
  );
}
