import { navSocials } from "@/lib/data";

export default function Header() {
  return (
    <header className="h-32 text-text-heading pt-[29px] md:mb-14 w-full mb:14 ">
      <nav className="flex md:justify-between justify-center items-center md:flex-row flex-col gap-y-5">
        <a href="#intro" className="text-heading-m">
          bennetukoh
        </a>
        <ul className="flex md:gap-x-8 gap-x-6 z-50">
          {navSocials.map((social, index) => (
            <li key={index}>
              <a
                className="hover:text-text-link"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="md:h-6 md:w-6 h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
