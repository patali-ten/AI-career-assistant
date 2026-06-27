import { motion } from 'framer-motion'
import { Flag } from 'lucide-react'

export default function RoadmapTimeline({ roadmap }) {
  return (
    <div className="p-6 rounded-2xl" style={{ background: '#111827', border: '1px solid #1F2937' }}>
      <div className="flex items-center gap-2 mb-6">
        <Flag size={18} style={{ color: '#3B82F6' }} />
        <h2 className="text-xl font-bold" style={{ fontFamily: 'Syne' }}>Your Learning Roadmap</h2>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, #3B82F6, #06B6D4, transparent)' }} />

        <div className="flex flex-col gap-0">
          {roadmap.map((step, index) => (
            <motion.div
              key={index}
              className="flex gap-6 pl-12 pb-6 relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Node */}
              <div className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: `linear-gradient(135deg, #3B82F6, #06B6D4)`,
                  color: 'white',
                  fontFamily: 'Syne',
                  boxShadow: '0 0 12px #3B82F640'
                }}>
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>{step}</p>
              </div>
            </motion.div>
          ))}

          {/* End node */}
          <div className="flex gap-6 pl-12 relative">
            <div className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: '#10B98120', border: '2px solid #10B981' }}>
              <span>🎯</span>
            </div>
            <p className="pt-1 text-sm font-semibold" style={{ color: '#10B981' }}>
              Job-ready for this role
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}