export type Project = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  content: string;
  team?: {
    name: string;
    role: string;
    avatar?: string;
  }[];
  website?: string;
  yearFounded?: number;
  category?: string;
  teamSize?: number;
};

export const projects: Project[] = [
  {
    slug: "remindai",
    title: "RemindAI",
    description: "Revolutionising AI context and memory",
    thumbnail: "/images/remind.png",
    yearFounded: 2025,
    category: "AI / ML · Developer Tools",
    teamSize: 2,
    team: [
      {
        name: "Nils Fleig",
        role: "Co-Founder",
      },
      {
        name: "Lucas Fedronic",
        role: "Co-Founder",
      },
    ],
    content: `
<i>RemindAI</i> transforms sprawling codebases into living, queryable knowledge graphs by first performing a deep crawl of every file, class, function and dependency. As it processes each abstract syntax tree, it extracts semantic relationships and design patterns, then stores them as structured "code facts" in a high-performance vector database. By combining these embeddings with a fluid-weights memory module, <i>RemindAI</i> captures evolving code context over time, ensuring that newly added abstractions and refactored modules remain instantly accessible.

Once the code graph is established, <i>RemindAI</i> fine-tunes a lightweight transformer on your project's specific conventions, using supervised learning to align model predictions with real examples from your repository. The fine-tuned model is wrapped in a low-latency API that supports natural-language queries, live code completion and on-the-fly documentation generation. Under the hood, <i>RemindAI</i> uses a hybrid retrieval approach: it first retrieves relevant code facts via similarity search, then conditions the LLM on those facts to produce precise, context-aware responses.

In practical tests across mid-sized enterprise repositories, developer teams using <i>RemindAI</i> saw a 50 percent drop in context-switching interruptions and a 35 percent increase in accurate code suggestions. Thanks to incremental crawling and dynamic memory refresh, the platform scales effortlessly as your codebase grows.`,
  },
  {
    slug: "mydarkpassenger",
    title: "My Dark Passenger",
    description: "A 2D story-driven thriller",
    thumbnail: "/images/My-Dark-passenger-logo.svg",
    yearFounded: 2024,
    category: "Video Game · Unity",
    teamSize: 2,
    team: [
      {
        name: "Rohith Saravana",
        role: "Co-Founder",
      },
      {
        name: "Cristian Coronado",
        role: "Co-Founder",
      },
    ],
    content: `
<i>My Dark Passenger</i> is a 2D, top-down thriller built in Unity that thrusts players into a dual narrative of horror and investigation. Combining hand-crafted sprite art with dynamic lighting and atmospheric sound design, the game creates an immersive world where every shadow and dialogue choice heightens tension. You alternate between two protagonists: a woman whose life is shattered by trauma and who evolves into a methodical serial killer, and the detective assigned to piece together her gruesome crimes. By weaving storytelling directly into gameplay, <i>My Dark Passenger</i> delivers a concise yet impactful experience that keeps players on edge from start to finish.

In the killer's chapters you must select and combine items in your inventory to execute precise murders, from setting traps to choosing the right moment for a stealth attack. In the detective's chapters you examine crime scenes, interview non-player characters and analyze evidence to form a case. A branching dialogue system adjusts responses based on prior actions, influencing how NPCs react and revealing new leads or obstacles. Quick-time events, environmental puzzles and a context-sensitive clue system ensure that each playthrough feels unique while maintaining narrative coherence.

On the technical side, the Unity C# codebase leverages a bespoke state-machine framework for character behaviors, modular AI routines for NPCs and a scalable inventory manager that tracks item states and usage history. Rohith's responsibilities included integrating dialogue trees, implementing collision detection for interactive elements and optimizing scene loading to maintain smooth performance. Cristian handled the complete art pipeline, producing hand-drawn environments and character sprites that reinforce the game's unsettling mood. Together they delivered a polished short game that marries compelling storytelling, engaging mechanics and striking art direction.`,
  },
  {
    slug: "picloud",
    title: "MiPi",
    description:
      "Turn your Pi5 into a private cloud for streaming, storage and gaming",
    thumbnail: "/images/pi.png",
    yearFounded: 2025,
    category: "Hardware · Linux",
    teamSize: 1,
    team: [
      {
        name: "Tyler Huynh",
        role: "Co-Founder",
      },
    ],
    content: `
Tyler's Pi5 project transforms a single Raspberry Pi into a versatile home server that handles media streaming, file synchronization and web hosting in one compact package. Driven by a desire to reduce recurring subscription costs and regain control over his data, Tyler configured the device to serve as a private alternative to Google Drive, a streaming platform for movies and TV shows, and a hub for gaming services like RetroPie and a Minecraft server. The project demonstrates how a small, cost-effective board can deliver enterprise-grade functionality without compromising privacy or performance.

Users connect to the server over the local network or secure remote access and can browse a custom media library powered by Plex, synchronize documents and photos via Nextcloud, or launch retro games through an integrated RetroPie interface. These features are supported by automated backups which are stored on an encrypted external drive and set up SSL certificates to ensure secure connections. The Minecraft server runs in a Docker container with resource limits to prevent it from overwhelming other services. Together these components create a seamless experience where multimedia, storage and gaming coexist reliably on the same hardware.`,
  },
  {
    slug: "edusense",
    title: "EduSense",
    description: "Your personalized, intelligent AI-Powered tutor",
    thumbnail: "/images/edusense.svg",
    yearFounded: 2025,
    category: "AI · Education",
    teamSize: 2,
    team: [
      {
        name: "Divyansh Jain",
        role: "Co-Founder",
      },
      {
        name: "Soham Kolhatkar",
        role: "Co-Founder",
      },
    ],
    content: `
<i>EduSense</i> delivers a fully customizable and intelligent learning experience powered by the latest most advanced transformer models. Learners engage with a virtual tutor that adapts to individual strengths, weaknesses and preferred study methods. On-the-fly content assembly draws from a rich library of expert crafted lesson plans, interactive quizzes and real-world examples. Educators and administrators can tailor difficulty settings, define learning objectives and inject bespoke resources—aligning lessons with the curriculum's standards. This level of configurability ensures each session feels as personalized as a private tutor appointment yet costs a fraction of traditional services.

Students connect with <i>EduSense</i> around the clock, pausing, rewinding or fast-forwarding explanations as needed. The dynamic progress tracker visualizes mastery levels and highlights topics requiring extra practice. Context aware hints appear at critical moments, and the tutor can generate additional problem sets or visual aids instantly.

Behind the scenes, <i>EduSense</i> uses a transformer architecture fine-tuned on a comprehensive dataset of pedagogical materials and real tutor-student conversations. A modular session manager captures interaction metrics and feeds them into a continuous improvement loop that sharpens instructional strategies. Administrators gain access to detailed analytics dashboards showcasing engagement trends, mastery curves and general statistics for data-driven curriculum planning. Scalable cloud infrastructure supports thousands of concurrent sessions with end-to-end encryption and rigorous privacy controls. By combining powerful AI customization with proven instructional design, <i>EduSense</i> makes premium one-on-one tutoring accessible, affordable and secure.`,
  },
  {
    slug: "letsdoresearch",
    title: "Let's Do Research",
    description: "The only research matchmaking platform for UC Davis students",
    thumbnail: "/images/ldr.png",
    yearFounded: 2025,
    category: "Research · AI",
    teamSize: 3,
    team: [
      {
        name: "Leon Han",
        role: "Co-Founder",
      },
      {
        name: "Harshil Ghor",
        role: "Co-Founder",
      },
      {
        name: "Shashwat Mahalanobis",
        role: "Co-Founder",
      },
    ],
    content: `
<i>Let's Do Research</i> offers UC Davis students a streamlined portal to explore and engage with a vast repository of past and ongoing research projects. By entering a few keywords, users can instantly uncover opportunities aligned with their interests, review detailed profiles of faculty and graduate students, and identify potential peer collaborators. Intelligent filters and AI-driven recommendations refine searches based on each student's background and interaction history, while an integrated mentorship module simplifies onboarding, scheduling and progress tracking. This unified interface removes traditional barriers to research involvement, enabling learners from any discipline to launch meaningful investigations without delay.

Beyond matching users to existing work, <i>Let's Do Research</i> introduces a collaborative matchmaking engine that pairs students on complementary topics for co-authorship and joint experiments. Advanced natural-language processing distills project summaries into concise insights and highlights key outcomes, while real-time analytics track engagement and milestone achievements to continually refine recommendations. Built on secure cloud infrastructure with role-based access controls and modular APIs, the platform safeguards sensitive data and integrates smoothly with campus systems and external AI tools. By combining exhaustive project directories, adaptive suggestions and peer collaboration features, <i>Let's Do Research</i> empowers every student to build and sustain a successful research journey.`,
  },
  {
    slug: "faqtube",
    title: "FAQTube",
    description: "Turn your FAQs into YouTube videos",
    thumbnail: "/images/faqtube.png",
    yearFounded: 2025,
    category: "Education · AI",
    teamSize: 1,
    team: [
      {
        name: "Dan Firstenberg",
        role: "Founder",
      },
    ],
    content: `
    <i>FAQTube</i> automates the entire workflow of producing high-quality educational YouTube content by orchestrating each step with AI and custom tooling. It begins by analyzing a topic or source material to generate a set of frequently asked questions, then scripts comprehensive answers that balance depth and clarity. Next, an AI voice-synthesis engine records the narration, matching natural speech patterns and appropriate pacing. Simultaneously, the system designs synchronized slide decks by extracting key concepts and visuals, ensuring that each slide aligns precisely with the narrated script. Once the audio and slides are ready, they are merged into a polished video using automated editing routines that add transitions, captions and seamless timing. The platform then generates optimized titles, descriptions and tags along with eye-catching thumbnails crafted from video frames and graphic templates. Finally, it uploads the finished video to YouTube, applying the metadata and thumbnail, and schedules the release according to predefined publishing rules. By handling every stage from content planning through distribution, this product empowers educators and creators to scale their production without sacrificing quality or manual effort.`,
  },
];
