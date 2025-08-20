import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="text-center py-4 bg-gray-100 dark:bg-gray-800 dark:text-gray-300">
        © {new Date().getFullYear()} Waliu  | Full Stack Web Developer
      </footer>
    </div>
  );
}