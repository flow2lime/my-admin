import * as React from "react";

interface GreetingProps {
  name: string;
}
// Defining the <Greeting> component
const Greeting = (props: GreetingProps) => {
  console.log(props);
  return <p>Hi {props.name}!</p>;
};

export default Greeting;
