import { ReactElement } from "react";
import { Part } from "./Part";

export const Content = (props: {
  parts: { name: string; exercises: number }[];
}): ReactElement => (
  <div>
    <Part></Part>
    <Part></Part>
    <Part></Part>
  </div>
);
