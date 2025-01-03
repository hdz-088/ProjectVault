/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { Inter: ["Inter", "serif"] },
      backgroundImage: {
        "radial-pattern": `radial-gradient(circle at center, rgba(254, 254, 254, 0.189) 0.05rem, transparent 0)`,
      },
      backgroundSize: {
        "custom-small": "0.5rem 0.5rem",
      },
      backgroundPosition: {
        "custom-offset": "0 0, 0.35rem 0.35rem",
      },
      maskImg: {
        "mask-image": "linear-gradient(rgb(0 0 0), rgb(0 0 0 / 0))",
      },
    },
  },
  plugins: [],
};
