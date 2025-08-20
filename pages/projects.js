import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Celestial Web Solutions",
    description: "A business portofolio website.",
    image: "/png/projects/celestial.png",
    link: "https://celestialwebsolutions.net"
  },
  {
    title: "Building Planner Designs",
    description: "A building planner company that I developed a website for a Building Planner Company.",
    image: "/png/projects/buildingplanner.png",
    link: "https://buildingplannerdesigns.com"
  },
  {
    title: "Ghana Updates Online",
    description: "A news and radio streaming website.",
    image: "/png/projects/ghanaupdates.png",
    link: "https://ghanaupdates.online"
  },
  {
    title: "AdBay.store",
    description: "A free classified buy and sell website.",
    image: "/png/projects/adbay.png",
    link: "https://adbay.store"
  },
];

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Waliu's Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer block"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {project.description}
              </p>
              <div className="mt-3 text-blue-500 hover:text-blue-700 text-sm font-medium">
                Visit Website →
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}