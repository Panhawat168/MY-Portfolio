import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { menuItems } from "../../constants";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "../Kh-Eng/LanguageDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const nameTag = t("navbar.nameTagParts", { returnObjects: true });

  // Detect scroll position for background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track section in view for active menu highlight
  useEffect(() => {
    const sectionIds = menuItems.map((item) => item.id);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative">
      <nav
        className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
          }`}
      >
        <div className="text-white py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-md font-semibold cursor-pointer">
            <span className="text-[#0d83fd]">{nameTag.open}</span>
            <span className="text-white">{nameTag.first}</span>
            <span className="text-[#0d83fd]">{nameTag.slash}</span>
            <span className="text-white">{nameTag.last}</span>
            <span className="text-[#0d83fd]">{nameTag.close}</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300 text-md ml-5">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#0d83fd] ${activeSection === item.id ? "text-[#0d83fd]" : ""
                  }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>{t(item.labelKey)}</button>
              </li>
            ))}
          </ul>

          {/* Language Dropdown */}
          <LanguageDropdown />

          {/* Social Icons */}
          <div className="hidden md:flex space-x-4 ml-3">
            <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-300">
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/men-panhawat-712b0929b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#0077B5]"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#0088cc]"
            >
              <FaTelegram size={24} />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#0d83fd] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#0d83fd] cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#0d83fd]" : ""
                    }`}
                >
                  <button onClick={() => handleMenuItemClick(item.id)}>{t(item.labelKey)}</button>
                </li>
              ))}

              <div className="flex space-x-4">
                <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <FaGithub size={24} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/men-panhawat-712b0929b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#0088cc]"
                >
                  <FaTelegram size={24} />
                </a>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
