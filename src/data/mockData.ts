
import { JobListing, MentorshipSession, Event } from "../types";

export const mockJobs: JobListing[] = [
  {
    id: "job-1",
    title: "Senior Full Stack Developer",
    company: "TechInnovate Solutions",
    location: "Remote",
    description: "Join our diverse engineering team to build scalable web applications using modern technologies. We value flexibility and support various work arrangements to accommodate different life situations.",
    requirements: [
      "5+ years of experience with JavaScript/TypeScript",
      "Experience with React and Node.js",
      "Strong problem-solving skills",
      "Collaborative mindset"
    ],
    type: "full-time",
    postedDate: "2025-03-20",
    applicationUrl: "https://example.com/jobs/senior-fullstack",
    keywords: ["development", "coding", "programming", "tech", "engineering", "react", "node", "javascript", "typescript", "remote"]
  },
  {
    id: "job-2",
    title: "Product Manager",
    company: "GrowthPath Enterprises",
    location: "Hybrid (Bangalore)",
    description: "Lead product strategy and execution for our SaaS platform. We offer flexible working hours and comprehensive parental leave policies to ensure work-life balance.",
    requirements: [
      "3+ years in product management",
      "Experience with agile methodologies",
      "Strong communication skills",
      "Data-driven decision making"
    ],
    type: "full-time",
    postedDate: "2025-03-25",
    applicationUrl: "https://example.com/jobs/product-manager",
    keywords: ["product", "management", "saas", "agile", "leadership", "strategy", "hybrid", "bangalore"]
  },
  {
    id: "job-3",
    title: "UX/UI Designer",
    company: "CreativeVision Design",
    location: "Remote",
    description: "Create engaging user experiences for our digital products. Our company celebrates diversity and provides mentorship opportunities for women in design.",
    requirements: [
      "Portfolio demonstrating UX/UI projects",
      "Experience with Figma and design systems",
      "User-centered design approach",
      "Ability to collaborate with development teams"
    ],
    type: "full-time",
    postedDate: "2025-03-18",
    applicationUrl: "https://example.com/jobs/ux-designer",
    keywords: ["design", "ux", "ui", "figma", "creative", "remote", "digital", "user experience"]
  },
  {
    id: "job-4",
    title: "Data Analyst",
    company: "DataInsight Analytics",
    location: "Hybrid (Mumbai)",
    description: "Transform data into actionable insights for business decisions. We offer returnship programs for women rejoining the workforce after a career break.",
    requirements: [
      "Proficiency in SQL and data visualization tools",
      "Experience with statistical analysis",
      "Strong problem-solving abilities",
      "Excellent communication skills"
    ],
    type: "part-time",
    postedDate: "2025-03-22",
    applicationUrl: "https://example.com/jobs/data-analyst",
    keywords: ["data", "analytics", "sql", "statistics", "visualization", "part-time", "mumbai", "analysis", "hybrid"]
  },
  {
    id: "job-5",
    title: "Marketing Specialist",
    company: "BrandGrowth Media",
    location: "Remote",
    description: "Develop and execute marketing campaigns for our clients. We have a strong women leadership team and provide career advancement opportunities.",
    requirements: [
      "2+ years of digital marketing experience",
      "Content creation skills",
      "Social media management experience",
      "Analytical mindset"
    ],
    type: "contract",
    postedDate: "2025-03-24",
    applicationUrl: "https://example.com/jobs/marketing-specialist",
    keywords: ["marketing", "digital", "social media", "content", "campaigns", "remote", "contract", "branding"]
  }
];

