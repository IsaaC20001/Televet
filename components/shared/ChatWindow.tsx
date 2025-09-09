import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../../types';
import { SendIcon, PaperclipIcon, CloseIcon } from '../icons/Icons';

interface ChatWindowProps {
  initialMessages: ChatMessage[];
  onClose: () => void;
  participantName: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ initialMessages, onClose, participantName }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (!userInput.trim()) return;

    const newMessages: ChatMessage[] = [
      ...messages,
      { sender: 'farmer', text: userInput, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ];
    setMessages(newMessages);
    setUserInput('');

    // Simulate vet response
    setTimeout(() => {
        setMessages(prev => [...prev, {
            sender: 'vet',
            text: "Thank you, I've received your message. I'm reviewing the details now.",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-md h-[80vh] flex flex-col animate-fade-in-up">
            <header className="bg-panel p-4 flex justify-between items-center border-b border-gray-200">
                <div>
                    <h3 className="font-bold text-lg text-text">Chat with {participantName}</h3>
                    <p className="text-xs text-success flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-success"></span>
                        Active Now
                    </p>
                </div>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                    <CloseIcon />
                </button>
            </header>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-end gap-2 ${msg.sender === 'farmer' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs md:max-w-sm rounded-2xl px-4 py-2 ${msg.sender === 'farmer' ? 'bg-brand text-white rounded-br-none' : 'bg-gray-200 text-text rounded-bl-none'}`}>
                           <p className="text-sm">{msg.text}</p>
                           <p className="text-xs text-right mt-1 opacity-70">{msg.timestamp}</p>
                        </div>
                    </div>
                ))}
                 <div ref={messagesEndRef} />
            </div>
            
            <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex items-center space-x-2">
                     <button className="p-3 text-gray-500 hover:text-brand">
                        <PaperclipIcon />
                    </button>
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type a message..."
                        className="flex-1 p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-brand focus:outline-none bg-white text-black"
                    />
                    <button onClick={handleSend} disabled={!userInput.trim()} className="bg-brand text-white w-12 h-12 flex items-center justify-center rounded-full disabled:bg-gray-400 hover:bg-brand-dark transition flex-shrink-0">
                       <SendIcon/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ChatWindow;