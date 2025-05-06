"use client";

import ContactInfo from "./info/ContactInfo";
import PhoneMockupImage from "./info/PhoneMockupImage";
import ContactForm from "./form/ContactForm";
import SubmitButton from "./form/SubmitButton";

const ContactUsPage = () => {
  return (
    <section className="pb-18">
      <div className="flex flex-col lg:flex-row items-end gap-7">
        
        <div className="w-full flex flex-col items-start">
          <ContactInfo />
          <PhoneMockupImage />
        </div>

        <div className="w-full">
          <ContactForm />
          <div className="mt-6">
            <SubmitButton />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUsPage;
