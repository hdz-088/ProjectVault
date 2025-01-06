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
      linkIcon: {
        color: "#7c7c7c",
        "background-color": "#1c1c1c",
        border: "1px solid #3d3d3d91",
        "border-radius": "7px",
      },
    },
  },
  plugins: [],
};
