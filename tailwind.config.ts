import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			amatic: ['"Amatic SC"', 'cursive'], 
		},
		keyframes: {
			mainBlock: {
			  "0%": { width: "0%", left: "0" },
			  "50%": { width: "70%", left: "0" },
			  "100%": { width: "0", left: "70%" },
			},
			secBlock: {
			  "0%": { width: "0%", left: "0" },
			  "50%": { width: "72%", left: "0" },
			  "100%": { width: "0", left: "72%" },
			},
			mainFadeIn: {
			  "0%": { opacity: "0" },
			  "100%": { opacity: "1" },
			},
			secFadeIn: {
				"0%": { opacity: "0" },
				"100%": { opacity: "1" },
			},
			popIn: {
			  "0%": { width: "0px", height: "0px", opacity: "0" },
			  "50%": { width: "10px", height: "10px", opacity: "1", bottom: "15px" },
			  "100%": { width: "7px", height: "7px", bottom: "-5.5px" },
			},
			fall: {
				'0%': { top: '-100px', opacity: '0', transform: 'rotate(180deg)' },
				'70%': {opacity: '0'},
				'100%': { top: '20px', opacity: '1', transform: 'rotate(10deg)' },
			},
		},
		animation: {
			mainBlock: "mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards",
			secBlock: "secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards 1.9s",
			mainFadeIn: "mainFadeIn 1.5s forwards 1.6s",
			popIn: "popIn 1.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards 2.5s",
			secFadeIn: "secFadeIn 2s forwards 3s",
			fall: 'fall 3.5s ease-in forwards',
		},
	},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
