import React from "react";
import "./CTAForm.css";

type Props = {};

const CTAForm = (props: Props) => {
  return (
    <div className="get-in-touch">
      <h3>Get In Touch</h3>
      <p>
        Interested in our commercial glass solutions? Fill out the form below,
        and our team will get back to you shortly.
      </p>

      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" required />
          </div>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <select id="state" name="state" required>
              <option value="">Select State</option>
              <option value="CA">California</option>
              <option value="NY">New York</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="zip">ZIP Code:</label>
            <input type="text" id="zip" name="zip" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CTAForm;
