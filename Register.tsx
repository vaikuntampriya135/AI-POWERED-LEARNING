import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus, User, Mail, Lock, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';
import InputField from '../../components/ui/InputField';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormData>();
  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const password = watch('password');

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setRegisterError('');
    
    try {
      const success = await registerUser(data.name, data.email, data.password);
      if (success) {
        navigate('/dashboard');
      } else {
        setRegisterError('Registration failed. Please try again.');
      }
    } catch (error) {
      setRegisterError('An error occurred. Please try again.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-purple-950">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 order-2 lg:order-1">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 mb-4">
                <UserPlus size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create Account</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Join LearnSync and start your learning journey</p>
            </div>
            
            {registerError && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-300 text-sm">
                {registerError}
              </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <InputField
                label="Full Name"
                type="text"
                icon={<User size={18} />}
                error={errors.name?.message}
                registration={{
                  ...register('name', { 
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters'
                    }
                  })
                }}
              />
              
              <InputField
                label="Email Address"
                type="email"
                icon={<Mail size={18} />}
                error={errors.email?.message}
                registration={{
                  ...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })
                }}
              />
              
              <InputField
                label="Password"
                type="password"
                icon={<Lock size={18} />}
                error={errors.password?.message}
                registration={{
                  ...register('password', { 
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters'
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
                    }
                  })
                }}
              />
              
              <InputField
                label="Confirm Password"
                type="password"
                icon={<Lock size={18} />}
                error={errors.confirmPassword?.message}
                registration={{
                  ...register('confirmPassword', { 
                    required: 'Please confirm your password',
                    validate: value => value === password || 'Passwords do not match'
                  })
                }}
              />
              
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  I agree to the <a href="#" className="text-purple-600 hover:text-purple-500 dark:text-purple-400">Terms of Service</a> and <a href="#" className="text-purple-600 hover:text-purple-500 dark:text-purple-400">Privacy Policy</a>
                </label>
              </div>
              
              <Button 
                type="submit" 
                fullWidth 
                disabled={isLoading}
                color="purple"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin mr-2" />
                    Creating account...
                  </>
                ) : 'Create Account'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="hidden lg:flex lg:w-1/2 bg-purple-600 items-center justify-center p-12 order-1 lg:order-2">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <h1 className="text-4xl font-bold text-white mb-6">Join LearnSync Today</h1>
          <p className="text-purple-100 text-xl mb-8">
            Create your account and embark on a personalized learning journey tailored just for you.
          </p>
          <div className="space-y-6 text-white">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Get Started in Minutes</h3>
                <p className="text-purple-100">Sign up and immediately access personalized learning materials</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Unique Learning Experience</h3>
                <p className="text-purple-100">Our AI adapts to your learning style and pace for optimal results</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Learn Faster, Remember Longer</h3>
                <p className="text-purple-100">Scientifically designed system improves knowledge retention</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;