export const mockMentorshipSessions: MentorshipSession[] = [
  {
    id: "session-1",
    title: "Navigating Career Transitions in Tech",
    mentor: {
      name: "Priya Sharma",
      role: "Engineering Director",
      company: "GlobalTech Solutions",
      expertise: ["Career Development", "Leadership", "Technical Management"]
    },
    date: "2025-04-15",
    time: "18:00",
    duration: "60 minutes",
    description: "Learn strategies for successfully navigating career transitions in the tech industry, particularly for women looking to advance into leadership roles.",
    registrationUrl: "https://example.com/mentorship/tech-transitions",
    keywords: ["career", "tech", "transition", "leadership", "women in tech", "management"]
  },
  {
    id: "session-2",
    title: "Building Confidence in Workplace Communication",
    mentor: {
      name: "Ananya Desai",
      role: "Senior Communications Consultant",
      company: "Effective Dialogue",
      expertise: ["Public Speaking", "Negotiation", "Conflict Resolution"]
    },
    date: "2025-04-18",
    time: "17:30",
    duration: "90 minutes",
    description: "Develop strategies to communicate with confidence in meetings, presentations, and difficult workplace conversations.",
    registrationUrl: "https://example.com/mentorship/confidence-communication",
    keywords: ["communication", "confidence", "speaking", "workplace", "negotiation", "soft skills"]
  },
  {
    id: "session-3",
    title: "Financial Planning for Professional Women",
    mentor: {
      name: "Meera Patel",
      role: "Financial Advisor",
      company: "WealthWise Consultancy",
      expertise: ["Personal Finance", "Investment", "Retirement Planning"]
    },
    date: "2025-04-22",
    time: "19:00",
    duration: "60 minutes",
    description: "Learn essential financial planning strategies specifically tailored for women professionals at different career stages.",
    registrationUrl: "https://example.com/mentorship/financial-planning",
    keywords: ["finance", "planning", "investment", "money", "financial independence"]
  },
  {
    id: "session-4",
    title: "Returning to Work After a Career Break",
    mentor: {
      name: "Sunita Khanna",
      role: "HR Director",
      company: "Inclusive Workplaces",
      expertise: ["Career Reentry", "Resume Building", "Interview Strategies"]
    },
    date: "2025-04-25",
    time: "16:00",
    duration: "75 minutes",
    description: "Get practical guidance for successfully returning to work after a career break, including updating your skills and presenting your experience effectively.",
    registrationUrl: "https://example.com/mentorship/career-break-return",
    keywords: ["career break", "return to work", "reentry", "resume", "gap", "interviews"]
  },
  {
    id: "session-5",
    title: "Building a Personal Brand on LinkedIn",
    mentor: {
      name: "Zara Ahmed",
      role: "Personal Branding Specialist",
      company: "DigitalPresence",
      expertise: ["LinkedIn Optimization", "Content Strategy", "Networking"]
    },
    date: "2025-04-28",
    time: "18:30",
    duration: "60 minutes",
    description: "Learn how to leverage LinkedIn to build your personal brand, expand your network, and attract career opportunities.",
    registrationUrl: "https://example.com/mentorship/linkedin-branding",
    keywords: ["linkedin", "personal brand", "networking", "social media", "profile", "online presence"]
  }
];

