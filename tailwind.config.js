module.exports = {
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                'ui-primary': 'rgb(var(--ui-primary) / <alpha-value>)',
                'ui-secondary': 'rgb(var(--ui-secondary) / <alpha-value>)',
                'ui-accent': 'rgb(var(--ui-accent) / <alpha-value>)',
                'ui-text': 'rgb(var(--ui-text) / <alpha-value>)',
                'ui-bg': 'rgb(var(--ui-bg) / <alpha-value>)',
                'ui-bg-elevated': 'rgb(var(--ui-bg-elevated) / <alpha-value>)',
                'ui-text-muted': 'rgb(var(--ui-text-muted) / <alpha-value>)',
            },
        },
    },
    plugins: [],
};