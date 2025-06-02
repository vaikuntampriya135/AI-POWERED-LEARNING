import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Users, Clock, BookOpen, Award, CheckCircle, PlayCircle } from 'lucide-react';
import Button from '../../components/ui/Button';

const courseData = {
  '1': {
    id: '1',
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamentals of machine learning and AI through hands-on projects and real-world applications. This comprehensive course covers everything from basic concepts to advanced techniques.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    instructor: 'Dr. Sarah Johnson',
    instructorTitle: 'AI Research Scientist',
    instructorImage: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg',
    duration: '8 weeks',
    students: 2543,
    rating: 4.8,
    reviews: 342,
    price: 99.99,
    level: 'Intermediate',
    prerequisites: ['Basic Python programming', 'Fundamental mathematics', 'Statistics basics'],
    chapters: [
      {
        title: 'Introduction to ML Concepts',
        lessons: ['What is Machine Learning?', 'Types of ML', 'Applications of ML'],
        duration: '2 hours'
      },
      {
        title: 'Data Preprocessing',
        lessons: ['Data Cleaning', 'Feature Engineering', 'Data Transformation'],
        duration: '3 hours'
      },
      {
        title: 'Supervised Learning',
        lessons: ['Linear Regression', 'Classification', 'Decision Trees'],
        duration: '4 hours'
      }
    ]
  }
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [isEnrolling, setIsEnrolling] = useState(false);
  
  const course = courseData[courseId as keyof typeof courseData];
  
  if (!course) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Course Not Found</h1>
          <Button onClick={() => navigate('/courses')}>Back to Courses</Button>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    setIsEnrolling(true);
    // Simulate enrollment process
    setTimeout(() => {
      setIsEnrolling(false);
      // Navigate to the first lesson or show success message
      navigate(`/courses/${courseId}/learn`);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="h-64 relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {course.title}
              </h1>
              
              <div className="flex items-center flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium text-gray-900 dark:text-white">
                    {course.rating}
                  </span>
                  <span className="ml-1 text-gray-500 dark:text-gray-400">
                    ({course.reviews} reviews)
                  </span>
                </div>
                
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Users size={16} className="mr-1" />
                  {course.students.toLocaleString()} students
                </div>
                
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Clock size={16} className="mr-1" />
                  {course.duration}
                </div>
                
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">
                    {course.level}
                  </span>
                </div>
              </div>
              
              <div className="prose dark:prose-invert max-w-none mb-8">
                <h2 className="text-xl font-semibold mb-4">About This Course</h2>
                <p className="text-gray-600 dark:text-gray-300">{course.description}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Prerequisites</h2>
                <ul className="space-y-2">
                  {course.prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <CheckCircle size={16} className="mr-2 text-green-500" />
                      {prerequisite}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Course Content</h2>
                <div className="space-y-4">
                  {course.chapters.map((chapter, index) => (
                    <div key={index} className="border dark:border-gray-700 rounded-lg">
                      <div className="p-4 flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            {chapter.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {chapter.lessons.length} lessons • {chapter.duration}
                          </p>
                        </div>
                        <BookOpen size={20} className="text-gray-400" />
                      </div>
                      <div className="border-t dark:border-gray-700">
                        {chapter.lessons.map((lesson, lessonIndex) => (
                          <div
                            key={lessonIndex}
                            className="p-4 flex items-center text-gray-600 dark:text-gray-300"
                          >
                            <PlayCircle size={16} className="mr-2" />
                            {lesson}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  ${course.price}
                </div>
              </div>
              
              <Button
                fullWidth
                size="lg"
                onClick={handleEnroll}
                disabled={isEnrolling}
              >
                {isEnrolling ? 'Enrolling...' : 'Enroll Now'}
              </Button>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Clock size={16} className="mr-2" />
                  Full lifetime access
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Award size={16} className="mr-2" />
                  Certificate of completion
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <BookOpen size={16} className="mr-2" />
                  {course.chapters.reduce((acc, chapter) => acc + chapter.lessons.length, 0)} lessons
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Instructor
              </h3>
              <div className="flex items-center">
                <img
                  src={course.instructorImage}
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {course.instructor}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {course.instructorTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;