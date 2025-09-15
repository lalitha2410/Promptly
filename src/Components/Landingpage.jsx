
import React from "react";
import { Bot } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import { Sparkles } from "lucide-react";
import { MoveRight } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { Zap } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Brain } from 'lucide-react';
import {useNavigate} from 'react-router-dom'; 



function Landingpage() {
  const navigate=useNavigate();
  return (
    <>
      <div className="  min-h-screen w-full flex flex-col bg-gradient-to-b from-black via-gray-900 to-gray-900 ">
        <nav className=" fixed  h-20 w-full  bg-black  flex justify-between items-center px-30 mx-auto border-1 border-b-gray-600 ">
          <div className="flex justify-center items-center gap-3">
            <div className="h-[45px] w-[45px] rounded-2xl bg-[#3C83F6] flex items-center justify-center">
              <Bot className="size-[33px]" />
            </div>
            <p className="text-white font-bold text-[20px]">Promptly</p>
          </div>

       

          <button onClick={()=>navigate('/ChatPage')} className=" flex justify-center items-center h-[40px] w-[100px] rounded-lg gap-2  bg-[#3C83F6] text-black text-[13px] hover:bg-[#3c74f6]  cursor-pointer shadow-xl hover:scale-105 transition-all duration-50 font-semibold">
            <MessageCircleMore className="size-[15px]" /> Try Now
          </button>
        </nav>

        <div className="flex justify-center items-center gap-2 pt-20 *: mt-6">
          <div className="h-[80px] w-[80px] rounded-full bg-[#3C83F6] flex justify-center items-center">
            <Bot className="size-[45px]" />
          </div>
          <div className="w-[180px] h-[38px] rounded-2xl bg-gray-800 flex justify-center items-center gap-2">
            <Sparkles className="text-[#3C83F6] size-[15px]" />
            <p className="text-white font-semibold text-[15px] ">
              Powered by OpenAI
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center  mt-6 pb-16 ">
          <p className="text-gray-300 text-7xl font-bold">AI Assistant</p>
          <p className="text-[#3C83F6] text-7xl font-bold">That Gets You</p>
          <p className="text-gray-500 text-2xl text-center px-95 py-7">
            Experience intelligent conversations with our advanced AI chatbot.
            Get instant answers, creative solutions, and seamless assistance.
          </p>
          <button onClick={()=>navigate('/ChatPage')} className=" flex h-[46px] w-[180px] rounded-lg bg-[#3C83F6] gap-2 px-2 font-medium text-[18px] items-center justify-center cursor-pointer  hover:bg-[#3c74f6]  shadow-xl hover:scale-105 transition-all duration-50 mb-7">
            Start Chatting <MoveRight />{" "}
          </button>
        </div>
        <hr className="border-t border-gray-700 w-[60%] mx-auto" />
        <div className="flex  justify-center items-center  pt-8 gap-30">
          <div className="flexx flex-col ">
            <p className="text-[#3c83f6] font-bold text-[25px]">24/7</p>
            <p className="text-gray-500  text-[18px]">Always Available</p>
          </div>
          <div className="flexx flex-col">
            <p className="text-[#3c83f6] font-bold text-[25px]">Instant</p>
            <p className="text-gray-500  text-[18px]">Response Time</p>
          </div>
          <div className="flexx flex-col">
            <p className="text-[#3c83f6] font-bold text-[25px]">Smart</p>
            <p className="text-gray-500  text-[18px]">AI Powered</p>
          </div>
        </div>
        <div className="flex flex-col items-center pt-30">
          <p className="text-gray-300 text-5xl font-bold">
            Why Choose Our AI Assistant?
          </p>
          <p className="text-gray-500 text-xl text-center px-95 py-7">
            Built with the latest AI technology to provide you with the best
            conversational experience.
          </p>
        </div>
        <div className="flex justify-center items-center gap-6 pb-20 pt-10 ">
          <div className="flex flex-col h-[250px] w-[280px] bg-gray-800 rounded-lg border border-gray-500 hover:border-[#3c83f7]  p-4 gap-4">
            <div className="w-[50px] h-[50px] rounded-lg flex justify-center items-center bg-[#3c83f6]">
              <MessageSquare />
            </div>
            <p className="text-gray-300 text-xl font-bold">
              Natural Conversations
            </p>
            <p className="text-gray-500  text-[18px]">
              Engage in human-like conversations with advanced language
              understanding and context awareness.
            </p>
          </div>
           <div className="flex flex-col h-[250px] w-[280px] bg-gray-800 rounded-lg border border-gray-500  hover:border-[#3c83f7] p-4 gap-4">
            <div className="w-[50px] h-[50px] rounded-lg flex justify-center items-center bg-[#3c83f6]">
               <Zap />
            </div>
            <p className="text-gray-300 text-xl font-bold">
            Lightning Fast
            </p>
            <p className="text-gray-500  text-[18px]">
            Get instant responses powered by cutting-edge AI technology for seamless user experience.
            </p>
          </div>
           <div className="flex flex-col h-[250px] w-[280px] bg-gray-800 rounded-lg border border-gray-500 hover:border-[#3c83f7] p-4 gap-4">
            <div className="w-[50px] h-[50px] rounded-lg flex justify-center items-center bg-[#3c83f6]">
                <Shield />
            </div>
            <p className="text-gray-300 text-xl font-bold">
            Secure & Private
            </p>
            <p className="text-gray-500  text-[18px]">
             Your conversations are protected with enterprise-grade security and privacy measures.
            </p>
          </div>
           <div className="flex flex-col h-[250px] w-[280px] bg-gray-800 rounded-lg border border-gray-500 hover:border-[#3c83f7]  p-4 gap-4">
            <div className="w-[50px] h-[50px] rounded-lg flex justify-center items-center bg-[#3c83f6]">
             <Brain />
            </div>
            <p className="text-gray-300 text-xl font-bold">
             Intelligent Responses
            </p>
            <p className="text-gray-500  text-[18px]">
             Receive thoughtful, accurate answers backed by advanced machine learning algorithms. 
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Landingpage;
