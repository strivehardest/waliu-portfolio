import "/styles/globals.css";
import Layout from "../components/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { pageTransitions } from "../utils/pageTransitions";
import localFont from 'next/font/local';

// Load Neue Machina font
const neueMachina = localFont({
  src: [
    {
      path: '../public/fonts/NeueMachina-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueMachina-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-neue-machina',
  display: 'swap',
  fallback: ['Helvetica Neue', 'Arial', 'sans-serif'],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const transition =
    pageTransitions[router.route === "/" ? "home" : router.route.replace("/", "")] ||
    pageTransitions.home;

  return (
    <div className={`${neueMachina.variable} font-neue-machina`}>
      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.route}
            initial={transition.initial}
            animate={transition.animate}
            exit={transition.exit}
            transition={transition.transition}
            className="bg-light-primary dark:bg-dark-primary 
                       text-light-primary dark:text-dark-primary 
                       min-h-screen transition-colors duration-300"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </div>
  );
}
