import { useState } from "react";
import { topBarItemsData as itemsData, content } from "./raw";
import TopBarButton from "../../UIComponents/Button";
import { Drawer } from "../../UIComponents";
import MobileMenuIcon from "./MobileMenuIcon";
import DrawerList from "./DrawerList";

export default () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <>
      <div className="px-10 xs:px-5 py-2">
        <div
          className={`sm:container  xl:w-9/12 flex justify-between my-3 xs:my-0 mx-auto items-center`}
        >
          <div>
            <img src="logo.png" width={150} />
          </div>
          {/* for tablets divide navbar into sections icon+item */}
          <div className="md:flex items-center xs:hidden sm:hidden md:w-8/12  lg:w-1/3 justify-between">
            {itemsData.map((item) => (
              <h2
                key={item.id}
                className="text-lg hover:text-secondary cursor-pointer font-gilroyBold"
              >
                {item.heading}
              </h2>
            ))}
            <TopBarButton
              className="lg:hidden"
              heading={content.registration}
            />
          </div>

          {/* for large screens divide navbar into 3 sections icon+item+buttons */}
          <div className="lg:flex xs:hidden sm:hidden items-center">
            <button
              className="mr-5 text-md text-lg hover:text-secondary cursor-pointer font-gilroyBold"
            >
              {content.signIn}
            </button>
            <TopBarButton heading={content.joinUs} />
          </div>

          {/* for mobiles */}
          <div className="sm:block  md:hidden">
            <MobileMenuIcon
              onClickHandler={toggleDrawer}
              showDrawer={showDrawer}
            />
          </div>
        </div>
      </div>
      <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer}>
        <DrawerList />
      </Drawer>
    </>
  );
};
