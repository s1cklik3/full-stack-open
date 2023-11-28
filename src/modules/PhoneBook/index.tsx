import React, { ReactElement, useState } from "react";

import useFetchAndSetApiData from "../../hooks/useFetchAndSetApiData";
import PersonFilter from "./PersonFilter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

export interface IPerson {
  id: number;
  name: string;
  number: string;
}

const PhoneBook = (): ReactElement => {
  const [persons, setPersons] = useState<IPerson[]>([]);
  const { isLoading } = useFetchAndSetApiData(
    "http://localhost:3001/persons",
    setPersons,
  );

  return isLoading ? (
    <></>
  ) : (
    <>
      <h2>Phonebook</h2>
      <PersonFilter persons={persons} setPersons={setPersons}></PersonFilter>
      <PersonForm persons={persons} setPersons={setPersons}></PersonForm>
      <Persons persons={persons}></Persons>
    </>
  );
};

export default PhoneBook;
