import * as React from "react";

type GreetProps = {
  name: string;
};

export function Greet({ name }: GreetProps) {
  return <p>Hello there, {name}</p>;
}
