import { FC } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'

import s from './Project.module.scss'

import { Container } from '../../../layout/Container/Container'
import { Header } from '../../../components/Header/Header'
import { Slider } from '../../../components/Slider/Slider'
import { IProjectItem } from '../../../types/Types'

interface IProps {
	projectInfo: IProjectItem | undefined
	backToProjectsPage: () => void
}

export const ProjectComponent: FC<IProps> = ({
	projectInfo,
	backToProjectsPage,
}) => {
	return (
		<div className={s.wrapper}>
			<Header />
			<Container>
				<button onClick={backToProjectsPage} className={s.backBtn}>
					<IoMdArrowRoundBack />
				</button>
				<div className={s.bgContainer}>
					<Slider images={projectInfo && projectInfo.images} />
					<div className={s.info}>
						<h2 className={s.name}>{projectInfo && projectInfo.name}</h2>
						<p className={s.description}>{projectInfo && projectInfo.description}</p>
					</div>
				</div>
			</Container>
		</div>
	)
}

