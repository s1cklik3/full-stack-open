import { Dispatch, ReactElement, SetStateAction } from "react";
import { IPerson } from "./Persons";

const PersonFilter = ({
  persons,
  setPersons,
}: {
  persons: IPerson[];
  setPersons: Dispatch<
    SetStateAction<{ name: string; number: string; id: number }[]>
  >;
}): ReactElement => {
  const handlePersonFilter = (event: { target: HTMLInputElement }) => {
    console.log("persons", persons);

    const updatedPersons = persons.filter((person) => {
      return person.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setPersons(updatedPersons);
  };

  return (
    <>
      filter shown with <input onChange={handlePersonFilter} />
    </>
  );
};

export default PersonFilter;
