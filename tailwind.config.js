/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-texture": "url('/gradient1.png')",
            },
            fontFamily: {
                sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "bright-yellow": "#FAFF00",
                "bright-purple": "#BD00FF",
                "bright-blue": "#0AD3FF",
            },
        },
    },
    plugins: [],
};
