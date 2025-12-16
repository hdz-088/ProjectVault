import "./index.css";
import Links from "./components/Links";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center py-24 px-6 md:px-12 lg:px-24">
      {/* Hero Section */}
      <div className="flex flex-col items-center max-w-3xl text-center gap-8 mb-24 animate-fade-in-down">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <img
            src="/skipper.png"
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 object-cover shadow-2xl"
            alt="Profile"
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 tracking-tight">
            Harshdeepsinh Zala
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl leading-relaxed">
            Student Developer learning MERN, Data Science and JAVA eager to step
            into the ever-changing world of Technology
          </p>
        </div>

        {/* Socials & Actions */}
        <div className="flex flex-col items-center gap-6 w-full">
           <Links />
           <div className="flex flex-wrap gap-4 justify-center w-full">
            <a
              href="https://hdzala.vercel.app/"
              className="glass glass-hover px-8 py-3 rounded-full font-medium text-white/90 flex items-center gap-2"
            >
              View Portfolio
            </a>
            <a
              href="mailto:hdz088@outlook.com"
              className="px-8 py-3 rounded-full font-medium text-white/60 hover:text-white border border-transparent hover:border-white/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <main className="w-full max-w-7xl flex flex-col gap-12 mb-24">
        <div className="flex items-center gap-4 text-white/40 font-medium tracking-widest text-sm uppercase">
          <span className="w-12 h-[1px] bg-white/10"></span>
          Selected Works
        </div>
        <Cards />
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-8 border-t border-white/5">
        <p className="text-sm text-white/30 hover:text-white/50 transition-colors">
          Designed & Built by{" "}
          <a
            href="https://github.com/hdz-088"
            className="font-semibold text-white/60 hover:text-white transition-colors"
          >
            HDz
          </a>
          <span className="ml-2">🦉</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
