import React, {
  Dispatch,
  FormEvent,
  ReactElement,
  SetStateAction,
  useState,
} from "react";

import { IPerson } from "./index";
import PersonService from "@services/person.service";

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
