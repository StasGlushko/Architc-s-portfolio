import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import s from './Header.module.scss'
import { Paths } from '../../routing/paths'

interface ILink {
	path: string
	name: string
}

export const Header: FC<
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = props => {
	const links: ILink[] = [
		{ path: Paths.home, name: 'Home' },
		{ path: Paths.projects, name: 'Projects' },
		{ path: Paths.contact, name: 'Contact' },
	]

	const [burgerMenu, setBurgerMenu] = useState<boolean>(false)

	const toggleMenu = (): void => {
		setBurgerMenu(!burgerMenu)
	}

	return (
		<header className={s.header} {...props}>
			<div className={s.logo}>Logo</div>
			<ul className={s.links + ' ' + (burgerMenu && s.active)}>
				{links.map(({ name, path }) => (
					<Link
						onClick={toggleMenu}
						key={name}
						to={path}
						children={name}
					/>
				))}
			</ul>
			<button onClick={toggleMenu} className={s.menuBtn}>
				{!burgerMenu ? <AiOutlineMenu /> : <AiOutlineClose />}
			</button>
		</header>
	)
}
