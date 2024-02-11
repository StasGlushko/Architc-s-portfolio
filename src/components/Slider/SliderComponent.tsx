import { FC } from 'react'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'

import s from './Slider.module.scss'
import { IListEl } from './Slider'

interface IProps {
	prevImg: () => void
	nextImg: () => void
	changeCurrentImg: (id: number) => void
	imageList: IListEl[] | undefined
	currentImg: IListEl | undefined
}

export const SliderComponent: FC<IProps> = ({
	imageList,
	currentImg,
	changeCurrentImg,
	prevImg,
	nextImg,
}) => {
	return (
		<div className={s.slider}>
			<div className={s.preview}>
				<button className={s.prevBtn + ' ' + s.arrow} onClick={prevImg}>
					<IoMdArrowRoundBack />
				</button>
				<div className={s.bgImg} style={{ backgroundImage: `url(${currentImg?.url})` }}></div>
				<button className={s.nextBtn + ' ' + s.arrow} onClick={nextImg}>
					<IoMdArrowRoundForward />
				</button>
			</div>
			<ul className={s.list}>
				{imageList
					? imageList.map(el => {
							return (
								<li
									key={el.id}
									onClick={() => changeCurrentImg(el.id)}
									className={s.item}>
									<img
										src={el.url}
										alt='img'
										className={el.isActive ? s.active : ''}
									/>
								</li>
							)
					  })
					: null}
			</ul>
		</div>
	)
}
