export interface Mentor {
  name: string;
  bio: string;
  image: string;
}

export const mentors: Mentor[] = [
  {
    name: "Aaron Mondell Anderson",
    bio: "Professor in the Computer Science department at UC Davis. Research interests include programming languages, software engineering, and computer science education.",
    image: "/images/mentors/aaron-mondell-anderson.png"
  },
  {
    name: "Sam King",
    bio: "Professor in the Computer Science department at UC Davis. Research interests include systems security, software security, and web security.",
    image: "/images/mentors/sam-king.png"
  },
  {
    name: "Shrey Gupta",
    bio: "PhD student in the Computer Science department at UC Davis. Research interests include machine learning, computer vision, and natural language processing.",
    image: "/images/mentors/shrey-gupta.png"
  }
]; 