import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Form</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-2 w-full mb-4"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          value={formData.email}
          onChange={handleInputChange}
        />
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
