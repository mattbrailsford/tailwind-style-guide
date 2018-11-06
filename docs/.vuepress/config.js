module.exports = {
    title: 'Tailwind Design System',
    themeConfig: {
        sidebar: 'auto',
    },
    stylus: {
        'include css': true
    },
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.js"),
            require("autoprefixer")
        ]
    }
}