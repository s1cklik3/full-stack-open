import { ReactElement } from "react";

const Header = (props: { name: string }): ReactElement => {
  const { name } = props;
  return <h1>{name}</h1>;
};

export default Header;
