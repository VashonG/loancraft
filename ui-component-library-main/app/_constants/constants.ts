// Import Types
import {
	CategoryDesc,
	FAQ_PAIR,
	LinkListItem,
	SocialFollowLinkObject,
	SocialShareLinkObject,
} from '@/types';
// Import External Packages
// Import Components
// Import Functions & Actions & Hooks & State
import { capitalize } from '@/lib/utils';
// Import Data
// Import Assets & Icons
import { Icons } from '@/ui/Icons';

// START HERE WITH ANSWERING THE 20 QUESTIONS TO FULLY MAKE THIS TEMPLATE YOURS!

// Who are you?
/*
Example: {
	creatorName: 'Your Name',
	creatorHref: 'https://YourPersonalWebsite.com' or 'https://YourLinkedInProfile.com' or 'https://YourFacebookProfile.com' or 'https://YourXProfile.com',
	creatorXHandle: '@username',
};
*/

export const CREATOR_LINK = {
	creatorName: 'Vashon Gonzales',
	creatorHref: 'https://loancraft.club',
	creatorXHandle: '@VashonG',
};

// When was your company founded?
// Example: '2024'

export const YEAR_OF_CREATION = '2024';

// What is the name of your company?
// Example: 'lendingstack'

export const COMPANY_NAME = 'Loancraft';

// What is the full domain of your company?
// Example: 'https://lendingstack.com'

export const COMPANY_WEBSITE_URL = 'https://lendingstack.com';

// What is your support email?
// Example: 'support@lendingstack.com'

export const COMPANY_SUPPORT_EMAIL = 'support@lendingstack.com';

// What is a short description of your company?
// (Title = max 60 characters; Description = max 160 characters; Tags = max 5)
/* Examples
	Title: 'The best Vite boilerplates and components for your next project.' 
	Description: 'The best Vite boilerplates and components for your next project. Save time and money with our solutions'
	Tags: ['vite', 'templates']
 */
export const COMPANY_META_TITLE =
	'Lending Stack - Open Source Loan Widget';

export const COMPANY_META_DESCRIPTION =
	'Beautifully crafted lending components.';

export const COMPANY_TAGS = ['loan', 'lending', 'widget'];

// What are the Social Media Links you want to display?

export const SOCIAL_FOLLOW_LINKS: SocialFollowLinkObject[] = [
	{
		channelName: 'X',
		channelHref: 'https://twitter.com/lendingstack',
		username: '@lendingstack',
		Icon: Icons.X,
	},
];

// Do you have a Parent Company or Holding Company under which you operate this website? If not, leave each key as "".
/* 
Example: {
	parentCompanyName: 'The Example Company',
	parentCompanyHref: 'https://example.com',
	parentCompanyAddress: 'Example Street 123, 12345 Example City, Example Country',
};
*/

export const PARENT_COMPANY_LINK = {
	parentCompanyName: '',
	parentCompanyHref: '',
	parentCompanyAddress: '',
};

// What Product Categories are you selling?
// Example: ['buttons']

export const CATEGORIES = ['buttons'] as const;

// Before you continue with the next questions, please make sure you have created a at least one product in each category you are selling.
// For starters, it is enough to create a folder in the `app/_products` folder with the name of the category, e.g. `app/_products/buttons`.

// What are the descriptions of each Product Category you are selling? The slug needs to match one categories in CATEGORIES.

export const CATEGORIES_DESC: CategoryDesc[] = [
	{
		name: 'Buttons',
		slug: 'buttons',
		description:
			'Buttons rule the world. Get the best buttons for your next project.',
		addTextToProductPage: '',
		href: '#buttons',
	},
];

// What are additional links you want to show in the Navbar - besides links to your Product Categories?

export const NAVBAR_ADD_LINKS = [{ name: 'About', slug: 'about' }];

// What are the categories and links you want to show in the Footer?

export const FOOTER_NAVIGATION_LINKS: { [key: string]: LinkListItem[] } = {
	products: CATEGORIES.map((category) => {
		return { label: capitalize(category), href: `/${category}` };
	}),
	legal: [
		{ label: 'Terms', href: '/terms' },
		{ label: 'Privacy', href: '/privacy-policy' },
		{ label: 'Cookies', href: '/cookie-policy' },
		{ label: 'License', href: '/license' },
	],
};

// What are disclaimers you want to show in the Footer?

export const FOOTER_DISCLAIMERS: string[] = [
	'Disclaimer: We know that the button logo is "the other kind of button". We like to spice things up! ;)',
];

// What is the slogan you want to show in the Footer?

export const FOOTER_SLOGAN: string =
	'Jumpstart your idea-to-button journey with best in class buttons.';

// What are the external links you want to show in the Footer?

export const FOOTER_EXTERNAL_LINK_LIST: LinkListItem[] = [
	{
		label: 'Boilerplates @ lendingstack.com',
		href: 'https://lendingstack.com',
	},
	{
		label: 'Domain Hacks @ Domainhacks.info',
		href: 'https://domainhacks.info',
	},
	{
		label: 'Expired .COM Domains @ DroppedHub.com',
		href: 'https://droppedhub.com',
	},
];

// What are the FAQs you want to show on the front page?

export const GENERAL_FAQS: FAQ_PAIR[] = [
	{
		question: 'What is a button?',
		answer:
			'A button is a user interface element that users can click or tap to perform an action. Buttons are typically found in forms, dialog boxes, and other areas of a website or app where users need to interact with the interface.',
	},
	{
		question: 'Why should I care about buttons?',
		answer:
			'Buttons are an essential part of any user interface. They help users navigate through a website or app, submit forms, and perform other actions. Well-designed buttons can improve the user experience and make it easier for users to interact with your product.',
	},
	{
		question: 'Are all Buttons Free?',
		answer:
			'Yes, all buttons are free to use. You can download them and use them in your projects without any restrictions.',
	},
];

// What are the Social Media Share Options you want to provide?
// FYI: Facebook does not allow pre-filled text in the share dialog. You can only provide the URL.

export const SOCIAL_SHARE_LINKS: SocialShareLinkObject[] = [
	{
		channelName: 'facebook',
		channelHref: 'https://www.facebook.com/sharer/sharer.php?u=',
		Icon: Icons.Facebook,
		shareTextInFrontOfURL: '',
	},
	{
		channelName: 'X',
		channelHref: 'https://twitter.com/intent/tweet?text=',
		Icon: Icons.X,
		shareTextInFrontOfURL: 'I found this on The Button Company: ',
	},
];
