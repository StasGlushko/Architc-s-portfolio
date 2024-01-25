import { createSlice } from '@reduxjs/toolkit'
import { IProjectItem } from '../../../types/Types'

interface IInitialState {
	projectsList: IProjectItem[]
}

const initialState: IInitialState = {
	projectsList: [
		{
			name: 'Project 1',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!',
			preview:
				'https://s8d8.turboimg.net/t1/96933735_10633272_388881134603475_3136803873757040023_o.jpg',
			images: [
				'https://s8d8.turboimg.net/t1/96933735_10633272_388881134603475_3136803873757040023_o.jpg',
				'https://s8d8.turboimg.net/t1/96933736_10623934_388881064603482_3753379667741561925_o.jpg',
				'https://s8d8.turboimg.net/t1/96933737_10468673_388881817936740_4773739731235294383_o.jpg',
				'https://s8d8.turboimg.net/t1/96933739_10465524_388881857936736_5313287338956908390_o.jpg ',
				'https://s8d8.turboimg.net/t1/96933740_10463732_310511995773723_3550882387679392586_o.jpg ',
				'https://s8d8.turboimg.net/t1/96933741_10403967_310511812440408_5149881480257570816_o.jpg',
				'https://s8d8.turboimg.net/t1/96933742_10403759_310512019107054_596803387660124344_o.jpg',
				'https://s8d8.turboimg.net/t1/96933743_10387025_310512032440386_7407691462442195138_o.jpg',
				'https://s8d8.turboimg.net/t1/96933744_1912361_388881774603411_3850846459296149920_o.jpg',
			],
			id: 1,
		},
		{
			name: 'Project 2',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!',
			preview:
				'https://cdn.shopify.com/s/files/1/0567/3873/files/planning-3536753_640_480x480.jpg?v=1623166762',
			images: [
				'https://cdn.shopify.com/s/files/1/0567/3873/files/planning-3536753_640_480x480.jpg?v=1623166762',
				'https://t4.ftcdn.net/jpg/02/31/69/05/360_F_231690594_1xpuGVGkzsPIvIVRyRkGLY5Ze11d3yev.jpg',
				'https://parametric-architecture.com/wp-content/uploads/2021/04/PA_Top-Ten-Reasons-to-be-an-Architect-3.jpg',
				'https://worlddesignsummit.com/wp-content/uploads/2019/04/Architects-Entrepreneurs.jpg',
				'https://i0.wp.com/www.designhausarchitecture.co.uk/wp-content/uploads/2021/11/DesignHausBlog.png?fit=1000%2C550&ssl=1',
				'https://www.simplilearn.com/ice9/free_resources_article_thumb/Technical_Architect.jpg',
			],
			id: 2,
		},
		{
			name: 'Project 3',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!',
			preview:
				'https://parametric-architecture.com/wp-content/uploads/2021/04/PA_Top-Ten-Reasons-to-be-an-Architect-3.jpg',
			images: [
				'https://parametric-architecture.com/wp-content/uploads/2021/04/PA_Top-Ten-Reasons-to-be-an-Architect-3.jpg',
				'https://t4.ftcdn.net/jpg/02/31/69/05/360_F_231690594_1xpuGVGkzsPIvIVRyRkGLY5Ze11d3yev.jpg',
				'https://cdn.shopify.com/s/files/1/0567/3873/files/planning-3536753_640_480x480.jpg?v=1623166762',
				'https://worlddesignsummit.com/wp-content/uploads/2019/04/Architects-Entrepreneurs.jpg',
				'https://i0.wp.com/www.designhausarchitecture.co.uk/wp-content/uploads/2021/11/DesignHausBlog.png?fit=1000%2C550&ssl=1',
				'https://www.simplilearn.com/ice9/free_resources_article_thumb/Technical_Architect.jpg',
			],
			id: 3,
		},
		{
			name: 'Project 3',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!',
			preview:
				'https://parametric-architecture.com/wp-content/uploads/2021/04/PA_Top-Ten-Reasons-to-be-an-Architect-3.jpg',
			images: [
				'https://parametric-architecture.com/wp-content/uploads/2021/04/PA_Top-Ten-Reasons-to-be-an-Architect-3.jpg',
				'https://t4.ftcdn.net/jpg/02/31/69/05/360_F_231690594_1xpuGVGkzsPIvIVRyRkGLY5Ze11d3yev.jpg',
				'https://cdn.shopify.com/s/files/1/0567/3873/files/planning-3536753_640_480x480.jpg?v=1623166762',
				'https://worlddesignsummit.com/wp-content/uploads/2019/04/Architects-Entrepreneurs.jpg',
				'https://i0.wp.com/www.designhausarchitecture.co.uk/wp-content/uploads/2021/11/DesignHausBlog.png?fit=1000%2C550&ssl=1',
				'https://www.simplilearn.com/ice9/free_resources_article_thumb/Technical_Architect.jpg',
			],
			id: 4,
		},
		{
			name: 'Project 3',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!',
			preview:
				'https://parametric-architecture.com/wp-content/uploads/2021/04/PA_Top-Ten-Reasons-to-be-an-Architect-3.jpg',
			images: [
				'https://parametric-architecture.com/wp-content/uploads/2021/04/PA_Top-Ten-Reasons-to-be-an-Architect-3.jpg',
				'https://t4.ftcdn.net/jpg/02/31/69/05/360_F_231690594_1xpuGVGkzsPIvIVRyRkGLY5Ze11d3yev.jpg',
				'https://cdn.shopify.com/s/files/1/0567/3873/files/planning-3536753_640_480x480.jpg?v=1623166762',
				'https://worlddesignsummit.com/wp-content/uploads/2019/04/Architects-Entrepreneurs.jpg',
				'https://i0.wp.com/www.designhausarchitecture.co.uk/wp-content/uploads/2021/11/DesignHausBlog.png?fit=1000%2C550&ssl=1',
				'https://www.simplilearn.com/ice9/free_resources_article_thumb/Technical_Architect.jpg',
			],
			id: 5,
		},
		{
			name: 'Project 3',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!',
			preview:
				'https://parametric-architecture.com/wp-content/uploads/2021/04/PA_Top-Ten-Reasons-to-be-an-Architect-3.jpg',
			images: [
				'https://parametric-architecture.com/wp-content/uploads/2021/04/PA_Top-Ten-Reasons-to-be-an-Architect-3.jpg',
				'https://t4.ftcdn.net/jpg/02/31/69/05/360_F_231690594_1xpuGVGkzsPIvIVRyRkGLY5Ze11d3yev.jpg',
				'https://cdn.shopify.com/s/files/1/0567/3873/files/planning-3536753_640_480x480.jpg?v=1623166762',
				'https://worlddesignsummit.com/wp-content/uploads/2019/04/Architects-Entrepreneurs.jpg',
				'https://i0.wp.com/www.designhausarchitecture.co.uk/wp-content/uploads/2021/11/DesignHausBlog.png?fit=1000%2C550&ssl=1',
				'https://www.simplilearn.com/ice9/free_resources_article_thumb/Technical_Architect.jpg',
			],
			id: 6,
		},
		{
			name: 'Project 3',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!',
			preview:
				'https://parametric-architecture.com/wp-content/uploads/2021/04/PA_Top-Ten-Reasons-to-be-an-Architect-3.jpg',
			images: [
				'https://parametric-architecture.com/wp-content/uploads/2021/04/PA_Top-Ten-Reasons-to-be-an-Architect-3.jpg',
				'https://t4.ftcdn.net/jpg/02/31/69/05/360_F_231690594_1xpuGVGkzsPIvIVRyRkGLY5Ze11d3yev.jpg',
				'https://cdn.shopify.com/s/files/1/0567/3873/files/planning-3536753_640_480x480.jpg?v=1623166762',
				'https://worlddesignsummit.com/wp-content/uploads/2019/04/Architects-Entrepreneurs.jpg',
				'https://i0.wp.com/www.designhausarchitecture.co.uk/wp-content/uploads/2021/11/DesignHausBlog.png?fit=1000%2C550&ssl=1',
				'https://www.simplilearn.com/ice9/free_resources_article_thumb/Technical_Architect.jpg',
			],
			id: 7,
		},
		{
			name: 'Project 3',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!',
			preview:
				'https://parametric-architecture.com/wp-content/uploads/2021/04/PA_Top-Ten-Reasons-to-be-an-Architect-3.jpg',
			images: [
				'https://parametric-architecture.com/wp-content/uploads/2021/04/PA_Top-Ten-Reasons-to-be-an-Architect-3.jpg',
				'https://t4.ftcdn.net/jpg/02/31/69/05/360_F_231690594_1xpuGVGkzsPIvIVRyRkGLY5Ze11d3yev.jpg',
				'https://cdn.shopify.com/s/files/1/0567/3873/files/planning-3536753_640_480x480.jpg?v=1623166762',
				'https://worlddesignsummit.com/wp-content/uploads/2019/04/Architects-Entrepreneurs.jpg',
				'https://i0.wp.com/www.designhausarchitecture.co.uk/wp-content/uploads/2021/11/DesignHausBlog.png?fit=1000%2C550&ssl=1',
				'https://www.simplilearn.com/ice9/free_resources_article_thumb/Technical_Architect.jpg',
			],
			id: 8,
		},
		{
			name: 'Project 3',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil!',
			preview:
				'https://parametric-architecture.com/wp-content/uploads/2021/04/PA_Top-Ten-Reasons-to-be-an-Architect-3.jpg',
			images: [
				'https://parametric-architecture.com/wp-content/uploads/2021/04/PA_Top-Ten-Reasons-to-be-an-Architect-3.jpg',
				'https://t4.ftcdn.net/jpg/02/31/69/05/360_F_231690594_1xpuGVGkzsPIvIVRyRkGLY5Ze11d3yev.jpg',
				'https://cdn.shopify.com/s/files/1/0567/3873/files/planning-3536753_640_480x480.jpg?v=1623166762',
				'https://worlddesignsummit.com/wp-content/uploads/2019/04/Architects-Entrepreneurs.jpg',
				'https://i0.wp.com/www.designhausarchitecture.co.uk/wp-content/uploads/2021/11/DesignHausBlog.png?fit=1000%2C550&ssl=1',
				'https://www.simplilearn.com/ice9/free_resources_article_thumb/Technical_Architect.jpg',
			],
			id: 9,
		},
	],
}

export const projects = createSlice({
	name: 'projects',
	initialState,
	reducers: {},
	// extraReducers: builder => {},
})

export const { actions, reducer } = projects
