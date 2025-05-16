"use client";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-2">
        <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
          Full name
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="Enter Name"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone number
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="+91 9999999999"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Leave us a message..."
          rows={4}
          className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
        />
      </div>
    </form>
  );
};

export default ContactForm;
