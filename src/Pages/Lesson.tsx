import Card from "../Components/Card";
const Lesson: React.FC = () => {
  const courses = [
    {
      courseNumber: 1,
      title: "ASL Alphabet",
      description:
        "Master the American Sign Language alphabet and fingerspelling fundamentals.",
      duration: "1.5 hours",
      steps: 26,
      isCompleted: true,
    },
    {
      courseNumber: 2,
      title: "Basic Greetings",
      description:
        "Learn essential greetings and introductions in sign language.",
      duration: "2 hours",
      steps: 15,
      isCompleted: false,
    },
    {
      courseNumber: 3,
      title: "Numbers & Counting",
      description:
        "Learn to sign numbers from 1-100 and basic counting concepts.",
      duration: "1 hour",
      steps: 10,
      isCompleted: false,
    },
    {
      courseNumber: 4,
      title: "Common Phrases",
      description:
        "Practice everyday phrases and expressions used in daily conversation.",
      duration: "2.5 hours",
      steps: 20,
      isCompleted: false,
    },
    {
      courseNumber: 5,
      title: "Family & Relationships",
      description:
        "Vocabulary for family members, friends, and relationship terms.",
      duration: "1.5 hours",
      steps: 12,
      isCompleted: false,
    },
    {
      courseNumber: 6,
      title: "Colors & Descriptions",
      description: "Learn to sign colors and descriptive adjectives.",
      duration: "1 hour",
      steps: 18,
      isCompleted: false,
    },
  ];

  const handleStartLesson = (courseNumber: number, title: string) => {
    console.log(`Starting Course #${courseNumber}: ${title}`);
    // Add your navigation or lesson start logic here
    // e.g., navigate(`/lesson/${courseNumber}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <span className="text-6xl">👋</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sign Language Course
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your journey to learn sign language step by step
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card
              key={course.courseNumber}
              courseNumber={course.courseNumber}
              title={course.title}
              description={course.description}
              duration={course.duration}
              steps={course.steps}
              isCompleted={course.isCompleted}
              onStartLesson={() =>
                handleStartLesson(course.courseNumber, course.title)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
