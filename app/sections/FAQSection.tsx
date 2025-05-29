"use client";

import { useState } from "react";
import Section from "./Section";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "What is Hack Nights?",
    a: "Hack Nights is a weekly event at the UC Davis Student Startup Center offering three hours of dedicated time for students to work on their own projects and collaborate with others, fueled by free food and drinks.",
  },
  {
    q: "Do I need to know how to code?",
    a: "Nope, you don't need to know how to code to attend!",
  },
  {
    q: "Who can participate? Are there any requirements?",
    a: "Any UC Davis student is welcome, from complete beginners to seasoned hackers. No prior experience or finished project is required, just bring your curiosity and leave class assignments or club deliverables at home.",
  },
  {
    q: "How do I register?",
    a: "You can register for free on our webiste! Just go to ucdhacknight.com.",
  },
  {
    q: "Do I have to attend every week?",
    a: "No. Hack Nights are drop-in; come whenever you're free.",
  },
];

function FAQItem({ q, a }: QA) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-md border border-gray-200 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between p-4 text-left font-medium transition-colors hover:bg-gray-50 ${
          open ? "border-b border-gray-200" : "rounded-md"
        }`}
      >
        {q}
        <span className="text-xl leading-none">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="p-4 text-gray-700">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <Section id="faq" bg="bg-[#FEFFF3]">
      <div className="mx-auto w-full max-w-3xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold text-brand-dark">
          FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <FAQItem key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </Section>
  );
}
