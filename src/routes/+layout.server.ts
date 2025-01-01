import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	return {
		name: `GeoFront`,
		title: `GeoFront • your spatial data on the front`,
		description: `GeoFront is the team of experts dedicated to providing innovative Data solutions for your business needs`,
		copyright: `${new Date().getFullYear()} GeoFront`,
		nav: [{ title: 'About', href: '/about' }],
		socialmedias: [
			{
				href: 'https://www.linkedin.com/in/isaac-kipkemoi-13ba5951',
				icon: 'fa-brands fa-linkedin'
			},
			{ href: 'https://twitter.com/kipkemoi_geo', icon: 'fa-brands fa-x-twitter' },
			{
				href: 'https://github.com/geofrontconsulting',
				icon: 'fa-brands fa-github'
			}
		],
		teams: [
			{
				id: 'isaac-kipkemoi',
				name: 'Isaac Kipkemoi',
				photo: '/assets/teams/isaac-kipkemoi.jpeg',
				description:
					'PhD researcher at University of Bristol | Hydrology| interests: Dryland Ecology, Remote sensing, Geospatial analytics, python, R, bigdata',
				github: 'https://github.com/ikipkemoi',
				linkedin: ' https://www.linkedin.com/in/isaac-kipkemoi-13ba5951',
				twitter: 'https://twitter.com/kipkemoi_geo'
			},
			{
				id: 'jin-igarashi',
				name: 'Jin Igarashi',
				photo: '/assets/teams/jin-igarashi.jpeg',
				description:
					'FOSS4G software developer for water sector in 🇰🇪,🇷🇼 | MSc Water, Sanitation and Health Engineering (21/22) at University of Leeds',
				github: 'https://github.com/JinIgarashi',
				linkedin: ' https://www.linkedin.com/in/jinigarashi',
				twitter: 'https://twitter.com/j_igarashi'
			}
		],
		services: [
			{
				id: 'gis',
				name: 'Geographic Information System (GIS)',
				icon: 'fa-solid fa-earth-africa'
			},
			{
				id: 'training',
				name: 'Geographic Information System (GIS) Courses',
				icon: 'fa-brands fa-leanpub'
			},
			{
				id: 'data',
				name: 'Data Management and Analysis Services',
				icon: 'fa-solid fa-magnifying-glass-chart'
			},
			{
				id: 'environment',
				name: 'Environmental Due Diligence Services',
				icon: 'fa-solid fa-seedling'
			}
		]
	};
};
