import { Header } from "./Header";
import { Content } from "./Content";
import { Total } from "./Total";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        id: 0,
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        id: 1,
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        id: 2,
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  );
};

export default App;