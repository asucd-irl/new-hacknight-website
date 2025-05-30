export interface Mentor {
  id: number;
  image: string;
  name: string;
  bio: string;
}

export const mentors: Mentor[] = [
  {
    id: 1,
    name: "Aaron Mondell Anderson",
    bio: "Director of the UC Davis Student Startup Center and Principal at Impact Venture Capital. With deep experience at the intersection of tech and policy, Aaron focuses on transformative innovations in healthcare, agriculture, governance, transportation, and energy - industries where thoughtful innovation and policy alignment are crucial for success.",
    image: "/images/mentors/aaron-mondell-anderson.png"
  },
  {
    id: 2,
    name: "Sam King",
    bio: "Professor of Computer Science at UC Davis and Director of CITRIS. Former Head of Fraud and ML at Stripe, and founder of Bouncer (acquired by Stripe). Previously led security and fraud prevention at Lyft and Twitter. Research focuses on computer security, financial fraud, and digital identity. Currently developing innovative healthcare solutions like BeaGL for diabetes management.",
    image: "/images/mentors/sam-king.png"
  },
  {
    id: 3,
    name: "Shrey Gupta",
    bio: "Co-Founder of Olive (YC W25). Previously worked at NASA, Capital One, and Fundsy. Passionate about using technology to solve real-world problems and mentoring the next generation of founders. Shrey Gupta is also one of the founders of ASUCD Innovation and Research Lab along with HackNights.",
    image: "/images/mentors/shrey-gupta.png"
  }
]; 