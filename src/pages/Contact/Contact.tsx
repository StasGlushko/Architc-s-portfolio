import { FC } from 'react'

import s from './Contact.module.scss'
import { Container } from '../../layout/Container/Container';
import { Header } from '../../components/Header/Header'
import { Title } from '../../components/ui/Title/Title'
import { ContactCard } from '../../components/ContactCard/ContactCard'
import { ContactForm } from '../../components/ContactForm/ContactForm'

export const Contact: FC = () => {
	return (
		<div className={s.wrapper}>
			<Header />
			<Container
				className={s.container}>
				<div>
					<Title style={{ marginBottom: 20 }} text='Contact' />
					<ContactCard />
				</div>
				<ContactForm />
			</Container>
		</div>
	)
}
