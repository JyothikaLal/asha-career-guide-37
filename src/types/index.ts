
export interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  type: "full-time" | "part-time" | "contract" | "remote";
  postedDate: string;
  applicationUrl: string;
  keywords: string[];
}

export interface MentorshipSession {
  id: string;
  title: string;
  mentor: {
    name: string;
    role: string;
    company: string;
    expertise: string[];
  };
  date: string;
  time: string;
  duration: string;
  description: string;
  registrationUrl: string;
  keywords: string[];
}

export interface Event {
  id: string;
  title: string;
  organizer: string;
  date: string;
  time: string;
  location: string;
  description: string;
  registrationUrl: string;
  keywords: string[];
}

export interface FeedbackData {
  messageId: string;
  helpful: boolean;
  comment?: string;
}

export type SearchResults = {
  jobs?: JobListing[];
  sessions?: MentorshipSession[];
  events?: Event[];
}
