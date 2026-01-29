
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Celestial Web Solutions",
    description: "A comprehensive business portfolio website showcasing web development services with modern design, client testimonials, and integrated payment solutions.",
    image: "/png/projects/celestial.png",
    link: "https://celestialwebsolutions.net/"
  },
  {
    title: "Building Planner Designs",
    description: "Professional website for a leading building planner company in Accra, featuring project galleries, service listings, and e-commerce functionality for construction planning services.",
    image: "/png/projects/buildingplanner.png",
    link: "https://celestialwebsolutions.net/portfolio/best-web-designer-in-accra"
  },
  {
    title: "Ghana Updates Online",
    description: "A comprehensive news and radio streaming website featuring real-time Ghana news updates, live radio streaming, and AdSense monetization for sustainable revenue generation.",
    image: "/png/projects/ghanaupdates.png",
    link: "https://celestialwebsolutions.net/portfolio/ghana-updates-online"
  },
  {
    title: "AdBay.store",
    description: "A comprehensive free classified marketplace website where users can buy and sell items across various categories with user-friendly interface and secure transaction features.",
    image: "/png/projects/adbay.png",
    link: "https://celestialwebsolutions.net/portfolio/adbay-store"
  },
  {
    title: "Elolo Agbleke Portfolio Website",
    description: "Professional website for a seasoned motivational speaker, chaplain, mentor, and entrepreneur, featuring speaking engagements, testimonials, and booking functionality for events.",
    image: "/png/projects/elolo.png",
    link: "https://celestialwebsolutions.net/portfolio/elolo-agbleke-website"
  },
  {
    title: "Mart Ban Logistics",
    description: "A logistics and transport company website with service listings and contact features.",
    image: "/png/projects/martb.png", // This file does not exist, so leave as is or add the file
    link: "https://celestialwebsolutions.net/portfolio/mart-ban-logistics"
  },
  {
    title: "My Space Furniture",
    description: "Modern furniture platform with interactive furniture categories from mattresses, vanities, sectionals, sofas and loveseats, beds, dining sets, and more.",
    image: "/png/projects/myspace-furniture.png",
    link: "https://celestialwebsolutions.net/portfolio/myspace-furniture"
  },
  {
    title: "Valyd Homes",
    description: "Valyd Homes is a real estate and construction company. The website creation is still in progress.",
    image: "/png/projects/valyd.png",
    link: "https://celestialwebsolutions.net/portfolio/valyd-homes"
  },
  {
    title: "Doeman Group",
    description: "Doeman Group is a group of companies. The website creation is still in progress.",
    image: "/png/projects/doeman.jpeg",
    link: "https://celestialwebsolutions.net/portfolio/doeman-group"
  },
  {
    title: "Finance Tracker",
    description: "A personal finance tracking web application that helps users manage their income, expenses, and budgets with intuitive visualizations and reporting features.",
    image: "/png/projects/finance-tracker.png",
    link: "https://celestialwebsolutions.net/portfolio/finance-tracker"
  },
  {
    title: "Celestial Shopping",
    description: "An E-Commerce Website built with Next.js/React and Django for seamless shopping experience with cart, checkout, and order tracking.",
    image: "/png/projects/celestial1.png",
    link: "https://celestialwebsolutions.net/portfolio/celestial-shopping"
  },
  {
    title: "Personal Portfolio Website",
    description: "A modern, animated personal portfolio website featuring dark mode toggle, smooth animations, project showcases, and contact functionality to highlight professional skills and experience.",
    image: "/png/projects/waliu-portfolio.png",
    link: "https://celestialwebsolutions.net/portfolio/personal-portfolio-website"
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Waliu Portfolio</title>
      </Head>
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
              {...(index === 0 ? { priority: true } : {})}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {project.description}
              </p>
              <div className="mt-3 text-blue-500 hover:text-blue-700 text-sm font-medium">
                View Detailed Project →
              </div>
            </div>
          </a>
        ))}
      </div>
      </section>
    </>
  );
}