import { Dispatch, ReactElement, SetStateAction, useState } from "react";

import { IPerson } from "./index";
import PersonService from "@services/person.service";

const Person = ({
  persons,
  setPersons,
}: {
  persons: IPerson[];
  setPersons: Dispatch<SetStateAction<IPerson[]>>;
}): ReactElement => {
  const [error, setError] = useState(null);
  const handleDeletePerson = (person: IPerson): void => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      PersonService.deletePerson(person.id)
        .then(() => {
          setPersons([
            ...persons.filter(
              (deletedPerson: IPerson) => deletedPerson.id !== person.id,
            ),
          ]);
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  if (error) return <></>;

  return (
    <>
      <h2>Numbers</h2>
      {persons?.map((person: IPerson) => (
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleDeletePerson(person)}>delete</button>
        </li>
      ))}
    </>
  );
};

export default Person;
