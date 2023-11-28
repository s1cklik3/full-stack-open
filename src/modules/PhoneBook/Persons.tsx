import { ReactElement } from "react";

import { IPerson } from "./index";

const Person = ({ persons }: { persons: IPerson[] | undefined }): ReactElement => {
  return (
    <>
      <h2>Numbers</h2>
      {persons?.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
        </li>
      ))}
    </>
  );
};

export default Person;
