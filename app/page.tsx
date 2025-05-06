"use client";
import Skills from "./pages/skills";
import Title from "./pages/title";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  return (
    <main>
      <Title />
      <hr className="w-full max-w-6xl mx-auto border-t border-gray-700 my-10" />
      <Skills />
      <hr className="w-full max-w-6xl mx-auto border-t border-gray-700 my-10" />

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
