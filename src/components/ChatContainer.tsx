
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import SuggestedQueries from './SuggestedQueries';
import { generateId, generateBotResponse } from '../utils/chatUtils';
import { suggestedQueries } from '../data/mockData';

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: generateId(),
      content: "Hello! I'm Asha, your career assistant from JobsForHer Foundation. I can help you find job opportunities, mentorship programs, and events tailored to your professional goals. How can I assist you today?",
      role: "assistant",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: generateId(),
      content,
      role: "user",
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setIsTyping(true);
    
    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = generateBotResponse(content, messages);
      const botMessage: Message = {
        id: generateId(),
        content: botResponse,
        role: "assistant",
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, 1000);
  };
  
  const handleSuggestedQuery = (query: string) => {
    handleSendMessage(query);
  };
  
  return (
    <div className="flex flex-col h-screen">
      <div className="chat-container">
        {messages.map(message => (
          <MessageBubble key={message.id} message={message} />
        ))}
        
        {isTyping && (
          <div className="typing-indicator bot-message message-bubble flex space-x-2 items-center w-20">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
          </div>
        )}
        
        <div ref={chatEndRef} />
      </div>
      
      {messages.length === 1 && (
        <SuggestedQueries queries={suggestedQueries} onSelectQuery={handleSuggestedQuery} />
      )}
      
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
