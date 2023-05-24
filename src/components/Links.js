import React from "react";


export default function Links() {
    return (
        <section id="links" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Important Links
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base pb-5">
                        For more information about my skills, past work experience, education and other details, hit the <i>View Resume</i> button below. You can also view my LinkedIn and Github profiles.
                    </p>
                    <div className="flex justify-center">
                        <a
                        href={process.env.PUBLIC_URL + "/RiniChandra_Frontend.pdf"}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        View Resume
                        </a>
                        <a
                        href={"https://www.linkedin.com/in/rinichandra7/"}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-4 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        LinkedIn
                        </a>
                        <a
                        href={"https://github.com/RiniChandra7"}
                        rel="noreferrer"
                        className="ml-4 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}