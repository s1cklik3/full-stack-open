import { ReactElement, useState } from "react";
import PersonForm from "./PersonForm";
import PersonFilter from "./PersonFilter";
import Persons from "./Persons";

const PhoneBook = (): ReactElement => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

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
