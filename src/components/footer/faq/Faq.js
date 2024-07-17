import React, { useState } from "react";
import { questions } from "./questions";
import SingleQuestion from "./SingleQuestion";
import './faq.css';
export default function App() {
  const [cards] = useState(questions);

  return (
    <>
      <section className="max-w-xl mx-auto py-5 px-1">
        <h1 className="text-center font-bold">Frequently Asked Questions (FAQs)
        </h1>

        <section className="grid grid-cols-1 gap-8">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
    </>
  );
}