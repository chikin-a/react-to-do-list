import type React from 'react'

type Props = {
  color?: 'default' | 'danger'
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.ImgHTMLAttributes<HTMLImageElement>
export const IconButton = ({ color = 'default', onClick, src, alt }: Props) => {
  const colorVariant =
    color === 'default'
      ? 'bg-indigo-100 hover:bg-indigo-200'
      : 'bg-red-100 hover:bg-red-200'

  return (
    <button
      className={`p-2.5 rounded-lg cursor-pointer ${colorVariant}`}
      onClick={onClick}
    >
      <img src={src} className='h-5 w-5' alt={alt} />
    </button>
  )
}
