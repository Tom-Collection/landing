const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: true,
    theme: {
        fontFamily: {
            'montserrat': ['sans-serif', 'Montserrat'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.neutral,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            blue: colors.blue,
            sky: colors.sky,
            pink: colors.pink,
            purple: colors.purple,
            orange: colors.orange,
        }
    },
    variants: {
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    daisyui: {
        styled: true,
        themes: ["light"],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        darkTheme: "dark",
    },
}
