import React, {
  Dispatch,
  FormEvent,
  ReactElement,
  SetStateAction,
  useState,
} from "react";

import { IPerson } from "./index";
import PersonService from "@services/person.service";
import { AxiosResponse } from "axios";

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
  setNotification,
  setError,
}: {
  persons: IPerson[];
  setPersons: Dispatch<SetStateAction<IPerson[]>>;
  setNotification: Dispatch<SetStateAction<string | null>>;
  setError: Dispatch<SetStateAction<string | null>>;
}): ReactElement => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const [existingPerson] = personExists(persons, name);

    if (existingPerson && confirmed(name)) {
      PersonService.updatePerson({ ...existingPerson, number })
        .then(({ data: updatedPerson }: AxiosResponse) => {
          personToUpdate(persons, updatedPerson);
          setPersons([...persons]);
          setNotification(`Updated ${updatedPerson.name}`);
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        })
        .catch((error) => {
          setError(error);
        });

      return;
    }

    PersonService.createPerson({ name, number, id: persons.length + 1 })
      .then(({ data: createdPerson }: AxiosResponse) => {
        persons.push(createdPerson);
        setPersons([...persons]);
        setNotification(`Added ${createdPerson.name}`);
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      })
      .catch(() => {
        setError("Something went wrong!!!");
        setTimeout(() => {
          setError(null);
        }, 5000);
      });
  };

  const handleNameChange = (event: { target: HTMLInputElement }) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event: { target: HTMLInputElement }) => {
    setNumber(event.target.value);
  };

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
