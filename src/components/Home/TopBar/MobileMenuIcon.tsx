import Menu from "../../UIComponents/Icons/Menu";
import { Drawer } from "../../UIComponents";
import { MouseEventHandler, useState } from "react";

export default (props: {
  showDrawer: boolean;
  onClickHandler: Function | MouseEventHandler<SVGSVGElement>;
}) => {
  const { showDrawer, onClickHandler } = props;
  return (
    <>
      <Menu
        className={`open-navigation cursor-pointer`}
        topLineClassName={`origin-top-left trasition ease-in-out duration-1000 transform ${
          showDrawer ? "rotate-45 translate-x-2.5" : ""
        }`}
        midLineClassName={`trasition ease-in-out duration-1000 transform ${
          showDrawer ? "-translate-x-full" : "translate-x-0"
        }`}
        bottomLineClassName={`origin-bottom-left trasition ease-in-out duration-1000 transform ${
          showDrawer ? "-rotate-45 translate-x-2.5" : ""
        }`}
        size={34}
        onClick={onClickHandler as MouseEventHandler<SVGSVGElement>}
      />
    </>
  );
};
