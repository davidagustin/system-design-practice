'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { studyMaterials, categories, difficultyLevels, StudyMaterial } from './data/studyMaterials';
import { quizQuestions, quizCategories, getQuestionsByCategory, getQuestionsByDifficulty, QuizQuestion } from './data/quizData';
import { concepts, conceptCategories, getConceptsByCategory, getConceptsByDifficulty, Concept } from './data/conceptsData';
import { 
  loadProgress, 
  updateQuizScore, 
  markMaterialCompleted, 
  markConceptCompleted, 
  updateStudyTime, 
  getProgressStats,
  resetProgress,
  ProgressData 
} from './utils/progress';
import { ThemeToggle } from './components/ThemeToggle';

// Simple SVG Icons
const BookOpenIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const BrainIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const HelpCircleIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BarChartIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const FilterIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
);

function HomePage() {
  const [activeTab, setActiveTab] = useState('materials');
  const [selectedMaterial, setSelectedMaterial] = useState<StudyMaterial | null>(null);
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [progress, setProgress] = useState<ProgressData>(loadProgress());
  const [progressStats, setProgressStats] = useState(getProgressStats());
  
  // Refs for tracking study time
  const materialStartTime = useRef<number>(0);
  const conceptStartTime = useRef<number>(0);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [quizCategory, setQuizCategory] = useState('All');
  const [quizDifficulty, setQuizDifficulty] = useState('All');
  const [quizQuestionCount, setQuizQuestionCount] = useState(10);
  const [quizStarted, setQuizStarted] = useState(false);

  // Filter materials
  const filteredMaterials = studyMaterials.filter(material => {
    const matchesCategory = selectedCategory === 'All' || material.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || material.difficulty === selectedDifficulty;
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  // Filter concepts
  const filteredConcepts = concepts.filter(concept => {
    const matchesCategory = selectedCategory === 'All' || concept.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || concept.difficulty === selectedDifficulty;
    const matchesSearch = concept.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         concept.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  // Filter quiz questions
  const filteredQuizQuestions = quizQuestions.filter(question => {
    const matchesCategory = quizCategory === 'All' || question.category === quizCategory;
    const matchesDifficulty = quizDifficulty === 'All' || question.difficulty === quizDifficulty;
    return matchesCategory && matchesDifficulty;
  });

  // Get random subset of questions for the quiz
  const getQuizQuestions = () => {
    const availableQuestions = [...filteredQuizQuestions];
    const count = Math.min(quizQuestionCount, availableQuestions.length);
    
    // Shuffle and take the first 'count' questions
    for (let i = availableQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [availableQuestions[i], availableQuestions[j]] = [availableQuestions[j], availableQuestions[i]];
    }
    
    return availableQuestions.slice(0, count);
  };

  const quizQuestionsToShow = quizStarted ? getQuizQuestions() : [];

  const handleQuizAnswer = (questionId: number, answerIndex: number) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateQuizScore = () => {
    let correct = 0;
    quizQuestionsToShow.forEach(question => {
      if (quizAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quizQuestionsToShow.length) * 100);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuiz(0);
    setQuizAnswers({});
    setShowResults(false);
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setQuizAnswers({});
    setShowResults(false);
    setQuizStarted(false);
  };

  // Progress tracking functions
  const handleMaterialOpen = (material: StudyMaterial) => {
    setSelectedMaterial(material);
    materialStartTime.current = Date.now();
  };

  const handleMaterialClose = () => {
    if (selectedMaterial && materialStartTime.current > 0) {
      const timeSpent = Math.floor((Date.now() - materialStartTime.current) / 1000);
      updateStudyTime('material', selectedMaterial.id.toString(), timeSpent);
      markMaterialCompleted(selectedMaterial.id.toString());
      setProgress(loadProgress());
      setProgressStats(getProgressStats());
    }
    setSelectedMaterial(null);
    materialStartTime.current = 0;
  };

  const handleConceptOpen = (concept: Concept) => {
    setSelectedConcept(concept);
    conceptStartTime.current = Date.now();
  };

  const handleConceptClose = () => {
    if (selectedConcept && conceptStartTime.current > 0) {
      const timeSpent = Math.floor((Date.now() - conceptStartTime.current) / 1000);
      updateStudyTime('concept', selectedConcept.id.toString(), timeSpent);
      markConceptCompleted(selectedConcept.id.toString());
      setProgress(loadProgress());
      setProgressStats(getProgressStats());
    }
    setSelectedConcept(null);
    conceptStartTime.current = 0;
  };

  const handleQuizComplete = () => {
    const score = calculateQuizScore();
    const quizId = `quiz_${quizCategory}_${quizDifficulty}_${Date.now()}`;
    updateQuizScore(quizId, score);
    setProgress(loadProgress());
    setProgressStats(getProgressStats());
    setShowResults(true);
  };

  const handleResetProgress = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      resetProgress();
      setProgress(loadProgress());
      setProgressStats(getProgressStats());
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200" suppressHydrationWarning>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-200 dark:hover:bg-gray-700"
              >
                {sidebarOpen ? <XIcon /> : <MenuIcon />}
              </button>
              <div className="flex items-center ml-4 lg:ml-0">
                <div className="h-8 w-8 text-blue-600 dark:text-blue-400">
                  <BrainIcon />
                </div>
                <h1 className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                  System Design Learning
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden lg:flex space-x-8">
                <button
                  onClick={() => setActiveTab('materials')}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'materials'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200'
                  }`}
                >
                  <BookOpenIcon />
                  <span className="ml-2">Study Materials</span>
                </button>
                <button
                  onClick={() => setActiveTab('concepts')}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'concepts'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200'
                  }`}
                >
                  <BrainIcon />
                  <span className="ml-2">Core Concepts</span>
                </button>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'quiz'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200'
                  }`}
                >
                  <HelpCircleIcon />
                  <span className="ml-2">Quiz</span>
                </button>
                <button
                  onClick={() => setActiveTab('progress')}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'progress'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200'
                  }`}
                >
                  <BarChartIcon />
                  <span className="ml-2">Progress</span>
                </button>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 flex flex-col w-64 bg-white dark:bg-gray-800 shadow-xl">
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="h-8 w-8 text-blue-600 dark:text-blue-400">
                  <BrainIcon />
                </div>
                <h1 className="ml-2 text-lg font-bold text-gray-900 dark:text-white">
                  System Design
                </h1>
              </div>
              <nav className="mt-5 px-2 space-y-1">
                <button
                  onClick={() => { setActiveTab('materials'); setSidebarOpen(false); }}
                  className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <BookOpenIcon />
                  <span className="ml-4">Study Materials</span>
                </button>
                <button
                  onClick={() => { setActiveTab('concepts'); setSidebarOpen(false); }}
                  className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <BrainIcon />
                  <span className="ml-4">Core Concepts</span>
                </button>
                <button
                  onClick={() => { setActiveTab('quiz'); setSidebarOpen(false); }}
                  className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <HelpCircleIcon />
                  <span className="ml-4">Quiz</span>
                </button>
                <button
                  onClick={() => { setActiveTab('progress'); setSidebarOpen(false); }}
                  className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <BarChartIcon />
                  <span className="ml-4">Progress</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        {activeTab === 'materials' && (
          <div>
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">Study Materials</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                Master system design interviews with comprehensive study materials covering all essential topics.
              </p>
              
              {/* Filters */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-3 sm:p-4 mb-4 sm:mb-6" suppressHydrationWarning>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Search</label>
                    <input
                      type="text"
                      placeholder="Search materials..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="input-field"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Difficulty</label>
                    <select
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                      className="input-field"
                    >
                      {difficultyLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredMaterials.map((material) => (
                <div
                  key={material.id}
                  className={`bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer relative ${
                    progress.completedMaterials.includes(material.id.toString()) ? 'ring-2 ring-green-500' : ''
                  }`}
                  onClick={() => handleMaterialOpen(material)}
                >
                  {progress.completedMaterials.includes(material.id.toString()) && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`badge ${
                        material.difficulty === 'Beginner' ? 'badge-beginner' :
                        material.difficulty === 'Intermediate' ? 'badge-intermediate' :
                        'badge-advanced'
                      }`}>
                        {material.difficulty}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{material.duration}</span>
                    </div>
                    <div className="mb-2">
                      <span className="badge badge-category">
                        {material.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{material.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{material.description}</p>
                    <div className="space-y-1">
                      {material.topics.slice(0, 3).map((topic, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {topic}
                        </div>
                      ))}
                      {material.topics.length > 3 && (
                        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          +{material.topics.length - 3} more topics
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredMaterials.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No materials found matching your criteria.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'concepts' && (
          <div>
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">Core Concepts</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                Essential concepts you need to understand for system design interviews.
              </p>
              
              {/* Filters */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-3 sm:p-4 mb-4 sm:mb-6" suppressHydrationWarning>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Search</label>
                    <input
                      type="text"
                      placeholder="Search concepts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="input-field"
                    >
                      {conceptCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Difficulty</label>
                    <select
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                      className="input-field"
                    >
                      {difficultyLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
              {filteredConcepts.map((concept) => (
                <div
                  key={concept.id}
                  className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow relative ${
                    progress.completedConcepts.includes(concept.id.toString()) ? 'ring-2 ring-green-500' : ''
                  }`}
                  onClick={() => handleConceptOpen(concept)}
                >
                  {progress.completedConcepts.includes(concept.id.toString()) && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <span className={`badge ${
                        concept.difficulty === 'Beginner' ? 'badge-beginner' :
                        concept.difficulty === 'Intermediate' ? 'badge-intermediate' :
                        'badge-advanced'
                      }`}>
                        {concept.difficulty}
                      </span>
                      <span className="badge badge-category">
                        {concept.category}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">{concept.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">{concept.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Examples:</span>
                        <ul className="mt-1 space-y-1">
                          {concept.examples.slice(0, 2).map((example, index) => (
                            <li key={index} className="text-gray-600 dark:text-gray-400 text-xs">• {example}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredConcepts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No concepts found matching your criteria.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'quiz' && (
          <div>
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">System Design Quiz</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                Test your knowledge with these system design questions.
              </p>
              
              {/* Quiz Filters */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-3 sm:p-4 mb-4 sm:mb-6" suppressHydrationWarning>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                    <select
                      value={quizCategory}
                      onChange={(e) => setQuizCategory(e.target.value)}
                      className="input-field"
                    >
                      <option value="All">All Categories</option>
                      {quizCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Difficulty</label>
                    <select
                      value={quizDifficulty}
                      onChange={(e) => setQuizDifficulty(e.target.value)}
                      className="input-field"
                    >
                      <option value="All">All Levels</option>
                      {difficultyLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Number of Questions</label>
                    <select
                      value={quizQuestionCount}
                      onChange={(e) => setQuizQuestionCount(parseInt(e.target.value))}
                      className="input-field"
                    >
                      <option value={5}>5 Questions</option>
                      <option value={10}>10 Questions</option>
                      <option value={15}>15 Questions</option>
                      <option value={20}>20 Questions</option>
                      <option value={30}>30 Questions</option>
                      <option value={50}>50 Questions</option>
                      <option value={filteredQuizQuestions.length}>All Available ({filteredQuizQuestions.length})</option>
                    </select>
                  </div>
                </div>
                {!quizStarted && filteredQuizQuestions.length > 0 && (
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={startQuiz}
                      className="btn-primary px-8 py-3 text-lg"
                    >
                      Start Quiz with {Math.min(quizQuestionCount, filteredQuizQuestions.length)} Questions
                    </button>
                  </div>
                )}
              </div>
            </div>

            {filteredQuizQuestions.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No questions found matching your criteria.</p>
              </div>
            ) : !quizStarted ? (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">Select your quiz options and click "Start Quiz" to begin.</p>
              </div>
            ) : !showResults ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Question {currentQuiz + 1} of {quizQuestionsToShow.length}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {Math.round(((currentQuiz + 1) / quizQuestionsToShow.length) * 100)}% Complete
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuiz + 1) / quizQuestionsToShow.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <span className={`badge mr-3 ${
                      quizQuestionsToShow[currentQuiz].difficulty === 'Beginner' ? 'badge-beginner' :
                      quizQuestionsToShow[currentQuiz].difficulty === 'Intermediate' ? 'badge-intermediate' :
                      'badge-advanced'
                    }`}>
                      {quizQuestionsToShow[currentQuiz].difficulty}
                    </span>
                    <span className="badge badge-category">
                      {quizQuestionsToShow[currentQuiz].category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {quizQuestionsToShow[currentQuiz].question}
                  </h3>
                  
                  <div className="space-y-3">
                    {quizQuestionsToShow[currentQuiz].options.map((option, index) => (
                      <label
                        key={index}
                        className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                          quizAnswers[quizQuestionsToShow[currentQuiz].id] === index
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                            : 'border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${quizQuestionsToShow[currentQuiz].id}`}
                          value={index}
                          checked={quizAnswers[quizQuestionsToShow[currentQuiz].id] === index}
                          onChange={() => handleQuizAnswer(quizQuestionsToShow[currentQuiz].id, index)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 border-2 rounded-full mr-3 flex items-center justify-center ${
                          quizAnswers[quizQuestionsToShow[currentQuiz].id] === index
                            ? 'border-blue-500'
                            : 'border-gray-300 dark:border-gray-500'
                        }`}>
                          {quizAnswers[quizQuestionsToShow[currentQuiz].id] === index && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                        <span className="text-gray-700 dark:text-gray-200">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setCurrentQuiz(Math.max(0, currentQuiz - 1))}
                    disabled={currentQuiz === 0}
                    className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  
                  {currentQuiz === quizQuestionsToShow.length - 1 ? (
                    <button
                      onClick={handleQuizComplete}
                      className="btn-primary"
                    >
                      Finish Quiz
                    </button>
                  ) : (
                    <button
                      onClick={() => setCurrentQuiz(currentQuiz + 1)}
                      className="btn-primary"
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Quiz Results</h3>
                  <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">{calculateQuizScore()}%</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    You got {Object.keys(quizAnswers).filter(id => 
                      quizAnswers[parseInt(id)] === quizQuestionsToShow.find(q => q.id === parseInt(id))?.correctAnswer
                    ).length} out of {quizQuestionsToShow.length} questions correct.
                  </p>
                </div>

                <div className="space-y-6">
                  {quizQuestionsToShow.map((question, index) => (
                    <div key={question.id} className="border rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <span className={`badge mr-3 ${
                          question.difficulty === 'Beginner' ? 'badge-beginner' :
                          question.difficulty === 'Intermediate' ? 'badge-intermediate' :
                          'badge-advanced'
                        }`}>
                          {question.difficulty}
                        </span>
                        <span className="badge badge-category">
                          {question.category}
                        </span>
                      </div>
                      
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Question {index + 1}: {question.question}
                      </h4>
                      
                      <div className="space-y-2 mb-3">
                        {question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className={`p-3 rounded-lg ${
                              optionIndex === question.correctAnswer
                                ? 'bg-green-100 border border-green-200'
                                : optionIndex === quizAnswers[question.id]
                                ? 'bg-red-100 border border-red-200'
                                : 'bg-gray-50 border border-gray-200'
                            }`}
                          >
                            <div className="flex items-center">
                              <div className={`w-4 h-4 rounded-full mr-3 flex items-center justify-center ${
                                optionIndex === question.correctAnswer
                                  ? 'bg-green-500'
                                  : optionIndex === quizAnswers[question.id]
                                  ? 'bg-red-500'
                                  : 'bg-gray-300'
                              }`}>
                                {optionIndex === question.correctAnswer && (
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                )}
                                {optionIndex === quizAnswers[question.id] && optionIndex !== question.correctAnswer && (
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                )}
                              </div>
                              <span className={optionIndex === question.correctAnswer ? 'font-medium text-green-800' : 
                                optionIndex === quizAnswers[question.id] ? 'font-medium text-red-800' : 'text-gray-700'}>
                                {option}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-sm text-blue-800">
                          <strong>Explanation:</strong> {question.explanation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={resetQuiz}
                    className="btn-primary px-6 py-3"
                  >
                    Take New Quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'progress' && (
          <div>
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">Learning Progress</h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Track your progress through the system design learning materials.
                  </p>
                </div>
                <button
                  onClick={handleResetProgress}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm"
                >
                  Reset Progress
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Overall Progress</h3>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{progressStats.completionPercentage}%</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progressStats.completionPercentage}%` }}></div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {progressStats.completedMaterials + progressStats.completedConcepts + progressStats.completedQuizzes} of {progressStats.totalMaterials + progressStats.totalConcepts + progressStats.totalQuizzes} topics completed
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Quiz Performance</h3>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">{progressStats.averageQuizScore}%</div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Average score</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{progressStats.completedQuizzes} quizzes taken</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Study Time</h3>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    {Math.floor(progressStats.totalStudyTime / 3600)}h {Math.floor((progressStats.totalStudyTime % 3600) / 60)}m
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Total study time</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{progress.streakDays} day streak</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Study Materials</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Completed</span>
                    <span className="font-semibold">{progressStats.completedMaterials}/{progressStats.totalMaterials}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${Math.round((progressStats.completedMaterials / progressStats.totalMaterials) * 100)}%` }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Core Concepts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Completed</span>
                    <span className="font-semibold">{progressStats.completedConcepts}/{progressStats.totalConcepts}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: `${Math.round((progressStats.completedConcepts / progressStats.totalConcepts) * 100)}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {progress.completedMaterials.length > 0 && (
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="font-medium dark:text-white">Completed {progress.completedMaterials.length} study materials</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Recently</span>
                  </div>
                )}
                {progress.completedConcepts.length > 0 && (
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="font-medium dark:text-white">Learned {progress.completedConcepts.length} core concepts</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Recently</span>
                  </div>
                )}
                {progress.completedQuizzes.length > 0 && (
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                      <span className="font-medium dark:text-white">Completed {progress.completedQuizzes.length} quizzes</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Recently</span>
                  </div>
                )}
                {progress.completedMaterials.length === 0 && progress.completedConcepts.length === 0 && progress.completedQuizzes.length === 0 && (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    <p>No activity yet. Start studying to see your progress!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Material Detail Modal */}
      {selectedMaterial && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border border-gray-200 dark:border-gray-700 w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white dark:bg-gray-800 max-h-[80vh] overflow-y-auto">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedMaterial.title}</h3>
                <button
                  onClick={handleMaterialClose}
                  className="text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
                >
                  <XIcon />
                </button>
              </div>
              
              <div className="mb-4">
                <span className={`badge ${
                  selectedMaterial.difficulty === 'Beginner' ? 'badge-beginner' :
                  selectedMaterial.difficulty === 'Intermediate' ? 'badge-intermediate' :
                  'badge-advanced'
                }`}>
                  {selectedMaterial.difficulty}
                </span>
                <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">Duration: {selectedMaterial.duration}</span>
                <span className="ml-3 badge badge-category">
                  {selectedMaterial.category}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedMaterial.description}</p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Topics Covered:</h4>
                  <div className="space-y-2">
                    {selectedMaterial.topics.map((topic, index) => (
                      <div key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Concepts:</h4>
                  <div className="space-y-2">
                    {selectedMaterial.concepts.map((concept, index) => (
                      <div key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {concept}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Real-World Examples:</h4>
                <div className="space-y-2">
                  {selectedMaterial.examples.map((example, index) => (
                    <div key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Recommended Resources:</h4>
                <div className="space-y-2">
                  {selectedMaterial.resources.map((resource, index) => (
                    <div key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {resource}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={handleMaterialClose}
                  className="btn-secondary"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setActiveTab('quiz');
                    setSelectedMaterial(null);
                  }}
                  className="btn-primary"
                >
                  Take Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Concept Detail Modal */}
      {selectedConcept && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border border-gray-200 dark:border-gray-700 w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white dark:bg-gray-800 max-h-[80vh] overflow-y-auto">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedConcept.title}</h3>
                <button
                  onClick={handleConceptClose}
                  className="text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
                >
                  <XIcon />
                </button>
              </div>
              
              <div className="mb-4">
                <span className={`badge ${
                  selectedConcept.difficulty === 'Beginner' ? 'badge-beginner' :
                  selectedConcept.difficulty === 'Intermediate' ? 'badge-intermediate' :
                  'badge-advanced'
                }`}>
                  {selectedConcept.difficulty}
                </span>
                <span className="ml-3 badge badge-category">
                  {selectedConcept.category}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedConcept.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Detailed Explanation:</h4>
                <p className="text-gray-600 dark:text-gray-300">{selectedConcept.details}</p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Examples:</h4>
                  <div className="space-y-2">
                    {selectedConcept.examples.map((example, index) => (
                      <div key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Trade-offs:</h4>
                  <div className="space-y-2">
                    {selectedConcept.tradeoffs.map((tradeoff, index) => (
                      <div key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-sm">{tradeoff}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Best Practices:</h4>
                <div className="space-y-2">
                  {selectedConcept.bestPractices.map((practice, index) => (
                    <div key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-sm">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleConceptClose}
                  className="btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Export with dynamic import to prevent SSR issues
export default dynamic(() => Promise.resolve(HomePage), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading System Design Learning App...</p>
      </div>
    </div>
  )
});
