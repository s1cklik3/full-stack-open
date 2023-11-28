import { ReactElement } from "react";

export const Part = (props: {
  part: { name: string; exercises: number };
}): ReactElement => {
  const { part } = props;
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};
