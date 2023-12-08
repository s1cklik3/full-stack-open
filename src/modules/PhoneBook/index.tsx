import { AxiosResponse } from "axios";
import React, { ReactElement, useEffect, useState } from "react";

import Error from "@components/Error";
import PersonService from "@services/person.service";
import Notification from "@components/Notification";

import PersonFilter from "./PersonFilter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

export interface IPerson {
  id: number;
  name: string;
  number: string;
}

const PhoneBook = (): ReactElement => {
  const [error, setError] = useState<string | null>(null);
  const [persons, setPersons] = useState<IPerson[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    PersonService.fetchPersons()
      .then(({ data: persons }: AxiosResponse) => setPersons(persons))
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <>
      <h2>Phonebook</h2>
      <Error message={error}></Error>
      <Notification message={notification}></Notification>
      <PersonFilter persons={persons} setPersons={setPersons}></PersonFilter>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setNotification={setNotification}
        setError={setError}
      ></PersonForm>
      <Persons
        persons={persons}
        setPersons={setPersons}
        setError={setError}
      ></Persons>
    </>
  );
};

export default PhoneBook;
