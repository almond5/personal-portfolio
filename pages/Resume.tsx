import React from 'react';

const Resume = () => {
  return (
    <div id="resume" className="flex mx-auto text-center py-32">
      <div className='mx-auto'>
      <div
        className="mx-auto max-w-sm text-xl text-left xs:max-w-sm sm:max-w-sm 
        md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-lg"
      >
        <p
          className="mb-3 text-left text-2xl font-semibold xs:text-2xl sm:text-2xl 
          md:text-2xl lg:text-3xl xl:text-3xl"
        >
          Resume
        </p>
        <div className='py-2'></div>
        </div>
        <embed src='resume.pdf#zoom=90&navpanes=0&scrollbar=0' 
          type="application/pdf" width={"770"} height={"1010"} ></embed>
      </div>
    </div>
  );
};

export default Resume;
