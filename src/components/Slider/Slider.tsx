import { FC, useEffect, useState } from 'react'

import { SliderComponent } from './SliderComponent'

export interface IListEl {
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

	const [currentImg, setCurrentImg] = useState<IListEl | undefined>(
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
		const length = () => (imageList ? imageList.length : 0)

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
		<SliderComponent
			imageList={imageList}
			currentImg={currentImg}
			changeCurrentImg={changeCurrentImg}
			prevImg={prevImg}
			nextImg={nextImg}
		/>
	)
}
