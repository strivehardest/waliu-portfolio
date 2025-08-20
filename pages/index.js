export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <h1 className="text-5xl font-bold">Hi, I'm Waliu 👋</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
        I'm a web developer passionate about creating fast, modern, and secure
        applications. Welcome to my portfolio!
      </p>
      <a
        href="/projects"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        View My Work
      </a>
    </section>
  );
}