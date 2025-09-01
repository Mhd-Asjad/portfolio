import { ABOUT_TEXT } from "../constants";

function About() {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <h2 className="my-10 text-center text-4xl">
        About<span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap justify-content-center lg:justify-center">
        {/* Main container for About section */}
        <div className="w-full lg:w-4/5">
          <div className="flex flex-col items-center px-6 lg:flex-row lg:justify-center lg:space-x-12">
            <div className="flex justify-center lg:justify-start" >
              <p className="text-lg text-neutral-400 ">
                {ABOUT_TEXT}
              </p>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default About;
