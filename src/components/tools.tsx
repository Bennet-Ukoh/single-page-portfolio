import { courses } from "@/lib/data";

export default function Tools() {
  return (
    <section className="border-t border-x-text-body lg:mt-56 mt-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center mt-10">
        {courses.map((course) => (
          <div
            key={course.name}
            className="flex flex-col justify-center  items-center md:items-start py-4"
          >
            <h2 className="text-text-heading md:text-heading-l text-heading-m">
              {course.name}
            </h2>
            <p className="md:text-body-l text-base text-text-body mt-2">
              {course.experience}
            </p>
          </div>
        ))}
      </div>
      {/* <Image
        src={oval}
        alt="oval on profile image"
        className="absolute lg:top-[521px] lg:left-[680px] w-[129px] h-[129px] md:left-[702px] md:top-[471px] left-[311px] top-[245px]  z-0"
      /> */}
    </section>
  );
}