export const mockEvents: Event[] = [
  {
    id: "event-1",
    title: "Women in Tech Leadership Summit",
    organizer: "TechDiversity Initiative",
    date: "2025-05-15",
    time: "09:00-17:00",
    location: "Virtual",
    description: "A day-long summit featuring talks and workshops focused on leadership development for women in technology fields.",
    registrationUrl: "https://example.com/events/tech-leadership-summit",
    keywords: ["women in tech", "leadership", "summit", "virtual", "technology", "networking"]
  },
  {
    id: "event-2",
    title: "Career Comeback Workshop Series",
    organizer: "JobsForHer Foundation",
    date: "2025-05-08",
    time: "14:00-16:00",
    location: "Bangalore & Virtual",
    description: "A series of workshops designed for women returning to the workforce after a career break, offering skill refreshers and practical advice.",
    registrationUrl: "https://example.com/events/career-comeback",
    keywords: ["comeback", "return to work", "workshop", "skills", "career break", "hybrid", "bangalore"]
  },
  {
    id: "event-3",
    title: "Entrepreneurship Masterclass for Women",
    organizer: "StartHer Ventures",
    date: "2025-05-20",
    time: "18:30-20:30",
    location: "Mumbai & Virtual",
    description: "Learn from successful women entrepreneurs about starting and scaling businesses, securing funding, and building networks.",
    registrationUrl: "https://example.com/events/entrepreneurship-masterclass",
    keywords: ["entrepreneurship", "business", "startups", "funding", "networking", "hybrid", "mumbai"]
  },
  {
    id: "event-4",
    title: "Work-Life Balance in the Digital Age",
    organizer: "LifeWork Harmony",
    date: "2025-05-12",
    time: "17:00-18:30",
    location: "Virtual",
    description: "A panel discussion on strategies for maintaining work-life balance while building a successful career in today's digital workplace.",
    registrationUrl: "https://example.com/events/work-life-balance",
    keywords: ["work-life balance", "well-being", "digital", "remote work", "panel", "stress management", "virtual"]
  },
  {
    id: "event-5",
    title: "Negotiation Skills Workshop for Professional Women",
    organizer: "EmpowerHer Network",
    date: "2025-05-25",
    time: "10:00-13:00",
    location: "Delhi & Virtual",
    description: "A hands-on workshop focused on developing effective negotiation skills for salary discussions, promotions, and workplace advocacy.",
    registrationUrl: "https://example.com/events/negotiation-skills",
    keywords: ["negotiation", "salary", "promotion", "advocacy", "communication", "skills", "workshop", "hybrid", "delhi"]
  }
];

export const suggestedQueries = [
  "Find remote job opportunities in technology",
  "Show me upcoming mentorship sessions about leadership",
  "What events are happening in Bangalore?",
  "How can I return to work after a career break?",
  "Find jobs suitable for working parents",
  "What mentorship options are available for career transitions?",
  "Tell me about opportunities in data analytics",
  "How do I build my personal brand?",
  "What's the best way to negotiate salary?",
  "Show me part-time job opportunities"
];

export const botResponses = {
  greetings: [
    "Hello! I'm Asha, your career assistant. How can I help with your professional journey today?",
    "Hi there! I'm Asha from JobsForHer. I can help you find jobs, mentorship opportunities, or events. What are you looking for today?",
    "Welcome! I'm Asha, here to support your career development. What would you like assistance with?"
  ],
  fallback: [
    "I apologize, but I'm not sure I understand your question. Could you please rephrase or try asking about job opportunities, mentorship programs, or events?",
    "I'm still learning and didn't quite catch that. Would you like to know about job listings, mentorship sessions, or upcoming events?",
    "I'm sorry, but I couldn't process that request. Can I help you find job opportunities, connect with mentors, or discover relevant events instead?"
  ],
  jobSearch: [
    "I'd be happy to help you find job opportunities. Could you tell me what type of role, industry, or work arrangement you're looking for?",
    "Let's find you some great job matches! Are you looking for something specific in terms of role, location, or work arrangement?",
    "I can help you explore available positions. What kind of job are you interested in? Any preferences regarding location or work arrangement?"
  ],
  mentorshipSearch: [
    "Mentorship can be transformative for your career. What specific areas or skills would you like guidance with?",
    "I'd be happy to help you find a mentor. What topics or career challenges are you hoping to address through mentorship?",
    "Let's connect you with the right mentor. What aspects of your professional development would you like to focus on?"
  ],
  eventSearch: [
    "There are several events coming up that might interest you. Are you looking for networking, skill-building, or industry-specific events?",
    "I can help you discover events relevant to your career goals. What type of events are you most interested in attending?",
    "Let's find some valuable events for you. Are you interested in virtual events, in-person gatherings, or both?"
  ],
  biasDetected: [
    "I understand you're looking for information, but I want to ensure I provide balanced and inclusive guidance. Could we reframe that question to focus on professional qualifications and skills rather than personal characteristics?",
    "I'm here to support all professionals in their career journeys based on their skills and aspirations. Let's focus on professional qualifications rather than demographic factors. How can I help you with your career development?",
    "My goal is to provide helpful career guidance based on professional criteria. I'd be happy to help you find opportunities based on skills, experience, and career goals instead. What specific professional qualities are you looking for?"
  ]
};
