import { courses } from "@/lib/data";
import Image from "next/image";
import reversRing from "@/public/revrse ring.png";

export default function Tools() {
  return (
    <section className="border-t border-x-text-body lg:mt-56 mt-12 md:mt-12 md:mb-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center mt-10">
        {courses.map((course) => (
          <div
            key={course.name}
            className="flex flex-col justify-center  items-center md:items-start py-4"
          >
            <h2 className="text-text-heading md:text-heading-l text-heading-m">
              {course.name}
            </h2>
            <p className="md:text-body-l text-base text-text-body mt-2 ">
              {course.experience}
            </p>
          </div>
        ))}
      </div>
      <Image
        src={reversRing}
        alt="reversed ring"
        className="absolute lg:top-[1011px] lg:left-[1090px] w-[530px] h-[129px] md:left-[550px] md:top-[1001px] left-[211px] top-[1450px]  z-0"
      />
    </section>
  );
}
