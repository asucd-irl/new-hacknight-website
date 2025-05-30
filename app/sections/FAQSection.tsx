"use client";

import { useState } from "react";
import Section from "./Section";
import { instrumentSerif, instrumentSans } from "../_components/fonts";

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
    a: "You can register for free by joining our Google Calendar invite list. To join the list, sign up with your preferred email for Google Calendar our website and we'll send you an invite every week!",
  },
  {
    q: "Do I have to attend every week?",
    a: "No but make sure you RSVP every week!",
  },
];

function FAQItem({ q, a }: QA) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-md border border-gray-200 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between p-4 text-left font-medium text-xl transition-colors hover:bg-gray-50 ${
          open ? "border-b border-gray-200" : "rounded-md"
        } ${instrumentSerif.className}`}
      >
        {q}
        <span
          className={`text-xl leading-none transition-transform duration-150 ${
            open ? "rotate-180" : ""
          }`}
        >
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className={`p-4 text-gray-700 ${instrumentSans.className}`}>
            <p>{a}</p>
          </div>
        </div>
      </div>
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
