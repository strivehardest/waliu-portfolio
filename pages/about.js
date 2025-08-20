import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/png/profile/waliu-profile.jpg" // Update this path to your actual profile picture
              alt="Waliu Ibrahimah Aforlabi"
              fill
              className="rounded-full object-cover shadow-lg"
              priority
            />
          </div>
          
          {/* Contact & Social Links */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Let's Connect:</h3>
            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <a 
                  href="mailto:ibrahimah2011@hotmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  E-Mail Me
                </a>
              </div>
              
              {/* Social Media Links */}
              <div className="flex items-center gap-4 mt-4">
                {/* GitHub */}
                <a
                  href="https://github.com/strivehardest" // Replace with your actual GitHub username
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  
                </a>
                
                {/* Facebook */}
                <a
                  href="https://facebook.com/aforlabi" // Replace with your actual Facebook profile
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  
                </a>
                
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/aforlabi" // Replace with your actual LinkedIn profile
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  
                </a>
                
                {/* X (formerly Twitter) */}
                <a
                  href="https://twitter.com/strivehardest" // Replace with your actual Twitter handle
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                  
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* About Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6 text-center md:text-left">About Me</h1>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Hi! I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Waliu Ibrahimah Aforlabi</span>, 
              a passionate web developer and designer also aspiring to be a cybersecurity professional based in Ghana. 
              I specialize in creating modern, responsive web applications that deliver exceptional user experiences.
            </p>
            
            <p>
              With expertise in <span className="font-medium">React, Next.js, JavaScript, and modern web technologies</span>, 
              I've had the privilege of working on diverse projects ranging from business portfolio websites 
              to news platforms and e-commerce solutions. Each project challenges me to push the boundaries 
              of what's possible on the web.
            </p>
            
            <p>
              Beyond web development, I'm deeply interested in cybersecurity and continuously expanding my knowledge 
              in this critical field. I believe that secure, scalable applications are the foundation of 
              today's digital world, and I'm committed to building solutions that users can trust.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects, 
              or sharing knowledge with the developer community. I'm always excited to collaborate on innovative 
              projects that make a positive impact.
            </p>
          </div>
          
          {/* Skills/Technologies */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Technologies I Work With:</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'JavaScript', 'Django', 'HTML', 'CSS', 'WordPress', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Git', 'Vercel', 'Github'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}