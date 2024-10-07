import Image from "next/image";
import introImg from "@/public/group 26.png";
import profileImg from "@/public/profileimage-removebg.png";
import Link from "next/link";
import oval from "@/public/oval.png";

export default function Intro() {
  return (
    <section className="flex flex-col items-center md:flex-row lg:items-start z-20 mb-4 ">
      <div className=" lg:w-1/2 md:w-1/2 w-full mb-2 flex flex-col justify-center items-center md:items-start">
        <Image
          src={introImg}
          alt="intro bg image"
          className="h-[129px] w-[530px] absolute lg:top-[133px] top-[124px] -left-[230px] lg:-left-[100px] md:-left-[265px] md:top-[86px] z-30"
        />

        <div className="lg:mt-6 md:mt-0 lg:max-w-[706px] md:max-w-[443px] lg:mb-[66px] md:mb-[34px] mt-[340px] max-w-[343px] mb-4">
          <h1 className="text-text-heading lg:text-6xl md:text-6xl  text-4xl md:text-start text-center ">
            Nice to meet you! I&apos;m{" "}
            <span className="border-b-4 border-text-link">Bennet</span>.
          </h1>
          <p className="md:max-w-[445px] text-text-body md:text-body-l mt-[43px] md:mt-[80px] md:text-start text-center">
            Based in Nigeria, I&apos;m a front-end developer passionate about
            building accessible web apps that users love.
          </p>
        </div>

        <Link
          href="#contact"
          className="md:mt-4 lg:mt-0 md:text-heading-m text-body-l border-b-2 text-text-body border-text-link hover:text-text-link "
        >
          CONTACT ME
        </Link>
      </div>

      <div className="">
        <Image
          src={profileImg}
          alt="profile image"
          className="lg:w-[445px] lg:h-[720px] md:w-[322px] md:h-[600px] md:left-[445px] bg-[#242424] absolute md:top-0 lg:left-[54.8%] left-[101px] top-[70px] w-[180px] h-[378px] z-0"
        />
        <Image
          src={oval}
          alt="oval on profile image"
          className="absolute lg:top-[440px] lg:left-[680px] w-[129px] h-[129px] md:top-[380px] md:right-[-60px] top-[250px] right-[-70px] z-50"
        />
      </div>
    </section>
  );
}
