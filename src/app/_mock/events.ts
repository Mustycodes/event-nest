import { Event } from "@/types/event";

export const mockEvents: Event[] = [
  {
    id: "evt001",
    name: "React Global Summit 2025",
    date: "2025-08-22",
    time: "10:00 AM",
    price: 150,
    imageUrl: "/assets/images/DevFest2.png",
    category: "Tech Conference",
    organizer: "TechWorld Events",
    isFeatured: true,
    location: {
      address: "500 Market Street",
      city: "San Francisco",
      country: "USA",
    },
    sessions: [
      {
        id: "s001",
        name: "Advanced State Management in React",
        presenter: "Samantha Lee",
        duration: "1h 30m",
        level: "Advanced",
        abstract:
          "Dive into useReducer, context, and third-party tools like Zustand or Redux Toolkit.",
      },
      {
        id: "s002",
        name: "React Performance Tuning",
        presenter: "David Kim",
        duration: "1h",
        level: "Intermediate",
        abstract:
          "Learn how to use React Profiler, memoization, and lazy loading to boost app performance.",
      },
    ],
  },
  {
    id: "evt002",
    name: "Startup Weekend Lagos",
    date: "2025-09-14",
    time: "9:00 AM",
    price: 50,
    imageUrl: "/assets/images/DevFest2.png",
    category: "Business",
    organizer: "Startup Lagos Hub",
    isFeatured: false,
    onlineUrl: "https://startupweekendlagos.com",
    sessions: [
      {
        id: "s003",
        name: "Pitch Like a Pro",
        presenter: "Tomiwa Adeyemi",
        duration: "45m",
        level: "Beginner",
        abstract:
          "Learn how to structure and deliver a compelling startup pitch.",
      },
    ],
  },
  {
    id: "evt003",
    name: "Design Systems Bootcamp",
    date: "2025-10-01",
    time: "11:00 AM",
    price: 120,
    imageUrl: "/assets/images/DevFest2.png",
    category: "UI/UX",
    organizer: "Pixel Perfect Academy",
    isFeatured: false,
    location: {
      address: "33 King's Road",
      city: "London",
      country: "UK",
    },
    sessions: [
      {
        id: "s004",
        name: "Building Scalable Design Tokens",
        presenter: "Jessica Wang",
        duration: "1h",
        level: "Intermediate",
        abstract:
          "Explore how to use tokens to scale design systems across platforms.",
      },
    ],
  },
  {
    id: "evt004",
    name: "Fullstack Developer Meetup",
    date: "2025-08-18",
    time: "6:00 PM",
    price: 0,
    imageUrl: "/assets/images/DevFest2.png",
    category: "Networking",
    organizer: "DevCircle Abuja",
    isFeatured: true,
    location: {
      address: "21 Software Avenue",
      city: "Abuja",
      country: "Nigeria",
    },
    sessions: [
      {
        id: "s005",
        name: "API-first Development",
        presenter: "Emmanuel Okoro",
        duration: "1h",
        level: "All",
        abstract: "How to build applications around powerful, flexible APIs.",
      },
    ],
  },
  {
    id: "evt005",
    name: "AI for Creators Workshop",
    date: "2025-09-05",
    time: "2:00 PM",
    price: 75,
    imageUrl: "/assets/images/DevFest2019.png",
    category: "Artificial Intelligence",
    organizer: "CreateHub",
    isFeatured: false,
    location: {
      address: "900 Broadway",
      city: "New York",
      country: "USA",
    },
    sessions: [
      {
        id: "s006",
        name: "Generating Content with AI",
        presenter: "Daniela Ruiz",
        duration: "1h",
        level: "Beginner",
        abstract:
          "Learn how to use generative AI tools like GPT and Midjourney to create content faster.",
      },
    ],
  },
];
