import React, {
  useEffect,
  useState,
  CSSProperties,
  forwardRef,
  DetailedHTMLProps,
  useRef,
} from "react";
import useToCheckOutSideClick from "../../../hooks/useToCheckOutSideClick";
import PropTypes from "./PropTypes";

const fontStyle: CSSProperties = { fontFamily: "Gilroy-bold" };

export default (props: PropTypes) => {
  const { children, showDrawer, setShowDrawer } = props;
  const [drawerVisibility, setDrawerVisibility] =
    useState<string>("-translate-x-full"); // hide className

  const ref = useRef<HTMLDivElement>(null);

  useToCheckOutSideClick({
    ref,
    dependencies: [showDrawer],
    onClick: (value) => {
      if (showDrawer && value) {
        setShowDrawer(false);
      }
    },
  });

  useEffect(() => {
    const className = !!showDrawer ? "translate-x-0" : "-translate-x-full";
    setDrawerVisibility(className);
  }, [showDrawer]);

  return (
    <div className="overflow-hidden">
      <div
        style={fontStyle}
        className={`h-screen z-50 bg-transparent w-screen bg-red fixed top-0 trasition ease-in-out duration-1000 transform ${drawerVisibility}`}
      >
        <div ref={ref} className="h-full shadow w-36 p-3 bg-white ">
          {children}
        </div>
      </div>
    </div>
  );
};
