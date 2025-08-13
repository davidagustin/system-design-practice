export interface ProgressData {
  // Quiz progress
  quizScores: Record<string, number>; // quizId -> score
  quizAttempts: Record<string, number>; // quizId -> attempts
  completedQuizzes: string[]; // list of completed quiz IDs
  
  // Study materials progress
  completedMaterials: string[]; // list of completed material IDs
  materialTimeSpent: Record<string, number>; // materialId -> time spent in seconds
  
  // Concepts progress
  completedConcepts: string[]; // list of completed concept IDs
  conceptTimeSpent: Record<string, number>; // conceptId -> time spent in seconds
  
  // Overall stats
  totalStudyTime: number; // total time spent studying in seconds
  lastStudyDate: string; // ISO date string
  streakDays: number; // consecutive days studied
  
  // User preferences
  preferredCategories: string[];
  preferredDifficulty: string;
}

const STORAGE_KEY = 'system-design-progress';

export const getDefaultProgress = (): ProgressData => ({
  quizScores: {},
  quizAttempts: {},
  completedQuizzes: [],
  completedMaterials: [],
  materialTimeSpent: {},
  completedConcepts: [],
  conceptTimeSpent: {},
  totalStudyTime: 0,
  lastStudyDate: new Date().toISOString().split('T')[0],
  streakDays: 0,
  preferredCategories: [],
  preferredDifficulty: 'All'
});

export const loadProgress = (): ProgressData => {
  if (typeof window === 'undefined') {
    return getDefaultProgress();
  }
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return getDefaultProgress();
    }
    
    const progress = JSON.parse(stored);
    // Merge with default to ensure all fields exist
    return { ...getDefaultProgress(), ...progress };
  } catch (error) {
    console.error('Error loading progress:', error);
    return getDefaultProgress();
  }
};

export const saveProgress = (progress: ProgressData): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

export const updateQuizScore = (quizId: string, score: number): void => {
  const progress = loadProgress();
  progress.quizScores[quizId] = score;
  progress.quizAttempts[quizId] = (progress.quizAttempts[quizId] || 0) + 1;
  
  if (score >= 70 && !progress.completedQuizzes.includes(quizId)) {
    progress.completedQuizzes.push(quizId);
  }
  
  saveProgress(progress);
};

export const markMaterialCompleted = (materialId: string): void => {
  const progress = loadProgress();
  if (!progress.completedMaterials.includes(materialId)) {
    progress.completedMaterials.push(materialId);
    saveProgress(progress);
  }
};

export const markConceptCompleted = (conceptId: string): void => {
  const progress = loadProgress();
  if (!progress.completedConcepts.includes(conceptId)) {
    progress.completedConcepts.push(conceptId);
    saveProgress(progress);
  }
};

export const updateStudyTime = (type: 'material' | 'concept', id: string, timeSpent: number): void => {
  const progress = loadProgress();
  
  if (type === 'material') {
    progress.materialTimeSpent[id] = (progress.materialTimeSpent[id] || 0) + timeSpent;
  } else {
    progress.conceptTimeSpent[id] = (progress.conceptTimeSpent[id] || 0) + timeSpent;
  }
  
  progress.totalStudyTime += timeSpent;
  
  // Update streak
  const today = new Date().toISOString().split('T')[0];
  if (progress.lastStudyDate !== today) {
    const lastDate = new Date(progress.lastStudyDate);
    const currentDate = new Date(today);
    const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      progress.streakDays += 1;
    } else if (diffDays > 1) {
      progress.streakDays = 1;
    }
    
    progress.lastStudyDate = today;
  }
  
  saveProgress(progress);
};

export const getProgressStats = () => {
  const progress = loadProgress();
  
  return {
    totalMaterials: studyMaterials.length,
    completedMaterials: progress.completedMaterials.length,
    totalConcepts: concepts.length,
    completedConcepts: progress.completedConcepts.length,
    totalQuizzes: quizQuestions.length,
    completedQuizzes: progress.completedQuizzes.length,
    averageQuizScore: Object.values(progress.quizScores).length > 0 
      ? Math.round(Object.values(progress.quizScores).reduce((a, b) => a + b, 0) / Object.values(progress.quizScores).length)
      : 0,
    totalStudyTime: progress.totalStudyTime,
    streakDays: progress.streakDays,
    completionPercentage: Math.round(
      ((progress.completedMaterials.length + progress.completedConcepts.length + progress.completedQuizzes.length) /
       (studyMaterials.length + concepts.length + quizQuestions.length)) * 100
    )
  };
};

export const resetProgress = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error resetting progress:', error);
  }
};

// Import the data to calculate stats
import { studyMaterials } from '../data/studyMaterials';
import { quizQuestions } from '../data/quizData';
import { concepts } from '../data/conceptsData';
