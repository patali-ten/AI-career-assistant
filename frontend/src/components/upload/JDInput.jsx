import { useState } from 'react'
import { Briefcase } from 'lucide-react'

export default function JDInput({ value, onChange }) {
  const [focused, setFocused] = useState(false)
  const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0

  return (
    <div className="w-full">
      <label className="text-sm font-medium mb-2 block" style={{ color: '#9CA3AF' }}>
        Job Description
      </label>

      <div className="relative rounded-xl overflow-hidden"
        style={{ border: `2px solid ${focused ? '#3B82F6' : '#1F2937'}`, transition: 'border-color 0.2s' }}>
        
        <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#1F2937' }}>
          <Briefcase size={14} style={{ color: '#3B82F6' }} />
          <span className="text-xs font-medium" style={{ color: '#9CA3AF' }}>
            Paste the full job description
          </span>
        </div>

        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Paste the job description here — include requirements, responsibilities, and preferred skills for the most accurate analysis..."
          className="w-full p-4 resize-none outline-none text-sm leading-relaxed"
          style={{ background: '#111827', color: '#F9FAFB', minHeight: '200px' }}
        />

        <div className="flex justify-between items-center px-4 py-2" style={{ background: '#111827', borderTop: '1px solid #1F2937' }}>
          <span className="text-xs" style={{ color: '#4B5563' }}>
            More detail = more accurate analysis
          </span>
          <span className="text-xs" style={{ color: wordCount > 50 ? '#10B981' : '#6B7280' }}>
            {wordCount} words {wordCount > 50 ? '✓' : '(aim for 50+)'}
          </span>
        </div>
      </div>
    </div>
  )
}