import React, { useState } from "react";
import { FaRobot, FaUser } from "react-icons/fa";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    const userMessage = { text: userInput, sender: "user" };
    const botMessage = { text: `You said: "${userInput}"`, sender: "bot" };

    setMessages([...messages, userMessage, botMessage]);
    setUserInput(""); // Clear input field
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 h-[500px] rounded-lg shadow-lg bg-white flex flex-col">
      <div className="flex flex-col flex-grow p-3 overflow-y-auto">
        <div className="flex flex-col space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 ${
                message.sender === "bot" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.sender === "bot" ? "bg-gray-300" : "bg-blue-500"
                }`}
              >
                {message.sender === "bot" ? (
                  <FaRobot className="text-white text-lg" />
                ) : (
                  <FaUser className="text-white text-lg" />
                )}
              </div>
              <p
                className={`p-3 rounded-lg max-w-[70%] ${
                  message.sender === "bot"
                    ? "bg-gray-100 text-gray-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {message.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center p-3 border-t border-gray-200">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;