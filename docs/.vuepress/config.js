module.exports = {
    title: 'Tailwind Design System',
    themeConfig: {
        sidebar: 'auto',
    },
    stylus: {
        'include css': true,
        include: [
            './node_modules/../'      // Shortcut references possible everywhere, e.g. @import 'node_modules/bla'
        ]
    },
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.js"),
            require("autoprefixer")
        ]
    }
}