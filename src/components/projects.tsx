import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="mt-14 border-t md:border-t-0 border-text-heading pt-14 md:pt-0">
      <div className="flex justify-between items-center">
        <h1 className="lg:text-heading-l md:text-3xl text-2xl text-text-heading font-bold">
          Projects
        </h1>
        <Link
          href="#contact"
          className=" border-b-2 text-text-body border-text-link hover:text-text-link"
        >
          CONTACT ME
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 justify-center items-center mt-10">
        {projects.map((project, index) => (
          <div key={index} className="group">
            {/* Image Wrapper (Relative positioning to contain overlay) */}
            <div className="relative">
              {/* Image */}
              <Image
                src={project.image}
                alt={project.name}
                className="lg:w-[540px] lg:h-[400px] w-[342px] h-[252px] object-cover"
              />

              {/* Dim Overlay (absolute inside the image container) */}
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 lg:group-hover:opacity-70"></div>

              {/* Hidden Links initially, only show on hover */}
              <div className="hidden lg:flex flex-col gap-6 absolute inset-0 justify-center items-center opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                <a
                  className="md:text-lg text-base border-b-2 text-text-body border-text-link hover:text-text-link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>

                <a
                  className="md:text-lg text-base border-b-2 text-text-body border-text-link hover:text-text-link"
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>

            {/* Project Info below the image */}
            <div className="flex flex-col gap-2 mt-2">
              <h2 className="text-heading-m text-text-heading">
                {project.name}
              </h2>
              <ul className="flex gap-2 text-text-body">
                {project.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>

            {/* Mobile view buttons (visible only on mobile) */}
            <div className="flex gap-x-4 lg:hidden">
              <a
                className="md:text-lg text-base border-b-2 text-text-body border-text-link hover:text-text-link"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
              <a
                className="md:text-lg text-base border-b-2 text-text-body border-text-link hover:text-text-link"
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
