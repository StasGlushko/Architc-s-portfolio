import { FC } from 'react'

import s from './MessagesAd.module.scss'
import { DashboardWrap } from '../../../layout/DashboardWrap/DashboardWrap'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

export const MessagesAd: FC = () => {
	const { messages } = useTypedSelector(state => state.admin)

	return (
		<DashboardWrap>
			<h3 className={s.title}>Messages list</h3>
			<ul className={s.list}>
				{messages.map(el => {
					return (
						<li className={s.item} key={el.id}>
							<h4 className={s.name}>{el.name}</h4>
							<span className={s.email}>E-mail: {el.email}</span>
							<p className={s.message}>Message: {el.message}</p>
						</li>
					)
				})}
			</ul>
		</DashboardWrap>
	)
}

// Добавити при наведенні на карточку можливість видаляти та відмічати що карточка переглянута, коли
// карточка відмічена і ви не наведені з права зверху появляється зелений значок окаб якщо ж нічого ми не відмічали нічого і немає
