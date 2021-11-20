import { useEffect, useState } from "react";

const useToCheckOutSideClick = (props: {
  ref: any;
  onClick: Function;
  dependencies;
}) => {
  const { ref, onClick, dependencies } = props;
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick(true);

        // if (!event.target.classList.include(exludeClass)) {
        //
        // }
        //console.log(event.target.classList);
        // outsideClick
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dependencies]);
};

export default useToCheckOutSideClick;
