/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./app/**/*.{ts,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		backgroundSize: {
			custom: '75%',
		},
		extend: {
			colors: {
				telluscoopWhite: '#F9F9F9',
				telluscoopPink: '#FF6392',
				telluscoopYellow: '#FFE45E',
				telluscoopRed: '#DD211E',
				telluscoopBlue: '#5AA9E6',
				telluscoopGreen: '#71C666',
				telluscoopDark: '#22333F',
				telluscoopLightGreen: '#E3F4E0',
				telluscoopLightRed: '#F8D3D2',
				telluscoopLightGray: '#EFF3F9',
			},
			backgroundImage: {
				landing: "url('/assets/bg-landing.png')",
			},
			keyframes: {
				scrollStart: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				scrollEnd: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
			},
			animation: {
				scrollStart: 'scrollStart 20s linear infinite',
				scrollEnd: 'scrollEnd 20s linear infinite',
			},
		},
		fontFamily: {
			roboto: ['"Roboto Mono"', '"monospace"'],
			flex: ['"Roboto Flex"', '"sans-serif"'],
		},
	},
	plugins: [],
};
