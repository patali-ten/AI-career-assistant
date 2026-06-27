import { motion } from 'framer-motion'

const steps = [
  "Reading your CV...",
  "Analyzing job requirements...",
  "Identifying skill gaps...",
  "Searching learning resources...",
  "Building your roadmap...",
]

export default function LoadingSpinner({ currentStep = 0 }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      
      {/* Animated rings */}
      <div className="relative w-24 h-24">
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: '#3B82F6', borderTopColor: 'transparent' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-3 rounded-full border-2"
          style={{ borderColor: '#06B6D4', borderBottomColor: 'transparent' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-2xl">🧠</div>
      </div>

      {/* Step progress */}
      <div className="flex flex-col gap-3 w-72">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            className="flex items-center gap-3"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: i <= currentStep ? 1 : 0.3 }}
          >
            {/* Swapped flex-shrink-0 for shrink-0 below */}
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0"
              style={{ background: i <= currentStep ? '#3B82F6' : '#1F2937' }}>
              {i < currentStep ? '✓' : i === currentStep ? '●' : '○'}
            </div>
            <span className="text-sm" style={{ color: i <= currentStep ? '#F9FAFB' : '#4B5563' }}>
              {step}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}