import { CSSProperties } from "react";
import useWidthMediaQuery from "../../../hooks/useWidthMediaQuery";
import Button from "../../UIComponents/Button";

const backgroundGifStyle = (gifName) => ({
  background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(${gifName}.gif) center`,
  backgroundSize: "cover",
  minHeight: 500,
  width: "100%",
});

export default () => {
  const { xs } = useWidthMediaQuery();
  return (
    <div className="">
      <div className="grid lg:grid-cols-3 xs:grid-cols-1 md:grid-cols-2 relative bg-opacity-50">
        <div
          style={{ ...backgroundGifStyle("gif1"), minHeight: xs ? 300 : 500 }}
        >
          2
        </div>
        <div
          className="xs:hidden sm:hidden md:block"
          style={{ ...backgroundGifStyle("gif4") }}
        >
          2
        </div>
        <div
          className="xs:hidden sm:hidden lg:block"
          style={{ ...backgroundGifStyle("gif2") }}
        >
          3
        </div>
        <div className="absolute w-full h-full  flex justify-center items-center">
          <div className="md:text-6xl text-white font-gilroyBold text-center xs:text-5xl">
            <h2>
              Explore The Top <br /> VR Projects
            </h2>
            <Button className="mt-10" variant="contained">
              Lets Explore
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
