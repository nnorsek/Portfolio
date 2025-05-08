import React from "react";

const Experience = () => {
  return (
    <section className="w-full px-4 sm:px-10 md:px-20 lg:px-40 py-10 flex flex-col lg:flex-row gap-8">
      {/* Job Experience Card */}
      <div className="w-full px-6 py-8 bg-gradient-to-br from-[#0f172a]/70 to-[#1e293b]/70 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl">
        <h1 className="text-center text-3xl font-bold text-white mb-8">
          Job Experience
        </h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-emerald-500 mb-4">
              New York State Information Technology Services — Programmer
            </h2>
            <ul className="list-disc space-y-4 pl-5 text-lg text-gray-300 leading-relaxed">
              <li>
                Developed and maintained scalable front-end interfaces using
                React and TypeScript, delivering user-centered designs in
                collaboration with a UI/UX team.
              </li>
              <li>
                Contributed to back-end development with Spring and SQL,
                integrating Oracle databases and ensuring robust data management
                for large-scale applications.
              </li>
              <li>
                Participated in full-stack development for enterprise systems
                with complex workflows and interdependent components.
              </li>
              <li>
                Designed and consumed RESTful APIs to support dynamic content
                rendering and data processing across applications.
              </li>
              <li>
                Practiced Agile development methodologies with active
                participation in Scrum meetings, sprint planning, and daily
                stand-ups.
              </li>
              <li>
                Utilized Azure DevOps, ALM, and Git for source control, project
                tracking, and continuous integration.
              </li>
              <li>
                Supported and performed unit, integration, and system-level
                testing to ensure high-quality code delivery.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
