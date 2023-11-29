import axios from "axios";
import { IPerson } from "@/modules/PhoneBook";

const baseUrl = "http://localhost:3001/persons";

const fetchPersons = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createPerson = async (person: Partial<IPerson>) => {
  const response = await axios.post(baseUrl, person);
  return response.data;
};

const deletePerson = async (id: number) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

const updatePerson = async (person: Partial<IPerson>) => {
  const response = await axios.put(`${baseUrl}/${person.id}`, person);
  return response.data;
};

export default { createPerson, deletePerson, fetchPersons, updatePerson };
