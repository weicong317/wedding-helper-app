import { Link } from "react-router-dom";

const items = [
  { label: "Kuching 古晋", to: "/kuching" },
  { label: "Ipoh 怡保", to: "/ipoh" },
];

const Homepage = () => {
  return (
    <main className="h-screen w-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 grid-rows-2 h-full w-full gap-4 p-0">
        {items.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={`
              flex flex-col items-center justify-center
              w-full h-full
              rounded-3xl
              bg-gradient-to-br from-blue-400 to-cyan-400
              text-white
              shadow-md
              transition-all duration-300
              hover:scale-105 hover:shadow-xl
            `}
          >
            <span className="text-3xl font-bold">{label}</span>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Homepage;
