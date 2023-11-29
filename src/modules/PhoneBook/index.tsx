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
  const { loading, data, error } = PersonService.useFetchPersons();
  const [persons, setPersons] = useState<IPerson[]>([]);
  useEffect(() => {
    setPersons(data);
  }, [data]);

  if (loading) return <></>;

  if (error) return <></>;

  return (
    <>
      <h2>Phonebook</h2>
      <PersonFilter persons={persons} setPersons={setPersons}></PersonFilter>
      <PersonForm persons={persons} setPersons={setPersons}></PersonForm>
      <Persons persons={persons}></Persons>
    </>
  );
};

export default PhoneBook;
