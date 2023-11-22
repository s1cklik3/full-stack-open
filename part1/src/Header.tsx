import { ReactElement } from "react";

export const Header = (props: { name: string }): ReactElement => (
  <h1>{props.name}</h1>
);
