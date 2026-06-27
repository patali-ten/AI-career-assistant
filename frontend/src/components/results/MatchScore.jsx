import { motion } from 'framer-motion'

export default function MatchScore({ score }) {
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  const color = score >= 70 ? '#10B981' : score >= 40 ? '#F59E0B' : '#EF4444'
  const label = score >= 70 ? 'Strong Match' : score >= 40 ? 'Partial Match' : 'Needs Work'

  return (
    <div className="flex flex-col items-center gap-4 p-8 rounded-2xl"
      style={{ background: '#111827', border: '1px solid #1F2937' }}>
      
      <p className="text-sm font-medium uppercase tracking-widest" style={{ color: '#9CA3AF' }}>
        Match Score
      </p>

      <div className="relative w-36 h-36">
        <svg width="144" height="144" viewBox="0 0 144 144">
          {/* Background track */}
          <circle cx="72" cy="72" r={radius} fill="none" stroke="#1F2937" strokeWidth="8" />
          {/* Animated arc */}
          <motion.circle
            cx="72" cy="72" r={radius}
            fill="none" stroke={color} strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
            transform="rotate(-90 72 72)"
          />
        </svg>
        {/* Score number */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-4xl font-bold"
            style={{ fontFamily: 'Syne', color }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            {score}%
          </motion.span>
        </div>
      </div>

      <span className="text-sm font-semibold px-4 py-1 rounded-full"
        style={{ background: `${color}20`, color }}>
        {label}
      </span>
    </div>
  )
}