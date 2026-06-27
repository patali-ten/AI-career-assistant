import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'

function SkillPill({ skill, type, index }) {
  const isMatch = type === 'match'
  return (
    <motion.span
      className="px-3 py-1.5 rounded-full text-sm font-medium"
      style={{
        background: isMatch ? '#10B98120' : '#EF444420',
        color: isMatch ? '#10B981' : '#EF4444',
        border: `1px solid ${isMatch ? '#10B98140' : '#EF444440'}`
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
    >
      {skill}
    </motion.span>
  )
}

export default function SkillsGrid({ matched, missing }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div className="p-6 rounded-2xl" style={{ background: '#111827', border: '1px solid #1F2937' }}>
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle size={18} style={{ color: '#10B981' }} />
          <h3 className="font-semibold" style={{ fontFamily: 'Syne' }}>You Have ({matched.length})</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {matched.map((skill, i) => <SkillPill key={skill} skill={skill} type="match" index={i} />)}
        </div>
      </div>

      <div className="p-6 rounded-2xl" style={{ background: '#111827', border: '1px solid #1F2937' }}>
        <div className="flex items-center gap-2 mb-4">
          <XCircle size={18} style={{ color: '#EF4444' }} />
          <h3 className="font-semibold" style={{ fontFamily: 'Syne' }}>Gaps to Close ({missing.length})</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {missing.map((skill, i) => <SkillPill key={skill} skill={skill} type="missing" index={i} />)}
        </div>
      </div>
    </div>
  )
}