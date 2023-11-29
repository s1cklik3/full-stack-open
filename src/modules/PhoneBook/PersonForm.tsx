import React, {
  Dispatch,
  FormEvent,
  ReactElement,
  SetStateAction,
  useState,
} from "react";

import { IPerson } from "./index";
import PersonService from "@services/person.service";

const personExists = (persons: IPerson[], name: string) =>
  persons.filter((person: IPerson) => person.name.trim() === name.trim());

const confirmed = (name: string) =>
  window.confirm(
    `${name} is already added to phonebook, replace the old number with a new one?`,
  );

const personToUpdate = (persons: IPerson[], updatedPerson: IPerson) =>
  Object.assign(
    persons[
      persons.findIndex((person: IPerson) => person.id === updatedPerson.id)
    ],
    updatedPerson,
  );

const PersonForm = ({
  persons,
  setPersons,
}: {
  persons: IPerson[];
  setPersons: Dispatch<SetStateAction<IPerson[]>>;
}): ReactElement => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const [existingPerson] = personExists(persons, name);

    if (existingPerson && confirmed(name)) {
      PersonService.updatePerson({ ...existingPerson, number })
        .then((updatedPerson: IPerson) => {
          personToUpdate(persons, updatedPerson);
          setPersons([...persons]);
        })
        .catch((error) => {
          setError(error);
        });

      return;
    }

    PersonService.createPerson({ name, number, id: persons.length + 1 })
      .then((createdPerson: IPerson) => {
        persons.push(createdPerson);
        setPersons([...persons]);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleNameChange = (event: { target: HTMLInputElement }) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event: { target: HTMLInputElement }) => {
    setNumber(event.target.value);
  };

  if (error) return <></>;

  return (
    <form onSubmit={handleSubmit}>
      <h1>add a new</h1>
      <div>
        name: <input onChange={handleNameChange} />
      </div>
      <div>
        number: <input onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
