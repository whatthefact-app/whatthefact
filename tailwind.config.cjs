const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				heading: ['Genos', ...defaultTheme.fontFamily.sans],
				sans: ['Roboto', 'Inter var', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				heading: '32px',
				base: '1.125rem'
			},
			colors: {
				background: colors.amber[100],
				brand: colors.purple[300],
				black: colors.black,
				white: colors.white
			}
		}
	},
	plugins: []
};
