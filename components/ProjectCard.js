import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="relative w-full h-40">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-500 hover:text-blue-600"
        >
          View Project <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
}
