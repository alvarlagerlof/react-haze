import React from "react";
import Haze from "../";

import "./style.css";

function Row() {
  return (
    <Haze orientation="horizontal">
      <ul className="row">
        <Place
          imageUrl="https://images.unsplash.com/photo-1565755952890-f84d8af19d2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
          title="Mallorca"
          description="Veniam commodo aute laborum commodo eiusmod laborum reprehenderit culpa."
        />
        <Place
          imageUrl="https://images.unsplash.com/photo-1542696417-7135dc6f9d7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
          title="Sardinia"
          description="Esse cupidatat pariatur cupidatat ut tempor et occaecat velit sint. Officia aliquip dolore ea."
        />
        <Place
          imageUrl="https://images.unsplash.com/photo-1523365154888-8a758819b722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80"
          title="Sciciliy"
          description="Adipisicing cupidatat esse aliquip mollit aliqua eu dolore aute cillum cupidatat qui aute."
        />
        <Place
          imageUrl="https://images.unsplash.com/photo-1565755952890-f84d8af19d2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
          title="Mallorca"
          description="Veniam commodo aute laborum commodo eiusmod laborum reprehenderit culpa."
        />
        <Place
          imageUrl="https://images.unsplash.com/photo-1542696417-7135dc6f9d7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
          title="Sardinia"
          description="Esse cupidatat pariatur cupidatat ut tempor et occaecat velit sint. Officia aliquip dolore ea."
        />
        <Place
          imageUrl="https://images.unsplash.com/photo-1523365154888-8a758819b722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80"
          title="Sciciliy"
          description="Adipisicing cupidatat esse aliquip mollit aliqua eu dolore aute cillum cupidatat qui aute."
        />
      </ul>
    </Haze>
  );
}

function Section() {
  return (
    <section>
      <h1>Section title</h1>
      <Row />
    </section>
  );
}

type PlaceProps = {
  imageUrl: string;
  title: string;
  description: string;
};

function Place({ imageUrl, title, description }: PlaceProps) {
  return (
    <li>
      <img src={imageUrl} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

export default function ExampleContent() {
  return (
    <main>
      <Section />
      <Section />
      <Section />
    </main>
  );
}
