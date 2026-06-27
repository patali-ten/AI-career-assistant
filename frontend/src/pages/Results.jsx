import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Download } from 'lucide-react'
import MatchScore from '../components/results/MatchScore'
import SkillsGrid from '../components/results/SkillsGrid'
import GapAnalysis from '../components/results/GapAnalysis'
import RoadmapTimeline from '../components/results/RoadmapTimeline'

export default function Results() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const result = state?.result

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p style={{ color: '#9CA3AF' }}>No results found.</p>
        <button onClick={() => navigate('/')} style={{ color: '#3B82F6' }}>← Go back</button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      
      {/* Header */}
      <motion.div className="flex items-center justify-between mb-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <button onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm transition-colors hover:text-white"
          style={{ color: '#9CA3AF' }}>
          <ArrowLeft size={16} /> New Analysis
        </button>
        <h1 className="text-2xl font-bold" style={{ fontFamily: 'Syne' }}>Your Career Analysis</h1>
        <div />
      </motion.div>

      {/* Summary banner */}
      <motion.div className="p-5 rounded-2xl mb-8 text-center"
        style={{ background: 'linear-gradient(135deg, #3B82F620, #06B6D420)', border: '1px solid #3B82F640' }}
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <p style={{ color: '#D1D5DB' }}>{result.summary}</p>
      </motion.div>

      {/* Score + Skills side by side on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1">
          <MatchScore score={result.match_score} />
        </div>
        <div className="lg:col-span-2">
          <SkillsGrid matched={result.matched_skills} missing={result.missing_skills} />
        </div>
      </div>

      {/* Gap analysis */}
      <motion.div className="mb-8"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <GapAnalysis gaps={result.skill_gaps} />
      </motion.div>

      {/* Roadmap */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <RoadmapTimeline roadmap={result.roadmap} />
      </motion.div>

      {/* CTA */}
      <motion.div className="mt-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        <button onClick={() => navigate('/')}
          className="px-8 py-3 rounded-xl font-semibold"
          style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', color: 'white' }}>
          Analyze Another Job
        </button>
      </motion.div>
    </div>
  )
}