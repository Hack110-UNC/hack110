import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Workshops() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-900 via-orange-500 to-teal-300 text-white">
      {/* Header */}
      <header className="fixed w-full bg-black bg-opacity-50 backdrop-blur-md z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center cursor-pointer">
            <span className="text-2xl font-bold">HACK 110</span>
          </Link>
          
          <nav>
            <ul className="grid grid-cols-2 sm:flex sm:flex-row sm:gap-8 gap-1 items-center text-lg">
              <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
              <li><Link to="/map" className="hover:text-blue-400 transition">Map</Link></li>
              <li><Link to="/workshops" className="hover:text-blue-400 transition">Workshops</Link></li>
              <li className="col-span-2 text-center">
                <Link to="https://forms.gle/M8X9kedHngwkSej38" className="text-blue-400 font-bold hover:text-blue-300 transition">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Workshops Section */}
      <motion.section 
        className="pt-32 pb-16 px-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-12">Workshops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { time: "10:30 - 11:00 AM", room: "SN 014", workshop: "Team Building Event" },
            { time: "10:30 - 11:00 AM", room: "SN 011", workshop: "Project + Git Setup" },
            { time: "12:00 - 1:00 PM", room: "SN 014", workshop: "Web Development" },
            { time: "12:00 - 1:00 PM", room: "SN 011", workshop: "Game Development" },
            { time: "1:00 - 2:00 PM", room: "SN 115", workshop: "IOS Development " },
            { time: "1:30 - 2:00 PM", room: "SN 014", workshop: "Resume Workshop" },
            { time: "2:00 - 5:00 PM", room: "FB 009", workshop: "Escape Room" },
            { time: "3:00 - 3:30 PM", room: "SN 115", workshop: "CS Outside the Classroom" },
            { time: "3:30 - 4:00 PM", room: "SN 014", workshop: "Machine Learning/AI Workshop" },
            { time: "4:00 - 7:00 PM", room: "FB 007", workshop: "Poker" },
            { time: "6:00 - 6:30 PM", room: "SN 011", workshop: "Navigating The Major" },
            { time: "6:30 - 7:00 PM", room: "SN 014", workshop: "Leetcode Workshop" },
            { time: "7:00 - 8:00 PM", room: "SN 115", workshop: "Kahoot Trivia" },
          ].map((shop, i) => (
            <motion.div 
              key={i} 
              className="bg-white text-black rounded-lg p-6 shadow-lg hover:scale-105 transition transform" 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <div className="text-xl font-semibold mb-2">{shop.time}</div>
              <div className="text-lg font-medium text-gray-700 mb-4">{shop.room}</div>
              <div className="text-xl font-bold text-blue-500">{shop.workshop}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <footer className="py-10 bg-black bg-opacity-70">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
             
                            <span className="font-bold">HACK 110</span>
                        </div>
                        <div className="text-sm text-gray-400">
                            © {new Date().getFullYear()} Team 110. All rights reserved.
                        </div>
                        <div className="mt-6 md:mt-0 flex gap-4">
                            <a href="https://github.com/Hack110-UNC" className="hover:text-blue-400 transition">
                                <span className="sr-only">GitHub</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/hack110_unc/" className="hover:text-blue-400 transition">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
    </div>
    
  );
}
