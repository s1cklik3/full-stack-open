import { ReactElement } from "react";
import { Part } from "../../Part";
import { IPart } from "./index";

const Content = (props: { parts: IPart[] }): ReactElement => {
  const { parts } = props;
  return (
    // Note: JSX elements directly inside a map() call always need keys!
    // Keys tell React which array item each component corresponds to,
    // so that it can match them up later. This becomes important if
    // your array items can move (e.g. due to sorting), get inserted,
    // or get deleted. A well-chosen key helps React infer what exactly
    // has happened, and make the correct updates to the DOM tree.
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part}></Part>
      ))}
    </div>
  );
};

export default Content;
