import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/559299999900999",
    icon: FaWhatsapp,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/sua_clinica_fake",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/sua_clinica",
    icon: FaFacebookF,
  },
];

function Footer() {
  return (
    <footer className="px-4 pb-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-stone-200 pt-8 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm text-stone-500">Clinica estetica premium</p>
          <p className="mt-1 text-sm text-stone-400">
            Cuidado, beleza e sofisticacao.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:border-rose-300 hover:text-rose-500"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
