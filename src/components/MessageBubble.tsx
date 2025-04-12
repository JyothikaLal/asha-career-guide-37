
import React, { useState } from 'react';
import { Message, FeedbackData } from '../types';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { toast } from 'sonner';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const [feedback, setFeedback] = useState<'helpful' | 'unhelpful' | null>(null);
  
  const handleFeedback = (isHelpful: boolean) => {
    const feedbackData: FeedbackData = {
      messageId: message.id,
      helpful: isHelpful
    };
    
    // Here we would typically send this feedback to a server
    console.log('Feedback submitted:', feedbackData);
    
    // Update local state
    setFeedback(isHelpful ? 'helpful' : 'unhelpful');
    
    // Show toast notification
    toast.success(isHelpful ? 'Thanks for your feedback!' : 'Thanks for your feedback. We\'ll work on improving.');
  };
  
  const isAssistant = message.role === 'assistant';
  
  return (
    <div className={`message-container ${isAssistant ? 'flex flex-col items-start' : 'flex flex-col items-end'}`}>
      <div className={`message-bubble ${isAssistant ? 'bot-message' : 'user-message'}`}>
        <div className="whitespace-pre-line">{message.content}</div>
      </div>
      
      {isAssistant && (
        <div className="feedback-buttons flex items-center space-x-2 ml-3 mt-1 text-xs text-gray-500">
          <span>Was this helpful?</span>
          <button 
            onClick={() => handleFeedback(true)} 
            className={`p-1 rounded-full ${feedback === 'helpful' ? 'bg-green-100 text-green-600' : 'hover:bg-gray-100'}`}
            disabled={feedback !== null}
          >
            <ThumbsUp size={16} />
          </button>
          <button 
            onClick={() => handleFeedback(false)} 
            className={`p-1 rounded-full ${feedback === 'unhelpful' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'}`}
            disabled={feedback !== null}
          >
            <ThumbsDown size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
