export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Create mailto link with form data
    const subject = `Service Request from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    const mailtoLink = `mailto:ibrahimah2011@hotmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <section className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Require My Services</h1>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
        Ready to bring your project to life? Let's discuss how I can help you create amazing web solutions.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              name="message"
              rows="5"
              placeholder="Tell me about your project or service requirements..."
              required
            />
            <button 
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information & Quick Contact */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <div>
                <p className="font-medium">Email</p>
                <a 
                  href="mailto:ibrahimah2011@hotmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  ibrahimah2011@hotmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <div>
                <p className="font-medium">WhatsApp</p>
                <a 
                  href="https://wa.me/233530505031?text=Hi%20Waliu,%20I'm%20interested%20in%20your%20web%20development%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  +233 53 050 5031
                </a>
              </div>
            </div>

            {/* Quick WhatsApp Button */}
            <a
              href="https://wa.me/233530505031?text=Hi%20Waliu,%20I'm%20interested%20in%20your%20web%20development%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 font-medium w-full"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Services offered */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Services I Offer:</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>✓ Custom Web Development</li>
              <li>✓ React & Next.js Applications</li>
              <li>✓ WordPress Websites</li>
              <li>✓ E-commerce Solutions</li>
              <li>✓ Portfolio & Business Websites</li>
              <li>✓ Website Maintenance & Updates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}