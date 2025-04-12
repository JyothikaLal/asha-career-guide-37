
import { Message, JobListing, MentorshipSession, Event, SearchResults } from "../types";
import { mockJobs, mockMentorshipSessions, mockEvents, botResponses } from "../data/mockData";

// Generate a unique ID for messages
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// Simple semantic search based on keyword matching
export const performSearch = (query: string): SearchResults => {
  const queryTerms = query.toLowerCase().split(/\s+/);
  
  // Basic relevance scoring function
  const calculateRelevance = (keywords: string[]): number => {
    let score = 0;
    keywords.forEach(keyword => {
      queryTerms.forEach(term => {
        if (keyword.toLowerCase().includes(term) || term.includes(keyword.toLowerCase())) {
          score += 1;
        }
      });
    });
    return score;
  };

  // Search jobs
  const relevantJobs = mockJobs
    .map(job => ({
      ...job,
      relevance: calculateRelevance(job.keywords) + 
                calculateRelevance([job.title, job.company, job.location, job.description].concat(job.requirements))
    }))
    .filter(job => job.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .map(({ relevance, ...job }) => job);

  // Search mentorship sessions
  const relevantSessions = mockMentorshipSessions
    .map(session => ({
      ...session,
      relevance: calculateRelevance(session.keywords) + 
                calculateRelevance([session.title, session.description, session.mentor.name, session.mentor.role, session.mentor.company])
    }))
    .filter(session => session.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .map(({ relevance, ...session }) => session);

  // Search events
  const relevantEvents = mockEvents
    .map(event => ({
      ...event,
      relevance: calculateRelevance(event.keywords) + 
                calculateRelevance([event.title, event.organizer, event.location, event.description])
    }))
    .filter(event => event.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .map(({ relevance, ...event }) => event);

  return {
    jobs: relevantJobs,
    sessions: relevantSessions,
    events: relevantEvents
  };
};

// Check for potential bias in user query
export const detectBias = (query: string): boolean => {
  const biasTerms = [
    "only women", "only men", "no men", "no women", "males only", "females only",
    "young", "old", "age", "under 30", "over 40", "married", "unmarried", "single",
    "beautiful", "attractive", "handsome", "pretty", "good looking",
    "white", "black", "asian", "race", "ethnic", "caste", "religion", "muslim", "hindu", "christian"
  ];
  
  const queryLower = query.toLowerCase();
  return biasTerms.some(term => queryLower.includes(term));
};

// Generate bot response based on user message and context
export const generateBotResponse = (userMessage: string, messageHistory: Message[]): string => {
  // Check for bias first
  if (detectBias(userMessage)) {
    return getRandomResponse(botResponses.biasDetected);
  }
  
  // Check if it's a greeting
  if (isGreeting(userMessage)) {
    return getRandomResponse(botResponses.greetings);
  }
  
  // Check for job search intent
  if (isJobSearchQuery(userMessage)) {
    const results = performSearch(userMessage);
    if (results.jobs && results.jobs.length > 0) {
      return formatJobResults(results.jobs);
    } else {
      return "I couldn't find any job listings matching your criteria. Could you try again with different keywords? For example, you can search by role type, location, or work arrangement.";
    }
  }
  
  // Check for mentorship search intent
  if (isMentorshipQuery(userMessage)) {
    const results = performSearch(userMessage);
    if (results.sessions && results.sessions.length > 0) {
      return formatMentorshipResults(results.sessions);
    } else {
      return "I couldn't find any mentorship sessions matching your request. Could you try different keywords? You can search by topic, industry, or specific skills you want to develop.";
    }
  }
  
  // Check for event search intent
  if (isEventQuery(userMessage)) {
    const results = performSearch(userMessage);
    if (results.events && results.events.length > 0) {
      return formatEventResults(results.events);
    } else {
      return "I couldn't find any events matching your criteria. Would you like to try searching with different keywords, such as location or event type?";
    }
  }
  
  // Generic search when intent is unclear
  const results = performSearch(userMessage);
  const hasResults = (
    (results.jobs && results.jobs.length > 0) ||
    (results.sessions && results.sessions.length > 0) ||
    (results.events && results.events.length > 0)
  );
  
  if (hasResults) {
    let response = "Here's what I found based on your request:\n\n";
    
    if (results.jobs && results.jobs.length > 0) {
      response += "Job Opportunities:\n" + formatJobResults(results.jobs.slice(0, 2)) + "\n\n";
    }
    
    if (results.sessions && results.sessions.length > 0) {
      response += "Mentorship Sessions:\n" + formatMentorshipResults(results.sessions.slice(0, 2)) + "\n\n";
    }
    
    if (results.events && results.events.length > 0) {
      response += "Upcoming Events:\n" + formatEventResults(results.events.slice(0, 2)) + "\n\n";
    }
    
    response += "Would you like more specific information about any of these options?";
    return response;
  }
  
  // Fallback response when no match is found
  return getRandomResponse(botResponses.fallback);
};

// Helper functions
const isGreeting = (message: string): boolean => {
  const greetings = ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening", "howdy"];
  return greetings.some(greeting => message.toLowerCase().includes(greeting));
};

const isJobSearchQuery = (message: string): boolean => {
  const jobTerms = ["job", "work", "career", "position", "employment", "opportunity", "hiring", "role", "opening"];
  return jobTerms.some(term => message.toLowerCase().includes(term));
};

const isMentorshipQuery = (message: string): boolean => {
  const mentorTerms = ["mentor", "guidance", "advise", "coaching", "counseling", "support", "session"];
  return mentorTerms.some(term => message.toLowerCase().includes(term));
};

const isEventQuery = (message: string): boolean => {
  const eventTerms = ["event", "workshop", "webinar", "conference", "seminar", "meetup", "networking"];
  return eventTerms.some(term => message.toLowerCase().includes(term));
};

const getRandomResponse = (responses: string[]): string => {
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};

const formatJobResults = (jobs: JobListing[]): string => {
  if (jobs.length === 0) return "No job listings found.";
  
  return jobs.map(job => (
    `- ${job.title} at ${job.company}\n` +
    `  Location: ${job.location}\n` +
    `  Type: ${job.type}\n` +
    `  Description: ${job.description.slice(0, 100)}...\n` +
    `  Apply at: ${job.applicationUrl}`
  )).join("\n\n");
};

const formatMentorshipResults = (sessions: MentorshipSession[]): string => {
  if (sessions.length === 0) return "No mentorship sessions found.";
  
  return sessions.map(session => (
    `- ${session.title}\n` +
    `  Mentor: ${session.mentor.name}, ${session.mentor.role} at ${session.mentor.company}\n` +
    `  Date: ${session.date} at ${session.time} (${session.duration})\n` +
    `  Description: ${session.description.slice(0, 100)}...\n` +
    `  Register at: ${session.registrationUrl}`
  )).join("\n\n");
};

const formatEventResults = (events: Event[]): string => {
  if (events.length === 0) return "No events found.";
  
  return events.map(event => (
    `- ${event.title}\n` +
    `  Organizer: ${event.organizer}\n` +
    `  Date: ${event.date} at ${event.time}\n` +
    `  Location: ${event.location}\n` +
    `  Description: ${event.description.slice(0, 100)}...\n` +
    `  Register at: ${event.registrationUrl}`
  )).join("\n\n");
};
