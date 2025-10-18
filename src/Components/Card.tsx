import React from "react";

// Card.tsx
interface CardProps {
  courseNumber: number;
  title: string;
  description: string;
  duration: string;
  steps: number;
  isCompleted?: boolean;
  onStartLesson?: () => void;
}

const Card: React.FC<CardProps> = ({
  courseNumber,
  title,
  description,
  duration,
  steps,
  isCompleted = false,
  onStartLesson,
}) => {
  const handleClick = () => {
    if (onStartLesson) {
      onStartLesson();
    } else {
      console.log(`Starting lesson: ${title}`);
    }
  };

  return (
    <div className="p-6 border-2 border-black rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="flex justify-between items-start mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-[#0F7C82]">
          Course #{courseNumber}
        </span>
        <span
          className={`${
            isCompleted ? "inline-flex" : "hidden"
          } items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800`}
        >
          ✓ Completed
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color: "#111827" }}>
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
        <span className="flex items-center">⏱️ {duration}</span>
        <span className="flex items-center">📚 {steps} steps</span>
      </div>
      <button
        onClick={handleClick}
        className="w-full py-2 px-4 rounded-md font-medium text-white transition-colors"
        style={{ backgroundColor: "#0F7C82" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#38C6C7")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#0F7C82")
        }
      >
        {isCompleted ? "Review Lesson" : "Start Lesson"}
      </button>
    </div>
  );
};
export default Card;
