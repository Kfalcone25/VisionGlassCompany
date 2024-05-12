import React from "react";
import "./CTAForm.css";

type Props = {};

const CTAForm = (props: Props) => {
  return (
    <div className="container mx-auto px-20 py-6">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 className="block text-gray-700 text-lg font-bold mb-2">
          Get In Touch
        </h3>
        <p className="mb-4">
          Interested in our commercial glass solutions? Fill out the form below,
          and our team will get back to you shortly.
        </p>

        <form className="contact-form">
          <div className="md:flex mb-6">
            <div className="md:w-1/2 md:mr-2 mb-6 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="firstName"
                name="firstName"
                required
              />
            </div>
            <div className="md:w-1/2 md:ml-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="lastName"
                name="lastName"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              id="phone"
              name="phone"
              required
            />
          </div>

          <div className="md:flex mb-6">
            <div className="md:w-1/3 md:mr-2 mb-6 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="city"
              >
                City:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="city"
                name="city"
                required
              />
            </div>
            <div className="md:w-1/3 md:mx-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="state"
              >
                State:
              </label>
              <select
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="state"
                name="state"
                required
              >
                <option value="">Select State</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
              </select>
            </div>
            <div className="md:w-1/3 md:ml-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="zip"
              >
                ZIP Code:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="zip"
                name="zip"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              rows={4}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTAForm;
