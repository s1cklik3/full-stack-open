import { Dispatch, ReactElement, SetStateAction } from "react";

import { IPerson } from "./index";

const PersonFilter = ({
  persons,
  setPersons,
}: {
  persons: IPerson[];
  setPersons: Dispatch<SetStateAction<IPerson[]>>;
}): ReactElement => {
  const handlePersonFilter = (event: { target: HTMLInputElement }) => {
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
