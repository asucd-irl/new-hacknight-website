"use client";

import { useState } from "react";
import Section from "./Section";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "When and where do Hack Nights happen?",
    a: "Every Thursday, 6-8 PM, inside the Innovation & Research Lab on campus.",
  },
  {
    q: "Who can participate? Are there any requirements?",
    a: "Anyone and everyone at UC Davis is welcome! no CS major or prior coding experience required.",
  },
  {
    q: "What should I bring?",
    a: "Laptop, charger, and an idea you’re excited to explore. We supply the rest.",
  },
  {
    q: "Do I have to attend every week?",
    a: "No. Hack Nights are drop-in; come whenever you’re free.",
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
    <Section id="faq" bg="bg-gray-100">
      <div className="mx-auto w-full max-w-3xl px-6">
        <h2 className="mb-10 text-center text-3xl font-bold text-brand-dark">
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
