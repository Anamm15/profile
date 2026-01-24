interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live: string;
}

export const projectsData: Project[] = [
  {
    title: "Modern E commerce Platform with Microservices Architecture",
    description:
      "A modern e-commerce platform built with Next.js and Golang microservices, featuring gRPC & Kafka for inter-service communication, PostgreSQL for data persistence, Midtrans payment integration, and Dockerized deployment for scalability and reliability.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Golang",
      "Gin",
      "Gorm",
      "PostgreSQL",
      "Kafka",
      "Docker",
      "gRPC",
      "Midtrans",
    ],
    image: "/e-commerce-thumbnail.png",
    github:
      "https://github.com/Anamm15/E-Commerce-with-Microservices-Architecture",
    live: "#",
  },
  {
    title: "Medical Link Platform",
    description:
      "A comprehensive medical link platform that connects patients with healthcare providers, offering features such as appointment scheduling, telemedicine consultations, health record management, prescription and medication tracking, article education, secure business processing, and redeem prescriptions.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Golang",
      "Gin",
      "Gorm",
      "PostgreSQL",
      "Redis",
      "Midtrans",
      "Docker",
    ],
    image: "/medilink-thumbnail.png",
    github: "https://github.com/Anamm15/MediLink",
    live: "#",
  },
  {
    title: "Live City",
    description:
      "Live City is a smart city platform that streamlines urban services by enabling online permit applications, citizen reports, city news, and public polling. It also supports family data management (including NIK and related records) and provides information on local facilities and villages to encourage transparency and citizen participation.",
    tags: ["Next.js", "Tailwind CSS", "Express.js", "Prisma ORM", "PostgreSQL"],
    image: "/live-city-thumbnail.png",
    github: "https://github.com/Anamm15/Live-City",
    live: "#",
  },
  {
    title: "Film-Findr",
    description:
      "A movie review platform that allows users to browse, rate, and comment on movies, providing a comprehensive database of film information and user-generated reviews. Users can also search for movies and see weekly top-rated movies. It also sentiment analysis on reviews to gauge overall audience reception and chatbot assistance for movie recommendations.",
    tags: ["React", "Tailwind CSS", "Golang", "Gin", "GORM", "PostgreSQL"],
    image: "/film-findr-thumbnail.png",
    github: "https://github.com/Anamm15/Film-Findr",
    live: "#",
  },
  {
    title: "Personal Productivity Tracker",
    description:
      "A personal productivity tracker that allows users to set goals, track progress, and daily tasks efficiently. It includes features such as time tracking, habit formation, and notification reminders to help users stay focused and achieve their objectives.",
    tags: ["Next.js", "Tailwind CSS", "Drizzle ORM", "PostgreSQL"],
    image: "/personal-productivity-trucker-thumbnail.png",
    github: "https://github.com/Anamm15/Personal-Productivity-Tracker",
    live: "#",
  },
];
