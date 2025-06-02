import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Clock } from 'lucide-react';
import Button from '../../components/ui/Button';

const courses = [
  {
    id: '1',
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamentals of machine learning and AI',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    instructor: 'Dr. Sarah Johnson',
    duration: '8 weeks',
    students: 2543,
    rating: 4.8,
    price: 99.99,
    level: 'Intermediate'
  },
  {
    id: '2',
    title: 'Web Development Bootcamp',
    description: 'Complete guide to modern web development',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg',
    instructor: 'Mike Wilson',
    duration: '12 weeks',
    students: 3821,
    rating: 4.9,
    price: 149.99,
    level: 'Beginner'
  },
  {
    id: '3',
    title: 'Data Science Fundamentals',
    description: 'Master the basics of data science and analytics',
    image: 'https://images.pexels.com/photos/569360/pexels-photo-569360.jpeg',
    instructor: 'Dr. Emily Chen',
    duration: '10 weeks',
    students: 1987,
    rating: 4.7,
    price: 129.99,
    level: 'Beginner'
  }
];

const CourseLibrary = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Course Library</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Explore our collection of expert-led courses</p>
        </div>
        <div className="flex gap-4">
          <select className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2">
            <option>All Categories</option>
            <option>Programming</option>
            <option>Data Science</option>
            <option>Machine Learning</option>
          </select>
          <select className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2">
            <option>All Levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="h-48 relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-sm font-medium">
                  ${course.price}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <Clock size={16} className="mr-1" />
                {course.duration}
                <span className="mx-2">•</span>
                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">
                  {course.level}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {course.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {course.description}
              </p>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium text-gray-900 dark:text-white">
                    {course.rating}
                  </span>
                </div>
                <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Users size={16} className="mr-1" />
                  {course.students.toLocaleString()} students
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  By {course.instructor}
                </div>
                <Link to={`/courses/${course.id}`}>
                  <Button>View Course</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseLibrary;