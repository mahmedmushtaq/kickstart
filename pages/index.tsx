import dynamic from "next/dynamic";

const TopBar = dynamic(() => import("../src/components/Home/TopBar"));
const Header = dynamic(() => import("../src/components/Home/Header"));

const Home = () => {
  return (
    <div>
      <TopBar />
      <Header />
    </div>
  );
};

export default Home;
