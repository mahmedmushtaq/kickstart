import { useEffect, useState } from "react";
import PropTypes from "./ProptType";

export default (props: PropTypes) => {
  const { children, className, color, variant } = props;
  const [buttonColor, setButtonColor] =
    useState<PropTypes["color"]>("secondary");
  const [btnVariant, setBtnVariant] =
    useState<PropTypes["variant"]>("outlined");

  useEffect(() => {
    if (!color) return;
    setButtonColor(color);
  }, [color]);

  useEffect(() => {
    if (!variant) return;

    setBtnVariant(variant);
  }, [variant]);

  return (
    <button
      className={`${className} xl3:text-3xl xl3:p-7 rounded-2xl py-3 px-6 border-2 border-${buttonColor} text-lg ${
        btnVariant === "contained"
          ? `text-white bg-${buttonColor} hover:text-${
              buttonColor === "primary" ? "secondary" : "primary"
            }`
          : ""
      }`}
    >
      {children}
    </button>
  );
};
