import { FiShoppingBag, FiActivity, FiBook,FiUser } from "react-icons/fi";

export const links = [
	{
		title: "Dashboard",
		links: [
			{
				name: "books",
				icon: <FiBook />,
			},
		],
	},

	{
		title: "Pages",
		links: [
			{
				name: "activities",
				icon: <FiActivity />,
			},
			
			{
				name: "authers",
				icon: <FiShoppingBag />,
			},
            {
				name: "users",
				icon: <FiUser />,
			},
		],
	},
];
