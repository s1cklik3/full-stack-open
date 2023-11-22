import { ReactElement } from "react";

export const Header = (props: { name: string }): ReactElement => {
  const { name } = props;
  return <h1>{name}</h1>;
};
