"use client";

import Image from "next/image";
import { useState } from "react";
import ButtonArrow from "@/assets/images/button-arrow.svg"
import { SelectIcon } from "@/assets/svgicons";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    company: "",
    interest: "",
    message: "",
    consent: false,
  });

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const target = e.target;

  setForm((prev) => ({
    ...prev,
    [target.name]:
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value,
  }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.consent) {
    alert("Please accept the consent checkbox.");
    return;
  } 

  console.log(form);
};
  return (
    <form
      onSubmit={handleSubmit}
      className="form-design"
    >
      {/* Row 1 */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={form.name}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname*"
          value={form.surname}
          onChange={handleChange}
          required
          className="input"
        />
      </div>

      {/* Row 2 */}
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <input
          type="email"
          name="email"
          placeholder="Business Email"
          value={form.email}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          className="input"
        />
      </div>

      {/* Dropdown */}
      <div className="mt-4 relative">
        <select
          name="interest"
          value={form.interest}
          onChange={handleChange}
          className="input"
        >
          <option value="">Interested In</option>
          <option value="ai">AI Solutions</option>
          <option value="automation">Automation</option>
          <option value="consulting">Consulting</option>
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <SelectIcon />
        </div>
      </div>

      {/* Textarea */}
      <div className="mt-4">
        <textarea
          name="message"
          placeholder="Type your text here"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="input resize-none"
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-start gap-2 mt-4 text-sm text-[#c1cad8]">
        <input
          type="checkbox"
          name="consent"
          checked={form.consent}
          onChange={handleChange}
          className="mt-1"
        />
        <p>
          I declare that I have understood the information provided and I consent
          to the processing of my personal data.*
        </p>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="cursor-pointer flex items-center justify-self-start gap-0.5 font-medium text-sm bg-green text-[#020617] px-5 py-2.5 rounded-[6px] hover:bg-[#6CEDBE] transition mt-6"
      >
        Send Us a Message <Image src={ButtonArrow} alt="Button Arrow" />
      </button>
    </form>
  );
}