import { ReactElement } from "react";

export interface IPerson {
  id: number;
  name: string;
  number: string;
}

const Person = ({ persons }: { persons: IPerson[] }): ReactElement => {
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
