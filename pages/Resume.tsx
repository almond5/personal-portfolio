import React from 'react';
import Footer from '../src/components/Footer';

const Resume = () => {
  return (
    <>
      <div id="resume" className="flex mx-auto text-center py-32">
        <div className="mx-auto">
          <div
            className="mx-auto max-w-sm text-xl text-left xs:max-w-sm sm:max-w-sm 
        md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-lg"
          ></div>
          <div className="text-left text-3xl font-semibold mb-4 pl-6">
            Resume
          </div>

          <embed
            src="resume.pdf#navpanes=0&scrollbar=0&toolbar=0&statusbar=0"
            type="application/pdf"
            width={'850'}
            height={'1060'}
            className="px-2"
          ></embed>
          <div className="py-4"></div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Resume;
