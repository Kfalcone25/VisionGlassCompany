import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-20 py-6">
      {" "}
      {/* Added px-20 for horizontal padding */}
      <h1 className="text-xl font-bold text-gray-700 mb-4">Contact Us</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <p className="mb-4">
            You can find us at some address, some city, some country, or get in
            touch via email at example@example.com.
          </p>
          <div className="h-64">
            {/* Placeholder for Google Map */}
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=(Your%20Address)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
          </div>
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
