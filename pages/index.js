import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
const ParticlesBackground = dynamic(() => import("../components/ParticlesBackground"), { ssr: false });
import TypingEffect from "../components/TypingEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Waliu Portfolio</title>
      </Head>
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">
        <ParticlesBackground />
      {/* HERO SECTION */}
      <section className="container-custom flex flex-col items-center justify-center min-h-[70vh] text-center py-20 relative z-10">
        <h1 className="heading-large mb-4">
          <TypingEffect
            phrases={[
              "I Design & Develop Web and Mobile Apps for Your Business",
              "Web Development | E-Commerce | SEO | UI/UX | Automation",
              "Modern, Fast, and Scalable Digital Solutions",
              "Let's Grow Your Business Online"
            ]}
            className="block text-blue-700 dark:text-blue-300 font-bold text-3xl md:text-5xl min-h-[3.5rem]"
          />
        </h1>
        <p className="body-large max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
          I am a professional web designer and developer in Ghana, helping businesses grow online with modern, responsive, and SEO-friendly websites.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a href="/projects" className="btn-primary">View  Work</a>
          <a href="/contact" className="btn-secondary">Start Your Project</a>
        </div>
        {/* Client logos removed as requested */}
      </section>

      {/* SERVICES SECTION */}
      <section className="container-custom py-16">
        <h2 className="heading-medium mb-8 text-center">My Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card-light p-6 flex flex-col items-center text-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Web Development" className="w-12 h-12 mb-3" />
            <h3 className="heading-small mb-2">Web Development</h3>
            <p className="body-normal">Custom websites, business sites, and web applications built for performance and scalability.</p>
          </div>
          <div className="card-light p-6 flex flex-col items-center text-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Web Design" className="w-12 h-12 mb-3" />
            <h3 className="heading-small mb-2">Web Design</h3>
            <p className="body-normal">Modern, user-friendly, and visually engaging designs that reflect your brand and drive conversions.</p>
          </div>
          <div className="card-light p-6 flex flex-col items-center text-center">
            <img src="https://cdn.worldvectorlogo.com/logos/shopify.svg" alt="E-Commerce" className="w-12 h-12 mb-3" />
            <h3 className="heading-small mb-2">E-Commerce Solutions</h3>
            <p className="body-normal">Online stores, secure payments, and product management systems for growing your business online.</p>
          </div>
          <div className="card-light p-6 flex flex-col items-center text-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="SEO Optimization" className="w-12 h-12 mb-3" />
            <h3 className="heading-small mb-2">SEO Optimization</h3>
            <p className="body-normal">On-page SEO, keyword research, and technical optimization to boost your Google rankings.</p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className="container-custom py-16">
        <h2 className="heading-medium mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-light p-6 flex flex-col md:flex-row items-center gap-6">
            <img src="https://www.celestialwebsolutions.net/_next/image?url=%2Fpng%2Fprojects%2Fmyspace-furniture.png&w=640&q=75" alt="My Space Furniture" className="w-40 h-32 object-cover rounded-lg" />
            <div>
              <h3 className="heading-small mb-2">My Space Furniture</h3>
              <p className="body-normal mb-2">Modern furniture platform with interactive categories and e-commerce features.</p>
              <a href="https://www.celestialwebsolutions.net/portfolio/myspace-furniture" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">View Project</a>
            </div>
          </div>
          <div className="card-light p-6 flex flex-col md:flex-row items-center gap-6">
            <img src="https://www.celestialwebsolutions.net/_next/image?url=%2Fpng%2Fprojects%2Ffinance-tracker.png&w=640&q=75" alt="Finance Tracker" className="w-40 h-32 object-cover rounded-lg" />
            <div>
              <h3 className="heading-small mb-2">Finance Tracker</h3>
              <p className="body-normal mb-2">Personal finance tracking app for managing income, expenses, and budgets.</p>
              <a href="https://www.celestialwebsolutions.net/portfolio/finance-tracker" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">View Project</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="/projects" className="btn-secondary">View All Projects</a>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="container-custom py-16">
        <h2 className="heading-medium mb-8 text-center">My Technology Stack</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'WooCommerce', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg' },
            { name: 'Shopify', icon: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
            { name: 'Paystack', icon: 'https://website-v3-assets.s3.amazonaws.com/assets/img/hero/Paystack-mark-white-twitter.png' },
            { name: 'Flutterwave', icon: 'https://play-lh.googleusercontent.com/qIVVU7H--GiVAPbvasD1kIdmiDaRroK3J5g5uYdd-O8XHlC_MwSro1JhZRe06l18FIc=w480-h960-rw' },
            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
            { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            { name: 'TailwindCSS', icon: 'https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png' },
            { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
            { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
          ].map((tech) => (
            <span key={tech.name} className="flex flex-col items-center gap-2 px-3 py-2 bg-white/80 dark:bg-gray-800/80 text-blue-900 dark:text-blue-200 rounded-lg text-xs font-medium shadow w-24">
              <img src={tech.icon} alt={tech.name + ' icon'} className="w-8 h-8 mx-auto" />
              {tech.name}
            </span>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="container-custom py-16">
        <h2 className="heading-medium mb-8 text-center">What My Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-light p-6 flex flex-col gap-3">
            <p className="body-normal italic">"Working with Celestial Web Solutions was incredible! They transformed our outdated website into a modern, user-friendly platform. Our online sales have increased by 200% since the launch."</p>
            <div>
              <span className="font-semibold">REV. FRANK NTOW GYAN</span><br />
              <span className="text-xs text-gray-500">CEO - BUILDING PLANNER DESIGNS LIMITED</span>
            </div>
          </div>
          <div className="card-light p-6 flex flex-col gap-3">
            <p className="body-normal italic">"Excellent web development company! Celestial Web Solutions helped me in creating a personal website."</p>
            <div>
              <span className="font-semibold">ELOLO AGBLEKE</span><br />
              <span className="text-xs text-gray-500">PROGRAM MANAGER, COO - KETA INSTITUTE OF TECHNOLOGY</span>
            </div>
          </div>
          <div className="card-light p-6 flex flex-col gap-3">
            <p className="body-normal italic">"Celestial Web Solutions was professional, responsive, and easy to work with. They understood my requirements clearly and delivered quality work on time. Communication was smooth, and any feedback was handled quickly. I'd definitely recommend them to anyone looking for reliable web solutions."</p>
            <div>
              <span className="font-semibold">AKARI KEV</span><br />
              <span className="text-xs text-gray-500">CLIENT - GHANA</span>
            </div>
          </div>
          <div className="card-light p-6 flex flex-col gap-3">
            <p className="body-normal italic">"Celestial Web Solutions team did a great job on our websites. They always finish each project in record time. Their continuous tech support and updating of pages is just excellent. Highly recommended."</p>
            <div>
              <span className="font-semibold">PAUL DICKENS DOE</span><br />
              <span className="text-xs text-gray-500">CLIENT - MY SPACE FURNITURE</span>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="container-custom py-16">
        <h2 className="heading-medium mb-8 text-center">Latest Blog Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-light p-6 flex flex-col md:flex-row items-center gap-6">
            <img src="https://images.unsplash.com/photo-1658297063569-162817482fb6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="How to Start an Online Store in Ghana" className="w-40 h-32 object-cover rounded-lg" />
            <div>
              <h3 className="heading-small mb-2">How to Start an Online Store in Ghana: A Quick Guide</h3>
              <p className="body-normal mb-2">Learn the essential steps to launch your online store in Ghana, from choosing a platform to setting up payment methods and driving your first sales.</p>
              <a href="https://www.celestialwebsolutions.net/blog/how-to-start-online-store-ghana" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Read More</a>
            </div>
          </div>
          <div className="card-light p-6 flex flex-col md:flex-row items-center gap-6">
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop" alt="Top 15 AI Tools Revolutionizing Web Development in 2026" className="w-40 h-32 object-cover rounded-lg" />
            <div>
              <h3 className="heading-small mb-2">Top 15 AI Tools Revolutionizing Web Development in 2026</h3>
              <p className="body-normal mb-2">Explore the latest AI-powered tools transforming web development. From code generation to design automation, discover how AI is making development faster and more efficient.</p>
              <a href="https://www.celestialwebsolutions.net/blog/ai-tools-web-development-2026" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Read More</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="https://www.celestialwebsolutions.net/blog" target="_blank" rel="noopener" className="btn-secondary">View All Articles</a>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 mt-10 border-t border-gray-200 dark:border-gray-800">
        {/* Footer content removed as requested */}
      </footer>
    </div>
    </>
  );
}