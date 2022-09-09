import React from "react";
import { SectionTitle, Button } from "../../elements/index";

function Contact() {
  return (
    <>
      <section className="container">
        <SectionTitle title="Get in Touch" />
        <div className="mt-16 flex justify-between md:gap-5 md:flex-row flex-col gap-10">
          <div className="bgimage md:w-1/3 h-52 w-full" data-aos="fade-right" data-aos-duration="1200">
            <h1 className="font-bold text-2xl my-5">
              Let's talk about everything!
            </h1>
            <p>
              Don't like forms? Send me an{" "}
              <span className="text-secondary-color">email</span>. 👋
            </p>
          </div>
          <div className="md:w-2/3 w-full" data-aos="fade-left" data-aos-duration="1200">
            <div className="flex justify-between mb-6 md:flex-row flex-col">
              <div className="input_box">
                <input
                  type="text"
                  placeholder="Your name"
                  className="outline-none"
                />
              </div>
              <div className="input_box">
                <input
                  type="text"
                  placeholder="Email address"
                  className="outline-none"
                />
              </div>
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Subject"
              className="inputwrapper"
            />
            <textarea
              className="inputwrapper mb-20"
              cols="20"
              rows="5"
              placeholder="Message"
            ></textarea>
            <Button title="Send Message" />
          </div>
        </div>

      </section>
      <div className="w-full border-t dark:border-t-[#838181] border-t-[#ddd] mt-10 dark:bg-bg-dark">
        <p className="flex justify-center items-center w-60 mx-auto py-8">
          &copy; 2022 All Rights Reserved
        </p>
      </div>
    </>
  );
}

export default Contact;
