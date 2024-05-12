import React, { useState } from "react";

interface FormData {
  formType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  zip: string;
  description: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    formType: "GeneralInquiry", // This can be dynamically set based on the form's purpose
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (response.ok) {
      alert("Form submitted successfully!");
    } else {
      alert("Failed to submit form: " + data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="formType" value={formData.formType} />
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        value={formData.city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        value={formData.state}
        onChange={handleChange}
      />
      <input
        type="text"
        name="zip"
        placeholder="Zip"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        value={formData.zip}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        value={formData.description}
        onChange={handleChange}
      ></textarea>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
