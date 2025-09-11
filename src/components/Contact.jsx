
import { Element } from "react-scroll";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-center relative">
      <h3 className="text-4xl font-extrabold text-blue-400 mb-6">
        Let’s Connect
      </h3>
      <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
        Have a project in mind or just want to say hi? <br /> 
        I’d love to hear from you.
      </p>

      {/* Contact Card */}
      <div className="bg-gray-900 max-w-md mx-auto rounded-2xl shadow-lg p-8 border border-gray-800">
        <a
          href="mailto:your@email.com"
          className="block w-full px-6 py-3 mb-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition"
        >
          📩 Say Hello
        </a>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition text-2xl"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition text-2xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 transition text-2xl"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Waleed Shahid. All rights reserved.
      </div>
    </section>
  );
}
