import { MouseEventHandler } from "react";

export default (props: {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
  topLineClassName?: string;
  bottomLineClassName?: string;
  midLineClassName?: string;
  color?: string;
  size?: number;
}) => {
  const {
    topLineClassName,
    midLineClassName,
    bottomLineClassName,
    className,
    size,
    onClick,
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? "24"}
      height={size ?? "24"}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
      viewBox="0 0 24 24"
      onClick={onClick}
      style={{ overflow: "hidden" }}
    >
      <path className={midLineClassName} d="M3 12L20 12"></path>
      <path className={topLineClassName} d="M3 6L20 6"></path>
      <path className={bottomLineClassName} d="M3 18L20 18"></path>
    </svg>
  );
};
