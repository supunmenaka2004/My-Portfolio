"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // NOTE: You need to replace this URL with your deployed Google Apps Script Web App URL
      const scriptURL = "https://script.google.com/macros/s/AKfycbwiTYCwe5eCdVwLhjV2VwqXeatwaUxbVdzZu-xxz5buYT184APFX6hV5cIb7uihYvxM4w/exec";
      
      const data = new FormData();
      data.append("Firstname", formData.firstname);
      data.append("Lastname", formData.lastname);
      data.append("Email", formData.email);
      data.append("Phone", formData.phone);
      data.append("Message", formData.message);

      // We use no-cors because Google Apps Script doesn't return proper CORS headers by default for POST
      await fetch(scriptURL, {
        method: "POST",
        body: data,
        mode: "no-cors", 
      });

      // With no-cors we can't read the exact response, so we assume success if it didn't throw a network error
      setSubmitStatus("success");
      setFormData({ firstname: "", lastname: "", email: "", phone: "", message: "" });
      
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-24 flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 lg:px-8 xl:max-w-6xl">
        <div className="mb-16">
          <div className="inline-flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-4">Contact me</h2>
            <div className="w-20 h-1 bg-accent rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left side: Form Card */}
          <div className="flex-1 bg-[#27272c] p-8 lg:p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-4 text-accent">Let's work together</h2>
            <p className="text-gray-400 mb-8 max-w-md">
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  placeholder="Firstname"
                  className="w-full bg-[#1c1c22] rounded-md px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-accent border-none"
                />
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  placeholder="Lastname"
                  className="w-full bg-[#1c1c22] rounded-md px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-accent border-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email address"
                  className="w-full bg-[#1c1c22] rounded-md px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-accent border-none"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full bg-[#1c1c22] rounded-md px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-accent border-none"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message here."
                rows={6}
                className="w-full bg-[#1c1c22] rounded-md px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-accent resize-none border-none"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent hover:bg-accent-hover text-black font-semibold py-3 px-8 rounded-full transition-colors inline-block mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
              
              {submitStatus === "success" && (
                <p className="text-accent mt-4 font-medium">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 mt-4 font-medium">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>

          {/* Right side: Contact Info */}
          <div className="flex-1 flex flex-col justify-center gap-10">
            {/* Phone */}
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#27272c] rounded-md flex items-center justify-center shrink-0">
                <Phone className="text-accent" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <p className="text-white text-lg font-medium">(+94) 74 076 1395</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#27272c] rounded-md flex items-center justify-center shrink-0">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <p className="text-white text-lg font-medium">supunmenaka693@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#27272c] rounded-md flex items-center justify-center shrink-0">
                <MapPin className="text-accent" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Address</p>
                <p className="text-white text-lg font-medium">Kaduwela, Sri Lanaka</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
