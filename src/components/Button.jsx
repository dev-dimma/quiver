export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink'

  const variants = {
    primary: 'bg-pink text-white hover:bg-pink-soft',
    dark: 'bg-purple-panel-deep text-white hover:bg-[#5c1743]',
    subtle: 'bg-white/10 text-white hover:bg-white/15 border border-white/15',
  }

  const classes = `${baseClasses} ${variants[variant]} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  )
}
