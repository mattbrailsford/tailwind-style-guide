module.exports = {
    title: 'Tailwind Design System',
    themeConfig: {
        sidebar: 'auto',
    },
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.js"),
            require("autoprefixer")
        ]
    }
}