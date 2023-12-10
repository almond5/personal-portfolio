import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      className="text-center py-40 mx-auto bg-blend-color max-w-screen-lg"
    >
      <div className="mx-auto text-xl text-left max-w-3xl">
        <div className="text-left text-3xl font-semibold mb-2">About Me</div>
        <div className="mb-6 text-2xl text-left">
          Greetings! My name is Adrian Hossen and I am a third year computer
          science student at the University of Central Florida. I am also a
          returning Software Engineer Intern at Microsoft.
        </div>
        <div className="text-left text-3xl font-semibold mb-2">Education</div>
        <div className="mb-6 text-2xl text-left">
          As a third year computer science student, I have maintained a 4.0 GPA.
          Some of my relevant and completed coursework includes: Computer
          Science I & II, Full-Stack Development, Discrete I & II, System
          Administration, Object Oriented Programming, Database Management,
          System Software, and Calculus I & II.
        </div>
        <div className="text-left text-3xl font-semibold mb-2">Experience</div>
        <div className="mb-6 text-2xl text-left">
          <div className="mb-3">
            Currently, I am a teaching assistant for Dr. Steinberg&apos;s
            Introduction to C Programming course at UCF. As a teaching
            assistant, I host office hours, administer exams, and grade several
            assignments.
          </div>
          <div className="mb-3">
            Furthermore, I was able to intern for Microsoft as an explore and
            software engineer intern. During these internships, I obtained
            real-world experience by creating scalabale/dynamic applications and
            writing documentation. I was also able to further develop my
            collaborative, project management, and time management skills.
          </div>
          <div className="mb-3">
            As an explore intern, I collaborated with two interns to create a
            product proposal that detailed the impact/changes of a new UI/UX
            dashboard. I was able to begin the development of this product
            within a C# MVC modular codebase.
          </div>
          <div className="mb-3">
            As a swe intern, I developed a dynamic debugging dashboard for Bing
            Feeds research metrics in collaboration with Bing&apos;s Beijing
            team. I also collaborated with a Senior Applied Data Scientist to
            create an up-sampling mechanism that up-sampled underrepresented
            exploration paths.
          </div>
        </div>
        <div className="text-left text-3xl font-semibold mb-2">Skills</div>
        <div className="mb-4 text-2xl text-left">
          As it pertains to my skillset, I have experience working with
          full-stack web applications, mobile applications, database systems,
          data analysis, machine learning models, and object oriented systems.
          Here is a list of the technologies that I am familiar with:
        </div>
        <ul className="grid grid-cols-3 gap-x-2 whitespace-nowrap text-left text-2xl">
          <li className="list-inside list-disc">C#</li>
          <li className="list-inside list-disc">GitHub</li>
          <li className="list-inside list-disc">Azure DevOps</li>
          <li className="list-inside list-disc">React.js</li>
          <li className="list-inside list-disc">Next.js</li>
          <li className="list-inside list-disc">Digital Ocean</li>
          <li className="list-inside list-disc">Linux</li>
          <li className="list-inside list-disc">VSCode</li>
          <li className="list-inside list-disc">Visual Studio</li>
          <li className="list-inside list-disc">HTML/CSS</li>
          <li className="list-inside list-disc">JavaScript</li>
          <li className="list-inside list-disc">TypeScript</li>
          <li className="list-inside list-disc">Python</li>
          <li className="list-inside list-disc">Java</li>
          <li className="list-inside list-disc">TailwindCSS</li>
          <li className="list-inside list-disc">PHP</li>
          <li className="list-inside list-disc">C</li>
          <li className="list-inside list-disc">SQL</li>
          <li className="list-inside list-disc">KQL</li>
          <li className="list-inside list-disc">MySQL</li>
          <li className="list-inside list-disc">NoSQL</li>
          <li className="list-inside list-disc">SCOPE</li>
          <li className="list-inside list-disc">Cosmos</li>
          <li className="list-inside list-disc">Prisma</li>
          <li className="list-inside list-disc">PlanetScale</li>
          <li className="list-inside list-disc">Pandas</li>
          <li className="list-inside list-disc">PHPMyAdmin</li>
          <li className="list-inside list-disc">Sklearn</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
