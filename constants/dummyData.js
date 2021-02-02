import { images, icons, COLORS, FONTS, SIZES } from '../constants';

const furnitureList = [
	{
		id: 0,
		name: 'Chair Designs ',
		title: 'chair designs',
		productList: [
			{
				productId: 1,
				productName: 'Black Chair',
				price: 12,
				image: images.chair4
			},
			{
				productId: 2,
				productName: 'Classic Chair',
				price: 20,
				image: images.classicChair
			},
			{
				productId: 3,
				productName: 'White Chair',
				price: 17,
				image: images.sofa
			},
			{
				productId: 20,
				productName: 'Classic Chair',
				price: 20,
				image: images.classicChair
			}
		]
	},
	{
		id: 1,
		name: 'Shelves Ideas',
		title: 'shelves Ideas',
		productList: [
			{
				productId: 4,
				productName: 'Cupboard',
				price: 10,
				image: images.accessory1
			},
			{
				productId: 5,
				productName: 'Painting',
				price: 10,
				image: images.accessory2
			},
			{
				productId: 6,
				productName: 'Lamp',
				price: 10,
				image: images.accessory4
			},
			{
				productId: 21,
				productName: 'Cupboard',
				price: 10,
				image: images.accessory1
			}
		]
	},
	{
		id: 2,
		name: 'Table Designs',
		title: 'table Designs',
		productList: [
			{
				productId: 7,
				productName: 'Dining Table',
				price: 20,
				image: images.diningTable
			},
			{
				productId: 8,
				productName: 'Outdoor Table',
				price: 10,
				image: images.table2
			},
			{
				productId: 9,
				productName: 'Coffee Table',
				price: 15,
				image: images.table
			},
			{
				productId: 22,
				productName: 'Office Table',
				price: 10,
				image: images.table2
			}
		]
	},
	{
		id: 3,
		name: 'Bed Designs',
		title: 'bed Designs',
		productList: [
			{
				productId: 10,
				productName: 'Iron Bedroom',
				price: 70,
				image: images.bedRoom
			},
			{
				productId: 11,
				productName: 'Classic Bedroom',
				price: 100,
				image: images.bedRoom2
			},
			{
				productId: 12,
				productName: 'New Bedroom',
				price: 100,
				image: images.bedRoom3
			},
			{
				productId: 23,
				productName: 'Classic Bedroom',
				price: 100,
				image: images.bedRoom2
			}
		]
	}
];

const tabs = {
	id: 0,
	name: 'Chairs Designs',
	title: 'chairs designs',
	productList: [
		{
			productId: 1,
			productName: 'Black Chair',
			price: 12,
			image: images.chair4
		},
		{
			productId: 2,
			productName: 'Classic Chair',
			price: 20,
			image: images.classicChair
		},
		{
			productId: 3,
			productName: 'White Chair',
			price: 17,
			image: images.sofa
		},
		{
			productId: 20,
			productName: 'Classic Chair',
			price: 20,
			image: images.classicChair
		}
	]
};

export { furnitureList, tabs };
