import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Rini.
                <br className="hidden lg:inline-block" />I love to build amazing
                apps.
              </h1>
              <p className="mb-8 leading-relaxed">
                I am a software developer with over 3 years of experience in the IT industry. While I am primarily interested in Frontend development, I have contributed to a highly diverse set of projects, which have made me skilled at picking up new technologies fast. I love working on new ideas, growing and learning as I go.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-white-700 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
                <a
                  href="#links"
                  className="ml-4 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-white-700 rounded text-lg">
                  Important Links
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./coding.svg"
              />
            </div>
          </div>
        </section>
    );
}