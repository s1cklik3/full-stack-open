import axios from "axios";
import { IPerson } from "@/modules/PhoneBook";

const baseUrl = "http://localhost:3001/persons";

const fetchPersons = async () => await axios.get(baseUrl);

const createPerson = async (person: Partial<IPerson>) =>
  await axios.post(baseUrl, person);
const deletePerson = async (id: number) =>
  await axios.delete(`${baseUrl}/${id}`);

const updatePerson = async (person: Partial<IPerson>) =>
  await axios.put(`${baseUrl}/${person.id}`, person);

export default { createPerson, deletePerson, fetchPersons, updatePerson };
