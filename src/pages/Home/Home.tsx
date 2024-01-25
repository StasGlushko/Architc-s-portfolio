import { FC } from 'react'
import { Link } from 'react-router-dom'

import { HiMail } from 'react-icons/hi'

import s from './Home.module.scss'
import { Button } from '../../components/ui/Button/Button'
import { Header } from '../../components/Header/Header'
import { Container } from '../../layout/Container/Container'
import { Social } from '../../components/Social/Social'
import { Paths } from '../../routing/paths'

export const Home: FC = () => {
	return (
		<div className={s.wrapper}>
			<Header />
			<Container className={s.flexContainer}>
				<div className={s.content}>
					<div className={s.info}>
						<div className={s.title}>
							Hello, i`m{' '}
							<span style={{ color: '#d62c40' }}>Serhiy Hlushko</span>,
						</div>
						<div className={s.text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptate repellat doloremque, maiores incidunt repudiandae
							explicabo! Sunt iusto delectus repudiandae voluptatibus
							porro at.
						</div>
					</div>
					<div className={s.buttons}>
						{/* <Link className={s.linkBtn} to={''}>
							<Button children='About me' />
						</Link> */}
						<Link className={s.linkBtn} to={Paths.projects}>
							<Button children='Projects' />
						</Link>
						<Link className={s.linkBtn} to={Paths.contact}>
							<Button secColor={true} children={<HiMail />} />
						</Link>
					</div>
				</div>
				<footer className={s.followMe}>
					<div className={s.title}>Follow-me</div>
					<Social />
				</footer>
			</Container>
		</div>
	)
}
