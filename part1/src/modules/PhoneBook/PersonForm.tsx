import {
  Dispatch,
  FormEvent,
  ReactElement,
  SetStateAction,
  useState,
} from "react";
import { IPerson } from "./Persons";

const PersonForm = ({
  persons,
  setPersons,
}: {
  persons: IPerson[];
  setPersons: Dispatch<
    SetStateAction<{ name: string; number: string; id: number }[]>
  >;
}): ReactElement => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    persons.push({ name, number, id: persons.length + 1 });
    setPersons([...persons]);
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
