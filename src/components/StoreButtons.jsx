import Button from './Button'

const baseBtn =
  'flex items-center gap-3 border rounded-2xl px-5 py-[11px] transition-all duration-200'

export default function StoreButtons({ variant = 'dark' }) {
  const styles =
    variant === 'dark'
      ? `${baseBtn} bg-purple-panel-deep border-white/15 text-white hover:-translate-y-1 hover:bg-[#5c1743]`
      : `${baseBtn} bg-purple-panel border-transparent text-white hover:-translate-y-1 hover:bg-purple-panel-deep`

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      <Button
        href="https://play.google.com/store/apps/details?id=org.rcnsermons.quiver"
        variant={variant === 'dark' ? 'dark' : 'primary'}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles} !rounded-2xl !px-5 !py-[11px]`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.6 2.3c-.4.3-.6.8-.6 1.4v16.6c0 .6.2 1.1.6 1.4l.1.1L13 12.3v-.2L3.7 2.2l-.1.1Z" fill="#fff" />
          <path d="M16.1 15.4 13 12.3v-.2l3.1-3.1 3.5 2c1 .6 1 1.5 0 2.1l-3.5 2.3Z" fill="#fff" fillOpacity=".85" />
          <path d="m13 12.1 3.1-3.1L4.9 2.6c-.4-.2-.9-.2-1.2 0L13 12.1Z" fill="#fff" fillOpacity=".7" />
          <path d="M13 12.3 3.7 21.7c.3.2.8.2 1.2 0l11.2-6.3-3.1-3.1Z" fill="#fff" fillOpacity=".95" />
        </svg>
        <span className="text-left leading-[1.15]">
          <small className="block text-[11px] text-white/70">GET IT ON</small>
          <strong className="block text-[17px] font-semibold">Google Play</strong>
        </span>
      </Button>
      <Button
        href="https://apps.apple.com/ng/app/quiver-rcn-teenagers/id6799968399"
        variant={variant === 'dark' ? 'dark' : 'primary'}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles} !rounded-2xl !px-5 !py-[11px]`}
      >
        <svg viewBox="0 0 24 24" fill="#fff" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.3 12.5c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8-.7 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.1 1.7 2.4 3 2.4 1.2 0 1.6-.8 3.1-.8s1.9.8 3.1.7c1.3 0 2.1-1.1 2.9-2.3.6-.9.9-1.5 1.4-2.6-.1 0-2.7-1-2.7-3.9M15 5.4c.6-.8 1.1-1.9 1-3-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.5 2.9-1.4Z" />
        </svg>
        <span className="text-left leading-[1.15]">
          <small className="block text-[11px] text-white/70">Download on the</small>
          <strong className="block text-[17px] font-semibold">App Store</strong>
        </span>
      </Button>
    </div>
  )
}
