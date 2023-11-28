import { ReactElement } from "react";

import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

export interface IPart {
  id: number;
  name: string;
  exercises: number;
}

export interface ICourse {
  name: string;
  id: number;
  parts: IPart[];
}

const Course = ({ course }: { course: ICourse }): ReactElement => {
  return (
    <>
      <Header name={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </>
  );
};

export default Course;
