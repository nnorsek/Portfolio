"use client";
import Skills from "./pages/skills";
import Title from "./pages/title";
import ProjectCard from "./components/ProjectCard";
import WavyBackground from "./components/wavyBackground";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <WavyBackground />

      {/* 🔤 Content */}
      <div className="relative z-10">
        <Title />
        <hr className="w-full max-w-6xl mx-auto border-t border-gray-700 my-10" />
        <Skills />
        <hr className="w-full max-w-6xl mx-auto border-t border-gray-700 my-10" />
        <div className="p-10" id="projectSection">
          <ProjectCard
            title="Recipe Book"
            description="Explore 200+ unique recipes to try from or build your own recipe from scratch. You are able to rate your favorite recipes and create albums to save for later."
            text="Start Cooking"
            href="https://github.com/nnorsek/Recipe-Book"
            techUsed={["React", "SpringBoot", "Java", "SQL"]}
          />
          <ProjectCard
            title="Higher Or Lower NBA Edition"
            description="Guess if the NBA player has a higher or lower points per game statistic than another NBA player. See how far you last and if you are a true fan."
            reverse
            text="Visit Project"
            href="https://github.com/nnorsek"
            techUsed={["React", "SpringBoot", "Java", "SQL"]}
          />
          <ProjectCard
            title="Third Project"
            description="Another project description..."
            text="Visit Project"
            href="https://github.com/nnorsek"
            techUsed={["React", "SpringBoot", "Java", "SQL"]}
          />
        </div>
      </div>
    </main>
  );
}
