import React from "react";
import Heading from "./Heading";

const Contact = ({ scrl }) => {
  return (
    <>
      <Heading
        title="Contact Me"
        description="If you've seen my potential or want to talk to me, don't hesitate to send me a message."
      />
      <div
        className="w-full sm:px-16 p-6 flex justify-center items-center"
        ref={scrl}>
        <form className="sm:w-8/12">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-first-name">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-900 text-white border-2 border-pink-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-800 focus:border-yellow-500"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-900 text-white border-2 border-pink-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-yellow-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-password">
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-900 text-white border-2 border-pink-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-800 focus:border-yellow-500"
                id="grid-email"
                type="email"
                placeholder="********@*****.**"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-password">
                Your Message
              </label>
              <textarea
                rows="10"
                className="appearance-none block w-full bg-gray-900 text-white border-2 border-pink-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-800 focus:border-yellow-500"
                placeholder="Your Message"></textarea>
            </div>
            <div className="flex justify-center w-full px-3">
              <button
                className="transition-all shadow bg-yellow-500 hover:bg-pink-600 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-6 rounded"
                type="submit">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
