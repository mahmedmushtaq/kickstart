import { useEffect, useState } from "react";
import useWidthMediaQuery from "../../../hooks/useWidthMediaQuery";
import Button from "../../UIComponents/Button";

export default () => {
  const { xl } = useWidthMediaQuery();
  const [backgroundImage, setBackgroundImage] = useState(undefined);

  useEffect(() => {
    if (xl) {
      setBackgroundImage(undefined);
      return;
    }
    setBackgroundImage("url(bg.jpg) no-repeat");
  }, [xl]);

  return (
    <div
      className="grid xs:grid-cols-1 xl:grid-cols-2 gap-2 block relative"
      style={{
        background: backgroundImage,
        width: "100%",
        height: backgroundImage ? "70vh" : undefined,
        backgroundSize: backgroundImage ? "cover" : undefined,
      }}
    >
      {!backgroundImage && (
        <div className="block relative h-full w-full">
          <img src="bg2.jpg" className="w-screen mx-auto w-full h-full block" />
        </div>
      )}

      <div className="flex items-center font-gilroyBold xs:text-white xl:text-black xl:w-4/5 mx-auto ">
        <div className="text-center mx-auto xs:w-4/5 xl:w-full">
          <div className="xs:text-5xl sm:text-7xl 2xl:text-8xl xl3:text-9xl">
            <h2>
              Invest <span className="text-secondary">In</span> The{" "}
            </h2>
            <h2>
              <span className="text-secondary">Top</span> Trends{" "}
            </h2>
          </div>
          <p className="mt-8 w-4/5 mx-auto font-gilroy md:mt-4 xs:text-sm sm:text-base xl3:text-2xl">
            AR/VR is the leading trends of the new era of the technologies.
            Thousands of startups daily launching. This is the golden
            opportunity for you to launch and invest in AR/VR. We will will help
            during your proceedure
          </p>
          <div className="mt-10 flex gap-3 justify-center xs:flex-col md:flex-row xs:w-4/5 xs:mx-auto xl:w-full">
            <Button variant="contained">Funds For Projects</Button>

            <Button variant="contained" color="primary">
              Invest On Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
