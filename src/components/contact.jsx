import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({
  title = "Let’s Create Something Remarkable",
  description = "If you're looking to build a refined digital experience with performance, clarity, and precision — let's talk.",
  email = "azfarmoin.mernstacl@gmail.com",
  location = "Pakistan karachi",
  availability = "Open for select collaborations",
}) => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ty18cy8", // your Service ID
        "template_swmsjop", // your Template ID
        form.current,
        "JJ7lIgykXQxARqHBX" // your Public Key
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section className=" relative w-full bg-[#003366] text-white py-32 px-6 md:px-16 overflow-hidden">

      {/* Soft Luxury Light */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-white/5 blur-[160px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-400/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">

        {/* LEFT — Editorial Side */}
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.02em] leading-[1.1]">
              {title}
            </h2>
            <div className="mt-8 h-px w-32 bg-gradient-to-r from-white/60 to-transparent" />
          </div>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
            {description}
          </p>

          <div className="pt-10 space-y-4 text-white/60 text-sm tracking-wide">
            <p>{email}</p>
            <p>{location}</p>
            <p className="text-white/80">{availability}</p>
          </div>
        </div>

        {/* RIGHT — Minimal Elite Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-12">

          <div className="group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-white/20 py-4 text-lg placeholder-white/40 focus:outline-none focus:border-white transition-all duration-500"
              required
            />
          </div>

          <div className="group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-white/20 py-4 text-lg placeholder-white/40 focus:outline-none focus:border-white transition-all duration-500"
              required
            />
          </div>

          <div className="group">
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full bg-transparent border-b border-white/20 py-4 text-lg placeholder-white/40 focus:outline-none focus:border-white transition-all duration-500 resize-none"
              required
            />
          </div>

          {/* Fancy Button */}
          <div className="pt-8">
            <button
              type="submit"
              className="group relative inline-flex items-center gap-4 px-10 py-4 border border-white/30 rounded-full overflow-hidden transition-all duration-500 hover:border-white"
            >
              <span className="relative z-10 text-sm tracking-wider uppercase">
                Send Inquiry
              </span>
              <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              <span className="absolute inset-0 flex items-center justify-center text-[#003366] opacity-0 group-hover:opacity-100 transition duration-500">
                Send Inquiry
              </span>
            </button>
          </div>

          {/* Status Message */}
          {status && (
            <p className="text-white mt-2 text-center font-medium">{status}</p>
          )}
        </form>

      </div>
    </section>
  );
};

export default Contact;
