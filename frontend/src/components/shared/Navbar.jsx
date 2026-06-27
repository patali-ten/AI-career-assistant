import { BrainCircuit } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      style={{ background: 'rgba(10,15,30,0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #1F2937' }}>
      
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg" style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}>
          <BrainCircuit size={20} color="white" />
        </div>
        <span className="font-bold text-lg" style={{ fontFamily: 'Syne', color: '#F9FAFB' }}>
          CareerIQ
        </span>
      </div>

      <div className="flex items-center gap-2 text-sm" style={{ color: '#9CA3AF' }}>
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        AI Engine Active
      </div>
    </nav>
  )
}