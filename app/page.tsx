"use client";

import Title from "./pages/title";
import ProjectCard from "./components/projectCard";

export default function Home() {
  return (
    <main>
      <Title />
      <div className="p-10" id="projectSection">
        <ProjectCard
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        />
        <ProjectCard
          title="Second Project"
          description="Ut enim ad minim veniam..."
          reverse
        />
        <ProjectCard
          title="Third Project"
          description="Another project description..."
        />
      </div>
    </main>
  );
}
