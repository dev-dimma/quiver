import rcnLogo from '../assets/rcn-logo.png'
import believersLogo from '../assets/believers-logo.png'

export default function Footer() {
  return (
    <footer className="bg-purple-panel-deep text-white/85 pt-17.5 pb-8.5 text-center">
      <div className="max-w-6xl mx-auto px-8">
        <p className="max-w-150 mx-auto mb-2 text-[14.5px] leading-relaxed text-white/72">
          Quiver app, Quiver.ai and quiver.church are products of Remnant Christian Network Teens
          and Children&rsquo;s Ministry.
        </p>
        <p className="text-[13px] text-white/50 mb-11.5">&copy; 2026 Quiver. All rights reserved.</p>
        <div className="flex items-center justify-center gap-6.5 flex-wrap">
          <img src={rcnLogo} alt="Remnant Christian Network Teens & Children's Ministry" className="h-9.5 w-auto" />
          <div className="w-px h-7.5 bg-white/25" />
          <img src={believersLogo} alt="Believers" className="h-9.5 w-auto" />
          <div className="w-px h-7.5 bg-white/25" />
          <span className="text-sm text-white/65 font-medium">AudioTreasure.com</span>
        </div>
      </div>
    </footer>
  )
}
