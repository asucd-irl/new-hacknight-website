"use client";
import { useState } from "react";
import EventDate from "./components/EventDate";
export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true); // Immediately update UI

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwxvPynIF9EP6lukSk3IsYR7LJOI1ZtOABFINCowWyXPvJwEGVZX-VIkToAF3gABYSo/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
          }),
        }
      );

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitted(false);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-100">
      <div className="w-full max-w-[550px] mx-auto px-4 flex flex-col gap-4 mt-20">
        <div>
          <div className="flex font-serif">
            <p className="flex-1 text-6xl font-bold">hack nights</p>
            <p className="text-2xl font-italic bottom-0 md:mr-44">@ uc davis</p>
          </div>
          <p className="text-2xl">
            for the love of <i>making</i>.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p>
            in the midst of the clubs & classes that rule our lives, we rarely
            step out of our comfort zone. want to build that app you&apos;ve
            been thinking about, craft the perfect personal website, or tinker
            with new hardware?
          </p>
          <p>hack night was made just for that. it&apos;s simple:</p>
          <ul className="list-none pl-2.5 [&>*]:before:pr-[10px]">
            <li className="before:content-['⏰']">
              3 hours of unstructured, unblocked time
            </li>
            <li className="before:content-['👫']">
              surrounded by fun & interesting people
            </li>
            <li className="before:content-['🌮']">
              with dinner + snacks to fuel your ideas
            </li>
          </ul>

          <div className="flex flex-col w-full bg-blue-600 p-4 gap-1.5 mt-3 rounded-lg shadow-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 tqo-blue-700 opacity-50" />
            <div className="relative z-10">
              <p className="font-serif text-2xl text-white font-semibold flex flex-col sm:flex-row sm:items-baseline md:gap-2 leading-tight">
                <EventDate />
                <span className="text-xl font-normal whitespace-nowrap sm:flex-shrink-0">
                  @ student startup center
                </span>
              </p>
            </div>
            <div className="flex flex-row gap-2 z-20">
              <div className="flex flex-col gap-3">
                <p className="text-white font-medium">
                  hack nights run every week! come hang with us every Thursday
                  evening
                  <span className="hidden md:inline">
                    {" "}
                    -- can&apos;t wait to see you there
                  </span>{" "}
                  😁
                </p>
                <div className="flex flex-col gap-4 w-full sm:w-96">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit}>
                      <div className="flex flex-row gap-1.5 w-full">
                        <input
                          type="text"
                          value={firstName}
                          onChange={handleFirstNameChange}
                          placeholder="first name"
                          className="w-full rounded-lg border border-white px-4 py-1.5 focus:outline-none text-white bg-blue-700 flex-1 transition-all duration-200 ease-in-out shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1),inset_-1px_-1px_3px_rgba(255,255,255,0.7)] hover:shadow-[0_0_0_2px_rgba(255,255,255,0.5),inset_0.5px_0.5px_2px_rgba(0,0,0,0.05),inset_-0.5px_-0.5px_2px_rgba(255,255,255,0.35)] focus:shadow-[0_0_0_2px_rgba(255,255,255,0.5),inset_0.5px_0.5px_2px_rgba(0,0,0,0.05),inset_-0.5px_-0.5px_2px_rgba(255,255,255,0.35)] focus:outline-white focus:outline-2 focus:outline-offset-2 placeholder-white placeholder-opacity-70"
                          required
                        />
                        <input
                          type="text"
                          value={lastName}
                          onChange={handleLastNameChange}
                          placeholder="last name"
                          className="w-full rounded-lg border border-white px-4 py-1.5 focus:outline-none text-white bg-blue-700 flex-1 transition-all duration-200 ease-in-out shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1),inset_-1px_-1px_3px_rgba(255,255,255,0.7)] hover:shadow-[0_0_0_2px_rgba(255,255,255,0.5),inset_0.5px_0.5px_2px_rgba(0,0,0,0.05),inset_-0.5px_-0.5px_2px_rgba(255,255,255,0.35)] focus:shadow-[0_0_0_2px_rgba(255,255,255,0.5),inset_0.5px_0.5px_2px_rgba(0,0,0,0.05),inset_-0.5px_-0.5px_2px_rgba(255,255,255,0.35)] focus:outline-white focus:outline-2 focus:outline-offset-2 placeholder-white placeholder-opacity-70"
                          required
                        />
                      </div>
                      <div className="flex flex-row gap-1.5 w-full mt-2">
                        <input
                          type="email"
                          value={email}
                          onChange={handleEmailChange}
                          placeholder="hacker@ucdavis.edu"
                          className="w-full rounded-lg border border-white px-4 py-1.5 focus:outline-none text-white bg-blue-700 flex-1 transition-all duration-200 ease-in-out shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1),inset_-1px_-1px_3px_rgba(255,255,255,0.7)] hover:shadow-[0_0_0_2px_rgba(255,255,255,0.5),inset_0.5px_0.5px_2px_rgba(0,0,0,0.05),inset_-0.5px_-0.5px_2px_rgba(255,255,255,0.35)] focus:shadow-[0_0_0_2px_rgba(255,255,255,0.5),inset_0.5px_0.5px_2px_rgba(0,0,0,0.05),inset_-0.5px_-0.5px_2px_rgba(255,255,255,0.35)] focus:outline-white focus:outline-2 focus:outline-offset-2 placeholder-white placeholder-opacity-70"
                          required
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        />
                        <button
                          type="submit"
                          className="w-24 font-medium h-full flex items-center justify-center gap-2 rounded-lg border border-white px-4 py-1.5 text-white bg-blue-600 transition-all duration-200 ease-in-out shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1),inset_-1px_-1px_3px_rgba(255,255,255,0.7)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-white focus:outline-2 focus:outline-offset-2"
                        >
                          I&apos;m in
                        </button>
                      </div>
                    </form>
                  ) : (
                    <p className="text-white font-medium">
                      Thank you for signing up - be on the lookout for a Google
                      Calendar invite!
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-blue-600 border-dashed p-4 rounded-lg mt-4">
            we have one rule:{" "}
            <i>leave your class assignments or club projects at home.</i>{" "}
            stretch a new part of your brain working on something new!
          </div>
        </div>

        <div className="flex flex-col mt-4 mb-20 gap-4">
          <details className="bg-white border border-blue-600 rounded-lg shadow-md transition-all duration-200 ease-in-out group">
            <summary className="cursor-pointer p-4 font-medium text-blue-600 hover:bg-blue-50 transition-colors duration-200 ease-in-out rounded-lg group-hover:rounded-t-lg group-open:rounded-b-none">
              <span className="mr-2" />
              <span>What can I expect?</span>
            </summary>
            <div className="p-4 bg-blue-50 rounded-b-lg border-t border-blue-600">
              <p className="mb-1">
                hack nights are designed to be laid-back and fun—think of it
                like heading to a coffee shop with your friends. some of you
                might collaborate on projects, while others will dive into solo
                work.
              </p>
              <p className="mb-1">
                there&apos;s no set list of tasks, no mandatory projects, and no
                one monitoring your progress. instead, hack nights provide
                dedicated time on your calendar to focus on whatever excites you
                most.
              </p>
              <p className="mb-1">
                most clubs, classes, and jobs push you toward
                perfectionism—you&apos;ll feel the need to "get it right" on the
                first try, especially when working in a team where others rely
                on you. hack nights are refreshingly different: no one is
                depending on you, and there&apos;s no pressure to create
                something perfect. it&apos;s an opportunity to experiment
                freely, explore your intellectual curiosities, and simply enjoy
                the process of creating for its own sake.
              </p>
            </div>
          </details>
          <details className="bg-white border border-blue-600 rounded-lg shadow-md transition-all duration-200 ease-in-out group">
            <summary className="cursor-pointer p-4 font-medium text-blue-600 hover:bg-blue-50 transition-colors duration-200 ease-in-out rounded-lg group-hover:rounded-t-lg group-open:rounded-b-none">
              <span className="mr-2" />
              <span>What&apos;s the structure?</span>
            </summary>
            <div className="p-4 bg-blue-50 rounded-b-lg border-t border-blue-600">
              <p className="mb-1">
                when people arrive, we&apos;ll kick things off with a quick
                introduction about what hack night is all about—and what
                it&apos;s not (so maybe leave that cs homework behind)
              </p>
              <p className="mb-1">
                we&apos;ll start with a short icebreaker to get to know the
                people around you and hear what they&apos;re working on.
              </p>
              <p className="mb-1">
                from there, we&apos;ll dive into a focused work session. whether
                you&apos;re on your laptop, notepad, or something else entirely,
                this is your time to create and explore. we&apos;ll have some
                music playing in the background and you&apos;re welcome to chat
                and share what you&apos;re working on with others if you feel
                like it—it&apos;s a relaxed vibe, not a strict one.
              </p>
              <p className="mb-1">
                at some point of the night, the food arrives and then people
                come up to the front to quickly demo what they&apos;re working
                on!
              </p>
              <p className="mb-1">
                then we&apos;ll head into another work session and see where the
                night takes us!
              </p>
            </div>
          </details>
          <details className="bg-white border border-blue-600 rounded-lg shadow-md transition-all duration-200 ease-in-out group">
            <summary className="cursor-pointer p-4 font-medium text-blue-600 hover:bg-blue-50 transition-colors duration-200 ease-in-out rounded-lg group-hover:rounded-t-lg group-open:rounded-b-none">
              <span className="mr-2" />
              <span>Who runs this?</span>
            </summary>
            <div className="p-4 bg-blue-50 rounded-b-lg border-t border-blue-600">
              <p>
                this event is run by{" "}
                <a
                  href="https://asucd.ucdavis.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  asucd&apos;s innovation & research lab
                </a>{" "}
                and sponsored by the{" "}
                <a
                  href="https://startup.ucdavis.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  uc davis startup center
                </a>
                .
              </p>
              <p>
                feel free to reach out to{" "}
                <a
                  href="mailto:borna@irl.ucdavis.edu"
                  className="text-blue-600 hover:underline"
                >
                  borna@irl.ucdavis.edu
                </a>{" "}
                if you have any questions or wanna get involved
              </p>
            </div>
          </details>
        </div>
      </div>

      <style jsx>{`
        @keyframes rainbow {
          0% {
            color: red;
          }
          14% {
            color: orange;
          }
          28% {
            color: yellow;
          }
          42% {
            color: green;
          }
          56% {
            color: blue;
          }
          70% {
            color: indigo;
          }
          84% {
            color: violet;
          }
          100% {
            color: red;
          }
        }
        .rainbow-text {
          animation: rainbow 3s linear infinite;
        }
        .fast-rainbow {
          animation: rainbow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
