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
      <div className="card-light p-6">
  <h3 className="heading-small text-light-primary dark:text-dark-primary mb-4">
    Project Title
  </h3>
  <p className="body-normal text-light-secondary dark:text-dark-secondary mb-6">
    Project description goes here...
  </p>
  <button className="btn-primary">
    View Project
  </button>
</div>
Key Features Added:

Dark Mode Toggle - Complete theme switching functionality
Neue Machina Integration - Both light and regular weights
Custom Color Palette - Portfolio-friendly colors for both themes
Smooth Transitions - 300ms transitions for theme changes
Accessibility - Proper focus states and ARIA labels
Responsive Design - Mobile-first approach
Custom Components - Pre-built classes for common elements
Local Storage - Remembers user's theme preference

Usage Tips:

Use font-neue-machina class for the font family
Use font-light (300) for headings and emphasis
Use font-normal (400) for body text
All theme colors automatically switch with dark mode
The theme toggle can be placed in your navigation

Would you like me to help you implement this in any specific components of your portfolio?RetryClaude does not have the ability to run the code it generates yet.Claude can make mistakes. Please double-check responses.
    </div>
  );
}
