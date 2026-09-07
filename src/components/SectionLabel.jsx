export default function SectionLabel({ children, center = false, light = false }) {
  return (
    <div
      className={`flex items-center gap-2.5 font-semibold text-[15px] mb-5 ${
        center ? 'justify-center' : ''
      } ${light ? 'text-white/70' : 'text-muted'}`}
    >
      <span className={`w-3.5 h-3.5 rounded-[4px] inline-block ${light ? 'bg-white' : 'bg-pink'}`} />
      {children}
    </div>
  )
}
