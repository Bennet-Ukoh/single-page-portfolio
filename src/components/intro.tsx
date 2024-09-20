import Image from "next/image";
import introImg from "@/public/group 26.png";
import Link from "next/link";
import profileImg from "@/public/profileimage.jpg";
import oval from "@/public/oval.png";

export default function Intro() {
  return (
    <section>
      <div className="">
        <Image
          src={introImg}
          alt="intro bg image"
          height={70}
          width={278}
          className="h-[70px] w-[278px] mt-8"
        />
        <div className="px-32 absolute top-28 z-10">
          <h1 className="text-6xl">
            Nice to meet you! <br /> I&apos;m {""}
            <span className="border-b-4 border-[#4EE1A0]">Bennet Ukoh</span>.
          </h1>
          <p className="mt-8 mb-12 max-w-72 text-[#D9D9D9] leading-5 text-sm text-wrap">
            Base in the Uk,I&apos;m a front-end developer passionate about
            building accessible web apps that users love.
          </p>
          <Link
            href="#contact"
            className="text-[#D9D9D9] border-b-2 text-sm border-[#4EE1A0]"
          >
            CONTACT ME
          </Link>
        </div>
        <Image
          src={profileImg}
          alt="profile image"
          height={510}
          width={378}
          className="w-[378px] z-0 opacity-50 h-[510px] absolute right-28 top-0"
        />
        <Image
          src={oval}
          alt="oval on profile image"
          width={80}
          height={80}
          className="absolute right-[448px] top-80 w-[80px] h-[80px] z-0"
        />
      </div>
    </section>
  );
}
