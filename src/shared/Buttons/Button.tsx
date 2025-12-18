type Props = {
  color?: 'default' | 'secondary'
  icon?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>
export const Button = ({
  children,
  onClick,
  color = 'default',
  icon,
}: Props) => {
  const colorVariant =
    color === 'default'
      ? 'bg-indigo-600 text-white'
      : 'bg-white border border-gray-200'

  return (
    <button
      className={`flex items-center justify-center gap-2 p-2 px-4 rounded-xl cursor-pointer ${colorVariant}`}
      onClick={onClick}
    >
      {icon && <img className='h-5 w-5' src={icon} alt='Icon' />}
      {children}
    </button>
  )
}
