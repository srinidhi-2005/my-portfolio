import React, { useRef, useState } from "react";
import { BsFillSendCheckFill } from "react-icons/bs";
import { TbSendOff } from "react-icons/tb";
import Map from "../components/Map";
import emailjs from 'emailjs-com';
import Select from "react-select";
import { countries } from "countries-list";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
  });

  const isFormFilled = formData.name && formData.email && formData.message;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, country: selectedOption.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formRef.current) {
      console.error('No form reference provided');
      return;
    }
    emailjs
      .sendForm('service_7nkqiq1', 'template_a08cdpn', formRef.current, 'c5g2na2zHzyKGpi6v')
      .then(
        (res) => {
          console.log(res.text);
          setFormData({ name: "", email: "", country: "", message: "" });
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  const countryOptions = Object.entries(countries).map(([_, { name, continent }]) => ({
    value: name,
    label: `${name} (${continent})`,
  }));

  return (
    <section id="contact" className="min-h-screen relative bg-black text-white">
      {/* Map Background */}
      <div className="absolute inset-0 w-full h-full">
        <Map />
      </div>
      
      {/* Contact Form Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-16 px-4">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-gray-900/90 border border-yellow-400/30 rounded-2xl shadow-xl p-8 w-full max-w-lg flex flex-col gap-6 backdrop-blur-sm"
        >
          <h1 className="text-4xl font-bold mb-6 text-yellow-400 text-center">Connect with me...</h1>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none text-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Provide your email id"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none text-lg"
          />
          <Select
            options={countryOptions}
            value={countryOptions.find(option => option.value === formData.country) || null}
            onChange={handleSelectChange}
            placeholder="Select your country"
            styles={{
              control: (base) => ({
                ...base,
                padding: "5px",
                borderRadius: "16px",
                backgroundColor: "#18181b",
                borderColor: "#eab308",
                color: "#fff",
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: "#18181b",
                color: "#fff",
              }),
              option: (base, { isFocused, isSelected }) => ({
                ...base,
                backgroundColor: isSelected ? "#eab308" : isFocused ? "#facc15" : "#18181b",
                color: isSelected ? "#000" : "#fff",
                padding: "10px",
              }),
              singleValue: (base) => ({
                ...base,
                color: "#fff",
              }),
              placeholder: (base) => ({
                ...base,
                color: "#facc15",
              }),
            }}
          />
          <textarea
            name="message"
            placeholder="Give your message"
            value={formData.message}
            onChange={handleChange}
            rows={8}
            required
            className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none text-lg"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-400 to-yellow-300 w-40 py-3 text-center transition-all duration-300 bg-size-200 text-black font-bold rounded-lg flex items-center justify-center gap-2 border-none cursor-pointer text-lg self-end shadow-lg hover:from-yellow-300 hover:to-yellow-400"
          >
            Send
            {isFormFilled ? <BsFillSendCheckFill size={20} /> : <TbSendOff size={20} />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;