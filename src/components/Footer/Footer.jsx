import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-[8vw]">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        {/* Logo / Name */}
        <h2 className="text-2xl font-bold text-[#0d83fd] uppercase">{t("footer.ownerName")}</h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base font-medium">
          {[
            { key: "footer.home", id: "home" },
            { key: "footer.skills", id: "skills" },
            { key: "footer.experience", id: "experience" },
            { key: "footer.projects", id: "projects" },
            { key: "footer.education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#0d83fd] transition duration-300"
            >
              {t(item.key)}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-5 text-xl">
          {[
            { icon: <FaFacebook />, link: "" },
            { icon: <FaTwitter />, link: "" },
            { icon: <FaLinkedin />, link: "" },
            { icon: <FaInstagram />, link: "" },
            { icon: <FaYoutube />, link: "" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0d83fd] transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-700 w-3/4 mx-auto" />

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © 2025 <span className="text-white font-medium">{t("footer.ownerName")}</span>. {t("footer.rights")}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
