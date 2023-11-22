import { ReactElement } from "react";

export const Total = (props: {
  parts: { name: string; exercises: number }[];
}): ReactElement => {
  const { parts } = props;
  return (
    <p>
      Number of exercises {parts.reduce((acc, part) => acc + part.exercises, 0)}
    </p>
  );
};
