import React, { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { fetchGeminiResponse } from "../services/GeminiAPI";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    Array<{ text: string; isUser: boolean }>
  >([]);
  const { theme } = useTheme();
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { text: message, isUser: true }]);
    setMessage("");

    const botText = await fetchGeminiResponse(message);
    setMessages((prev) => [...prev, { text: botText, isUser: false }]);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 p-4 rounded-full shadow-lg transition-transform hover:scale-110 ${
          theme === "light"
            ? "bg-mint-600 text-white"
            : "bg-gray-700 text-gray-200"
        }`}
        aria-label={t("chatbot.open")}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {isOpen && (
        <div
          className={`fixed bottom-20 right-4 w-96 max-w-[calc(100vw-2rem)] rounded-lg shadow-xl ${
            theme === "light" ? "bg-white" : "bg-gray-800"
          }`}
        >
          <div
            className={`p-4 flex justify-between items-center border-b ${
              theme === "light" ? "border-gray-200" : "border-gray-700"
            }`}
          >
            <h3 className={theme === "light" ? "text-gray-800" : "text-white"}>
              {t("chatbot.title")}
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className={`p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 ${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
              aria-label={t("chatbot.close")}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    msg.isUser
                      ? "bg-mint-600 text-white"
                      : theme === "light"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-4 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("chatbot.placeholder")}
                className={`flex-1 p-2 rounded-lg border ${
                  theme === "light"
                    ? "border-gray-200 bg-white text-gray-800"
                    : "border-gray-600 bg-gray-700 text-white"
                }`}
              />
              <button
                type="submit"
                className={`p-2 rounded-lg transition-colors ${
                  theme === "light"
                    ? "bg-mint-600 text-white hover:bg-mint-700"
                    : "bg-gray-600 text-white hover:bg-gray-500"
                }`}
                aria-label={t("chatbot.send")}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
