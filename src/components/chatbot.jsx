// 
// src/components/chatbot.jsx
import React from "react";
import { knowledgeBase, defaultResponse } from "../data/KB";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini client
const ai = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Function to get AI response
async function getAIResponse(userInput) {
  try {
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

    const response = await model.generateContent(
      `You are a tax assistant for Nepal. Answer this question: ${userInput}`
    );
    return response.response.text();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm having trouble connecting to the knowledge base. Please try again later.";
  }
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    {
      text: "Hello! I'm TaxEase Assistant. I can help answer your questions about taxes in Nepal. What would you like to know?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);

  // Suggested questions for the user
  const suggestedQuestions = [
    "What is the tax filing deadline?",
    "How can I reduce my tax?",
    "What are the tax slabs?",
    "What documents do I need to file?",
  ];

  // Function to find the best response based on user input
  const findResponse = async (userInput) => {
    const input = userInput.toLowerCase();

    // Check for matching keywords in our knowledge base first
    for (const item of knowledgeBase) {
      for (const keyword of item.keywords) {
        if (input.includes(keyword)) {
          return item.response;
        }
      }
    }

    // If no match found, use Gemini AI
    try {
      const aiResponse = await getAIResponse(userInput);
      return aiResponse;
    } catch (error) {
      console.error("Error getting AI response:", error);
      return defaultResponse;
    }
  };

  // Function to handle sending a message
  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    // Add user message to chat
    const newMessages = [...messages, { text: inputValue, sender: "user" }];
    setMessages(newMessages);
    setInputValue("");
    setIsTyping(true);

    // Get response and update chat
    try {
      const response = await findResponse(inputValue);
      setMessages([...newMessages, { text: response, sender: "bot" }]);
    } catch (error) {
      console.error("Error getting response:", error);
      setMessages([
        ...newMessages,
        { text: "Sorry, I encountered an error. Please try again.", sender: "bot" },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // Function to handle suggested question click
  const handleSuggestedQuestion = async (question) => {
    setInputValue(question);
    // Auto-send the suggested question
    const newMessages = [...messages, { text: question, sender: "user" }];
    setMessages(newMessages);
    setIsTyping(true);

    // Get response and update chat
    try {
      const response = await findResponse(question);
      setMessages([...newMessages, { text: response, sender: "bot" }]);
    } catch (error) {
      console.error("Error getting response:", error);
      setMessages([
        ...newMessages,
        { text: "Sorry, I encountered an error. Please try again.", sender: "bot" },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom when new messages are added
  React.useEffect(() => {
    if (isOpen) {
      const messagesContainer = document.querySelector(".chatbot-messages");
      if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
    }
  }, [messages, isOpen]);

  return (
    <div className="chatbot-container">
      <div className="chatbot-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="chatbot-title">
          <i className="fas fa-robot chatbot-icon"></i>
          <h5>Tax Assistant</h5>
        </div>
        <button className="chatbot-toggle">
          <i className={`fas fa-${isOpen ? "times" : "comment"}`}></i>
        </button>
      </div>

      <div className={`chatbot-body ${isOpen ? "open" : ""}`}>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.sender === "bot" ? "bot-message" : "user-message"
              }`}
            >
              <div className="message-content">{message.text}</div>
            </div>
          ))}

          {isTyping && (
            <div className="message bot-message">
              <div className="message-content">
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="suggested-questions">
          <h3>Suggested Questions:</h3>
          <div className="question-chips">
            {suggestedQuestions.map((question, index) => (
              <div
                key={index}
                className="question-chip"
                onClick={() => handleSuggestedQuestion(question)}
              >
                {question}
              </div>
            ))}
          </div>
        </div>

        <div className="chatbot-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about taxes in Nepal..."
          />
          <button onClick={handleSendMessage}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
