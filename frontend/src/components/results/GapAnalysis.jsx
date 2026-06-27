import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink, AlertCircle, Info } from 'lucide-react'

function ResourceLink({ resource }) {
  return (
    <a href={resource.url} target="_blank" rel="noopener noreferrer"
      className="flex items-center justify-between p-3 rounded-lg group transition-all"
      style={{ background: '#0A0F1E', border: '1px solid #1F2937' }}>
      <div>
        <p className="text-sm font-medium" style={{ color: '#F9FAFB' }}>{resource.title}</p>
        <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>{resource.platform}</p>
      </div>
      <ExternalLink size={14} style={{ color: '#3B82F6' }} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  )
}

function GapCard({ gap, index }) {
  const [open, setOpen] = useState(false)
  const isHigh = gap.importance === 'High'

  return (
    <motion.div
      className="rounded-2xl overflow-hidden"
      style={{ background: '#111827', border: `1px solid ${isHigh ? '#EF444440' : '#F59E0B40'}` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
    >
      <button className="w-full flex items-center justify-between p-5"
        onClick={() => setOpen(!open)}>
        <div className="flex items-center gap-3">
          {isHigh
            ? <AlertCircle size={18} style={{ color: '#EF4444' }} />
            : <Info size={18} style={{ color: '#F59E0B' }} />}
          <span className="font-semibold" style={{ fontFamily: 'Syne' }}>{gap.skill}</span>
          <span className="text-xs px-2 py-0.5 rounded-full"
            style={{ background: isHigh ? '#EF444420' : '#F59E0B20', color: isHigh ? '#EF4444' : '#F59E0B' }}>
            {gap.importance} Priority
          </span>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={16} style={{ color: '#6B7280' }} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 pb-5 flex flex-col gap-2"
              style={{ borderTop: '1px solid #1F2937', paddingTop: '16px' }}>
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: '#6B7280' }}>
                Recommended Resources
              </p>
              {gap.resources?.length > 0
                ? gap.resources.map((r, i) => <ResourceLink key={i} resource={r} />)
                : <p className="text-sm" style={{ color: '#6B7280' }}>No resources found for this skill.</p>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function GapAnalysis({ gaps }) {
  const high = gaps.filter(g => g.importance === 'High')
  const medium = gaps.filter(g => g.importance !== 'High')

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold" style={{ fontFamily: 'Syne' }}>Skill Gap Analysis</h2>
      <p className="text-sm mb-2" style={{ color: '#9CA3AF' }}>
        Click any skill to see recommended learning resources.
      </p>
      {[...high, ...medium].map((gap, i) => <GapCard key={gap.skill} gap={gap} index={i} />)}
    </div>
  )
}