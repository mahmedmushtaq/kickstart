import dynamic from "next/dynamic";

const TopBar = dynamic(() => import("../src/components/Home/TopBar"));
const Header = dynamic(() => import("../src/components/Home/Header"));
const Projects = dynamic(() => import("../src/components/Home/Projects"));
const Working = dynamic(() => import("../src/components/Home/Working"));

const Home = () => {
  return (
    <div className="flex flex-col">
      <div>
        <TopBar />
      </div>
      <div className="h-full">
        <Header />
      </div>

      <div style={{ position: "relative" }}>
        <Projects />
      </div>
      <Working />

      <div className="mb-52" />
    </div>
  );
};

export default Home;
