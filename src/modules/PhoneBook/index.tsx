import React, { ReactElement, useEffect, useState } from "react";

import useFetch from "../../hooks/useFetch";
import PersonFilter from "./PersonFilter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

export interface IPerson {
  id: number;
  name: string;
  number: string;
}

const PhoneBook = (): ReactElement => {
  const { isLoading, apiData, serverError } = useFetch(
    "http://localhost:3001/persons",
  );
  const [persons, setPersons] = useState<IPerson[]>([]);
  useEffect(() => {
    setPersons(apiData);
  }, [isLoading, apiData, serverError]);

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
