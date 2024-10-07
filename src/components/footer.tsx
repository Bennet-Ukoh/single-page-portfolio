import { navSocials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="h-32 max-w-[1440px] mx-auto lg:px-[165px] md:px-[30px] px-4 justify-center items-center text-text-heading  bg-[#242424]  w-full">
      <nav className="flex md:justify-between justify-center items-center md:flex-row flex-col gap-y-5 border-t border-x-text-body p-4">
        <a href="#header" className="text-heading-m">
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
    </footer>
  );
}
