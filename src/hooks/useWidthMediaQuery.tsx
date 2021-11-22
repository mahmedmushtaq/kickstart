import { useMediaQuery } from "react-responsive";

const useWidthMediaQuery = () => {
  const xs = useMediaQuery({ query: "(min-width: 325px)" });
  const sm = useMediaQuery({ query: "(min-width: 640px)" });

  const md = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const lg = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const xl = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  const xxl = useMediaQuery({
    query: "(min-width: 1536px)",
  });

  const xxxl = useMediaQuery({
    query: "(min-width: 2500px)",
  });
  return { xs, sm, md, lg, xl, xxl, xxxl };
};

export default useWidthMediaQuery;
