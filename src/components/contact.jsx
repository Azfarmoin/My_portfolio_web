import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({
  title = "Let's Create Something Remarkable",
  description = "If you're looking to build a refined digital experience with performance, clarity, and precision — let's talk.",
  email = "azfarmoin.mernstacl@gmail.com",
  location = "Pakistan, Karachi",
  availability = "Open for select collaborations",
}) => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_ty18cy8",
        "template_swmsjop",
        form.current,
        "JJ7lIgykXQxARqHBX"
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
          setLoading(false);
        }
      );
  };

  return (
    <section
      className="
        relative w-full bg-[#003366] text-white
        py-12 sm:py-20 md:py-28 lg:py-32
        px-4 sm:px-8 md:px-16
        overflow-hidden
      "
    >
      {/* Background glows */}
      <div className="absolute -top-40 -left-40 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] bg-cyan-400/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2
            gap-10 sm:gap-14 md:gap-20 lg:gap-24
            items-start
          "
        >
          {/* LEFT */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2
                className="
                  text-2xl sm:text-3xl md:text-5xl lg:text-6xl
                  font-semibold tracking-[-0.02em]
                  leading-tight sm:leading-[1.1]
                "
              >
                {title}
              </h2>
              <div className="mt-6 h-px w-24 sm:w-32 bg-gradient-to-r from-white/60 to-transparent" />
            </div>

            <p
              className="
                text-sm sm:text-base md:text-xl
                text-white/70 leading-relaxed
                max-w-full sm:max-w-xl
              "
            >
              {description}
            </p>

            <div className="pt-4 sm:pt-6 flex flex-col gap-3 text-white/60 text-sm tracking-wide">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-teal-400">✉</span>
                <span className="break-all">{email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-400">📍</span>
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">●</span>
                <span className="text-white/80">{availability}</span>
              </div>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-8 sm:space-y-10 w-full"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="
                  w-full bg-transparent
                  border-b border-white/20
                  py-3 sm:py-4
                  text-sm sm:text-lg
                  placeholder-white/40
                  focus:outline-none focus:border-white
                  transition-all duration-500
                "
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="
                  w-full bg-transparent
                  border-b border-white/20
                  py-3 sm:py-4
                  text-sm sm:text-lg
                  placeholder-white/40
                  focus:outline-none focus:border-white
                  transition-all duration-500
                "
              />
            </div>

            <div>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="
                  w-full bg-transparent
                  border-b border-white/20
                  py-3 sm:py-4
                  text-sm sm:text-lg
                  placeholder-white/40
                  focus:outline-none focus:border-white
                  transition-all duration-500
                  resize-none
                  min-h-[120px] sm:min-h-[140px]
                "
              />
            </div>

            <div className="pt-4 sm:pt-6">
              <button
                type="submit"
                disabled={loading}
                className="
                  group relative
                  w-full sm:w-auto
                  inline-flex items-center justify-center
                  px-6 sm:px-10
                  py-3 sm:py-4
                  text-sm sm:text-base
                  border border-white/30
                  rounded-full overflow-hidden
                  transition-all duration-500
                  hover:border-white
                  active:scale-95
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-full" />
                <span className="relative z-10 tracking-wider uppercase group-hover:opacity-0 transition-opacity duration-300">
                  {loading ? "Sending..." : "Send Inquiry"}
                </span>
                <span className="absolute inset-0 flex items-center justify-center text-[#003366] tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-semibold">
                  {loading ? "Sending..." : "Send Inquiry"}
                </span>
              </button>
            </div>

            {status === "success" && (
              <div className="flex items-center gap-2 text-green-400 text-xs sm:text-base font-medium bg-green-400/10 border border-green-400/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3">
                <span>✓</span> Message sent! I'll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 text-xs sm:text-base font-medium bg-red-400/10 border border-red-400/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3">
                <span>✕</span> Failed to send. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;