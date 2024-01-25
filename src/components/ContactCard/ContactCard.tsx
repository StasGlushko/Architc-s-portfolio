import { FC } from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

import { HiMail } from 'react-icons/hi'
import { FaEarthAmericas } from 'react-icons/fa6'
import { BsTelephone } from 'react-icons/bs'

import s from './ContactCard.module.scss'
import { SocialLink } from '../SocialLink/SocialLink'
import { Link } from 'react-router-dom'

interface ILink {
	text: string
	svg: ReactJSXElement
	tel?: string
	email?: string
}

const links: ILink[] = [
	{
		text: 'Email@gmail.com',
		svg: <HiMail />,
		email: 'stanislav.s.hlushko@gmail.com',
	},
	{
		text: '+380 (96) 266 77 77',
		svg: <BsTelephone />,
		tel: '+380962667777',
	},
	{
		text: 'Ukrainian',
		svg: <FaEarthAmericas />,
	},
]

export const ContactCard: FC = () => {
	const getLinks = (el: ILink): ReactJSXElement => {
		if (el.tel) {
			return (
				<a style={{ padding: 0, margin: 0 }} href={`tel:${el.tel}`}>
					<SocialLink svg={el.svg} /> {el.text}
				</a>
			)
		} else if (el.email) {

			// зробити mailto
			
			return (
				// <a href={`mailto:${el.email}`}>
				<Link
					to='mailto:stanislav.s.hlushko@gmail.com'
					
					target='_blank'
					// href="mailto:stanislav.s.hlushko@gmail.com"
				>
					<SocialLink svg={el.svg} /> {el.text}
				</Link>
			)
		} else {
			return (
				<>
					<SocialLink svg={el.svg} /> {el.text}
				</>
			)
		}
	}

	return (
		<div className={s.card}>
			<h2 className={s.title}>Get in touch</h2>
			<p className={s.text}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
				architecto quidem dolore illum. Aperiam, praesentium?
			</p>
			{links.map(el => (
				<div key={el.text} className={s.link}>
					{getLinks(el)}
				</div>
			))}
		</div>
	)
}
