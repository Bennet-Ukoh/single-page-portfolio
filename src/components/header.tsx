import { navSocials } from "@/lib/data";

export default function Header() {
  return (
    <header className="z-20">
      <nav className="flex px-32  justify-between items-center  pt-4">
        <a href="#intro" className="text-lg font-semibold">
          bennetukoh
        </a>
        <ul className="flex gap-x-8">
          {navSocials.map((social, index) => (
            <li key={index}>
              <a
                className="hover:text-[#4EE1A0]"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
