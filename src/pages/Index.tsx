
import React from 'react';
import Header from '../components/Header';
import ChatContainer from '../components/ChatContainer';

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto max-w-4xl flex flex-col overflow-hidden">
        <ChatContainer />
      </main>
      <footer className="bg-white text-center text-sm text-gray-500 p-2 border-t">
        <p>© {new Date().getFullYear()} JobsForHer Foundation. Asha is powered by AI.</p>
      </footer>
    </div>
  );
};

export default Index;
