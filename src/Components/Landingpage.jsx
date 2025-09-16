import React from "react";
import { Bot, MessageCircleMore, Sparkles, MoveRight, MessageSquare, Zap, Shield, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Landingpage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-black via-gray-900 to-gray-900">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 h-16 sm:h-20 w-full bg-black flex justify-between items-center px-4 sm:px-10 border-b border-gray-600 z-50">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 sm:h-[45px] sm:w-[45px] rounded-2xl bg-[#3C83F6] flex items-center justify-center">
            <Bot className="size-[26px] sm:size-[33px]" />
          </div>
          <p className="text-white font-bold text-lg sm:text-xl">Promptly</p>
        </div>
        <button
          onClick={() => navigate("/ChatPage")}
          className="flex justify-center items-center h-9 sm:h-10 w-[90px] sm:w-[110px] rounded-lg gap-2 bg-[#3C83F6] text-black text-xs sm:text-sm hover:bg-[#3c74f6] cursor-pointer shadow-xl hover:scale-105 transition-all duration-150 font-semibold"
        >
          <MessageCircleMore className="size-4" /> Try Now
        </button>
      </nav>

      {/* HERO */}
      <div className="flex flex-col items-center pt-28 sm:pt-32 gap-4">
        <div className="flex items-center gap-3">
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#3C83F6] flex justify-center items-center">
            <Bot className="size-8 sm:size-10" />
          </div>
          <div className="px-3 py-1 rounded-2xl bg-gray-800 flex items-center gap-2">
            <Sparkles className="text-[#3C83F6] size-4" />
            <p className="text-white font-semibold text-xs sm:text-sm">Powered by  DeepSeek V3.1</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center px-4 sm:px-10 mt-4">
          <p className="text-gray-300 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">AI Assistant</p>
          <p className="text-[#3C83F6] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">That Gets You</p>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-[600px] mt-4">
            Experience intelligent conversations with our advanced AI chatbot.
            Get instant answers, creative solutions, and seamless assistance.
          </p>
          <button
            onClick={() => navigate("/ChatPage")}
            className="flex h-11 w-40 sm:w-48 rounded-lg bg-[#3C83F6] gap-2 px-3 font-medium text-base sm:text-lg items-center justify-center cursor-pointer hover:bg-[#3c74f6] shadow-xl hover:scale-105 transition-all duration-150 mt-6"
          >
            Start Chatting <MoveRight />
          </button>
        </div>
      </div>

      {/* FEATURES SMALL STRIP */}
      <hr className="border-t border-gray-700 w-4/5 mx-auto my-10" />
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16 text-center">
        <div>
          <p className="text-[#3c83f6] font-bold text-xl sm:text-2xl">24/7</p>
          <p className="text-gray-500 text-sm sm:text-lg">Always Available</p>
        </div>
        <div>
          <p className="text-[#3c83f6] font-bold text-xl sm:text-2xl">Instant</p>
          <p className="text-gray-500 text-sm sm:text-lg">Response Time</p>
        </div>
        <div>
          <p className="text-[#3c83f6] font-bold text-xl sm:text-2xl">Smart</p>
          <p className="text-gray-500 text-sm sm:text-lg">AI Powered</p>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="flex flex-col items-center pt-16 px-4 text-center">
        <p className="text-gray-300 text-2xl sm:text-4xl md:text-5xl font-bold">Why Choose Our AI Assistant?</p>
        <p className="text-gray-500 text-sm sm:text-lg md:text-xl max-w-[700px] mt-4">
          Built with the latest AI technology to provide you with the best
          conversational experience.
        </p>
      </div>

      {/* CARDS */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 py-10 px-4">
        {[
          {
            icon: <MessageSquare />,
            title: "Natural Conversations",
            desc: "Engage in human-like conversations with advanced language understanding and context awareness.",
          },
          {
            icon: <Zap />,
            title: "Lightning Fast",
            desc: "Get instant responses powered by cutting-edge AI technology for seamless user experience.",
          },
          {
            icon: <Shield />,
            title: "Secure & Private",
            desc: "Your conversations are protected with enterprise-grade security and privacy measures.",
          },
          {
            icon: <Brain />,
            title: "Intelligent Responses",
            desc: "Receive thoughtful, accurate answers backed by advanced machine learning algorithms.",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="flex flex-col h-auto sm:h-[260px] w-full sm:w-[280px] bg-gray-800 rounded-lg border border-gray-600 hover:border-[#3c83f7] p-5 gap-3 text-center sm:text-left"
          >
            <div className="w-12 h-12 rounded-lg flex justify-center items-center bg-[#3c83f6] text-white mx-auto sm:mx-0">
              {card.icon}
            </div>
            <p className="text-gray-300 text-lg sm:text-xl font-bold">{card.title}</p>
            <p className="text-gray-500 text-sm sm:text-base">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landingpage;
