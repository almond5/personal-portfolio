import React from 'react';
import Footer from '../src/components/Footer';

const Experience = () => {
  return (
    <>
      <div
        id="Experience"
        className="min-h-screen text-center pt-40 mx-auto bg-blend-color max-w-screen-lg"
      >
        <div className="mx-auto text-xl text-left max-w-sm md:max-w-2xl lg:max-w-full xl:max-w-full">
          <div className="text-left text-3xl font-semibold mb-8">
            Experience
          </div>
        </div>
        <ul className="mx-auto max-w-sm md:max-w-2xl lg:max-w-full xl:max-w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
          <li className="outline bg-backgroundcolor p-5 transition-transform hover:-translate-y-2 rounded-xl flex flex-col h-full">
            <div className="flex flex-col h-full">
              <div className="mb-1 text-2xl font-bold">
                Explore Intern @ Microsoft
              </div>
              <div className="mb-4 text-xl text-left">
                As an explore intern @ Microsoft, I collaborated with two
                interns to create a product proposal that detailed the
                impact/changes of a new UI/UX dashboard for Bing Sports. Under
                the guidance of our mentor, my intern pod was able to create a
                functioning prototype of the dashboard within a C# MVC modular codebase.
              </div>
              <ul className="py-2 flex flex-wrap gap-x-2.5 gap-y-1.5 text-xl text-left italic font-semibold"></ul>
            </div>
          </li>
          <li className="outline bg-backgroundcolor p-5 transition-transform hover:-translate-y-2 rounded-xl flex flex-col h-full">
            <div className="flex flex-col h-full">
              <div className="mb-1 text-2xl font-bold">
                SWE Intern @ Microsoft
              </div>
              <p className="mb-4 text-xl text-left">
                As a software engineering intern @ Microsoft, I developed a
                dynamic debugging dashboard for Bing Feeds&apos; research
                metrics in collaboration with Bing&apos;s Beijing team. I also
                collaborated with a Senior Applied Data Scientist to create an
                up-sampling mechanism that up-sampled underrepresented
                exploration paths within the machine learning flow for Bing
                Feeds.
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-xl text-left italic font-semibold"></ul>
            </div>
          </li>
          <li className="outline bg-backgroundcolor p-5 transition-transform hover:-translate-y-2 rounded-xl flex flex-col h-full">
            <div className="flex flex-col h-full">
              <div className="mb-1 text-2xl font-bold">
                Teaching Assistant @ UCF
              </div>
              <div className="mb-4 text-xl text-left">
                As a teaching assistant for Dr. Steinberg&apos;s Introduction to
                C Programming course @ UCF, I hosted office hours for five hours per week, assisted in administering
                exams, and graded several programming assignments. 
              </div>
              <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-xl text-left italic font-semibold"></ul>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Experience;
