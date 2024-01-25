import { FC } from 'react'

import s from './Title.module.scss'

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text: string
}

export const Title: FC<IProps> = ({text, ...props}) => {
  return (
    <div {...props} className={s.title}>{text}</div>
  )
}
