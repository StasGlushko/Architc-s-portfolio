import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { FC } from 'react'
import {
	AiOutlineInstagram,
	AiFillFacebook,
	AiFillYoutube,
} from 'react-icons/ai'

import s from './Social.module.scss'
import { SocialLink } from '../SocialLink/SocialLink'

interface ISocial {
	name: string
	svg: ReactJSXElement
}

export const Social: FC = () => {
	const social: ISocial[] = [
		{
			name: 'instagram',
			svg: <AiOutlineInstagram />,
		},
		{
			name: 'facebook',
			svg: <AiFillFacebook />,
		},
		{
			name: 'youtube',
			svg: <AiFillYoutube />,
		},
	]

	return (
		<ul className={s.social}>
			{social.map(el => (
				<SocialLink key={el.name} svg={el.svg}/>
			))}
		</ul>
	)
}
