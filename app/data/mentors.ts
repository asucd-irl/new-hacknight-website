export interface Mentor {
  id: number;
  image: string;
  name: string;
  bio: string;
}

export const mentors: Mentor[] = [
  {
    id: 1,
    name: "Aaron Anderson",
    bio: "Director of the UC Davis Student Startup Center\nPrincipal at Impact Venture Capital\nExpert in tech and policy innovation\n",
    image: "/images/mentors/aaron-mondell-anderson.png",
  },
  {
    id: 2,
    name: "Sam King",
    bio: "CS Professor at UC Davis\nDirector of CITRIS\nFormer Head of Fraud and ML at Stripe\nFounder of Bouncer (acquired by Stripe)\n",
    image: "/images/mentors/sam-king.png",
  },
  {
    id: 3,
    name: "Shrey Gupta",
    bio: "Co-Founder of Olive (YC W25)\nFormer NASA and Capital One\nFounder of ASUCD Innovation Lab\n",
    image: "/images/mentors/shrey-gupta.png",
  },
];
