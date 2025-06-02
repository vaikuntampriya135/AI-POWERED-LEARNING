import React from 'react';
import { motion } from 'framer-motion';
import { Book, Award, Clock, BarChart2, Star, Users, BookOpen, ChevronRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  // Mock data
  const recentCourses = [
    { id: '1', title: 'Introduction to Machine Learning', progress: 65, image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { id: '2', title: 'Advanced JavaScript Concepts', progress: 32, image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { id: '3', title: 'Data Science Fundamentals', progress: 78, image: 'https://images.pexels.com/photos/569360/pexels-photo-569360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
  ];
  
  const recommendedCourses = [
    { id: '4', title: 'Python for Data Analysis', category: 'Programming', rating: 4.8, image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { id: '5', title: 'Web Development Bootcamp', category: 'Web Development', rating: 4.9, image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { id: '6', title: 'UX/UI Design Principles', category: 'Design', rating: 4.7, image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
  ];

  const upcomingAssessments = [
    { id: '1', title: 'Machine Learning Midterm', course: 'Introduction to Machine Learning', dueDate: '2025-05-15', status: 'Upcoming' },
    { id: '2', title: 'JavaScript Functions Quiz', course: 'Advanced JavaScript Concepts', dueDate: '2025-05-10', status: 'Pending' },
  ];
  
  const statsData = [
    { id: '1', label: 'Courses', value: '7', icon: <Book />, color: 'bg-blue-500' },
    { id: '2', label: 'Completed', value: '3', icon: <Award />, color: 'bg-green-500' },
    { id: '3', label: 'Hours', value: '42', icon: <Clock />, color: 'bg-purple-500' },
    { id: '4', label: 'Certificates', value: '2', icon: <Award />, color: 'bg-yellow-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, {user?.name?.split(' ')[0] || 'Student'}!
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Track your progress, continue learning, and explore new courses.
          </p>
        </motion.div>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <div className={`w-12 h-12 ${stat.color} bg-opacity-20 dark:bg-opacity-30 rounded-full flex items-center justify-center text-white mb-4`}>
              {stat.icon}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Continue Learning Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Continue Learning</h2>
          <a href="#" className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center hover:underline">
            View all courses <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
            >
              <div className="h-32 bg-gray-200 dark:bg-gray-700 relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{course.title}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Progress</span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <Button fullWidth>Continue</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Upcoming Assessments */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Upcoming Assessments</h2>
          <a href="#" className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center hover:underline">
            View all <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Assessment
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Course
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {upcomingAssessments.map((assessment) => (
                  <tr key={assessment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{assessment.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-400">{assessment.course}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(assessment.dueDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        assessment.status === 'Upcoming' 
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' 
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                      }`}>
                        {assessment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="outline" size="sm">
                        Start
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Recommended Courses */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recommended for You</h2>
          <a href="#" className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center hover:underline">
            View all <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
            >
              <div className="h-40 bg-gray-200 dark:bg-gray-700 relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white">
                    {course.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{course.title}</h3>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">
                      {course.rating}
                    </span>
                  </div>
                  <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    <span>2.5k students</span>
                  </div>
                </div>
                <Button fullWidth variant="outline">Enroll Now</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;