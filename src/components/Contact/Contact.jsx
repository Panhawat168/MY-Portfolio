import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tyjequ8",
        "template_ztk6qrg",
        form.current,
        "3v1fogZutAu3reBDw"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success(t("contact.success"), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error(t("contact.error"), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">{t("contact.title")}</h2>
        <div className="w-32 h-1 bg-[#0d83fd]  mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          {t("contact.subtitle")}
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center"> {t("contact.connect")} <span className="ml-1"></span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder={t("contact.emailPlaceholder")}
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-[#0d83fd]"
          />
          <input
            type="text"
            name="user_name"
            placeholder={t("contact.namePlaceholder")}
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-[#0d83fd]"
          />
          <input
            type="text"
            name="subject"
            placeholder={t("contact.subjectPlaceholder")}
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-[#0d83fd]"
          />
          <textarea
            name="message"
            placeholder={t("contact.messagePlaceholder")}
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-[#0d83fd]"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r  py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
            style={{
              background: ' linear-gradient(90deg,#0d83fd,#a855f7)',
              boxShadow: '0 0 2px ##0d83fd, 0 0 2px #0d83fd, 0 0 40px #0d83fd '
            }}>
            {t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;