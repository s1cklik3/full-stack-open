import React, { ReactElement, useEffect, useState } from "react";

import PersonService from "@services/person.service";

import PersonFilter from "./PersonFilter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

export interface IPerson {
  id: number;
  name: string;
  number: string;
}

const PhoneBook = (): ReactElement => {
  const [error, setError] = useState(null);
  const [persons, setPersons] = useState<IPerson[]>([]);

  useEffect(() => {
    PersonService.fetchPersons()
      .then((persons: IPerson[]) => setPersons(persons))
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return <></>;

  return (
    <>
      <h2>Phonebook</h2>
      <PersonFilter persons={persons} setPersons={setPersons}></PersonFilter>
      <PersonForm persons={persons} setPersons={setPersons}></PersonForm>
      <Persons persons={persons} setPersons={setPersons}></Persons>
    </>
  );
};

export default PhoneBook;
