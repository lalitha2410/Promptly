import React, { useState } from "react";
import { Bot, MessageCircleMore, Send, User } from "lucide-react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const API_KEY = import.meta.env.VITE_API_KEY;

const Chatpage = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey! 👋 I'm your AI assistant." },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    setIsTyping(true);

    try {
      const response = await handleGetResponse();

      const reply = response?.choices[0]?.message?.content;

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsTyping(false);
    }
  };
  async function handleGetResponse() {
    const { data } = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek/deepseek-chat-v3.1:free",
        messages: [
          {
            role: "user",
            content: input,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return data;
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-black">
      <nav className="fixed h-[100px] w-full bg-[#16161a] border border-b-gray-800 flex items-center gap-2 p-5">
        <div className="h-[45px] w-[45px] rounded-full bg-[#3C83F6] flex items-center justify-center">
          <Bot className="size-[33px]" />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <p className="text-white font-semibold text-[18px] ml-2">Promptly</p>
          <p className="flex text-[14px] gap-1 text-gray-500">
            <MessageCircleMore className="size-[14px] mt-1 text-gray-500" />
            Online
          </p>
        </div>
      </nav>

      <div className="flex-1 mt-[100px] mb-[110px] overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-2 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <div className="h-8 w-8 rounded-full bg-[#3C83F6] flex items-center justify-center">
                <Bot size={18} />
              </div>
            )}

            <div
              className={`px-4 py-2 rounded-2xl  w-fit max-w-[60%]  ${
                msg.sender === "user"
                  ? "bg-[#3C83F6] text-black rounded-br-none"
                  : "bg-gray-800 text-white rounded-bl-none"
              }`}
            >
              {msg.sender === "user" ? (
                msg.text
              ) : (
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              )}
            </div>
            {msg.sender === "user" && (
              <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
                <User size={18} />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-start gap-2">
            <div className="h-8 w-8 rounded-full bg-[#3C83F6] flex items-center justify-center">
              <Bot size={18} />
            </div>
            <div className="px-4 py-2 rounded-2xl bg-gray-800 text-white">
              <span className="animate-pulse">...</span>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 bg-[#16161a] h-[110px] w-full flex justify-center items-center border gap-3 border-t-gray-800 p-4">
        <input
          type="text"
          placeholder="Type your message..."
          className="h-[55px] w-[90%] text-white bg-gray-900 p-3 border border-gray-800 rounded-lg focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <div
          onClick={handleSend}
          className="h-[45px] w-[45px] rounded-lg bg-[#3c83f6] flex justify-center items-center text-white cursor-pointer hover:bg-[#3c74f6]"
        >
          <Send />
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
