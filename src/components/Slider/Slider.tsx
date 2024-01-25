import { FC, useEffect, useState } from 'react'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'

import s from './Slider.module.scss'

interface IListEl {
	id: number
	url: string
	isActive: boolean
}

interface IProps {
	images: string[] | undefined
}

export const Slider: FC<IProps> = ({ images }) => {
	const [imageList, setImageList] = useState<IListEl[] | undefined>(
		images?.map((el, id) => ({ id: id + 1, url: el, isActive: id === 0 })),
	)

	const [currentImg, setCurrentImg] = useState(
		imageList?.find(el => el.isActive),
	)

	const changeCurrentImg = (id: number): void => {
		if (id === currentImg?.id) {
			return
		}

		setImageList(list => {
			return list?.map(el => {
				if (el.isActive) {
					el.isActive = false
				}
				if (el.id === id) {
					el.isActive = true
				}
				return el
			})
		})
	}

	console.log(imageList)

	const nextImg = () => {
		const length = () => imageList ? imageList.length : 0
		
		if (currentImg && currentImg?.id < length()) {
			currentImg && changeCurrentImg(currentImg.id + 1)
		}
	}
	const prevImg = () => {
		if (currentImg && currentImg?.id > 1) {
			currentImg && changeCurrentImg(currentImg.id - 1)
		}
	}

	useEffect(() => {
		setCurrentImg(imageList?.find(el => el.isActive))
	}, [imageList])

	return (
		<div className={s.slider}>
			<div className={s.preview}>
				<button className={s.prevBtn + ' ' + s.arrow} onClick={prevImg}>
					<IoMdArrowRoundBack />
				</button>
				<div style={{ backgroundImage: `url(${currentImg?.url})` }}></div>
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
