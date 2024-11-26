import Link from "next/link";

const ROUTES = [
  {
    name: "Terms & Conditions",
    path: "/terms-conditions",
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
];

const Footer = () => {
  return (
    <footer className="mt-auto flex h-14 items-center justify-between border-t border-white/10 px-3 text-white/25 sm:px-9">
      <small>&copy; 2024 NovaPride. All rights reserved</small>
      <ul className="flex gap-x-6 text-sm">
        {ROUTES.map(({ name, path }) => (
          <li key={path} className="text-white/50 transition hover:text-white">
            <Link href={path} className="flex h-12 items-center">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
