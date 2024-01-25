import { FC } from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

import s from './SocialLink.module.scss'

interface IProps {
	svg: ReactJSXElement
}

export const SocialLink: FC<IProps> = ({ svg }) => {
	return <li className={s.socLink}>{svg}</li>
}
