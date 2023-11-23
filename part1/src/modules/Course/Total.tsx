import { ReactElement } from "react";

const Total = (props: {
  parts: { name: string; exercises: number }[];
}): ReactElement => {
  const { parts } = props;
  const total = parts.reduce((acc, part) => acc + part.exercises, 0);
  return <p>Number of exercises {total}</p>;
};

export default Total;
