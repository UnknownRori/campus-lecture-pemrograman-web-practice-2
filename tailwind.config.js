/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'base': ['Poppins', 'Arial', 'Helvetica', 'sans-serif']
            },
            screens: {
                'sm': '240px',
                'md': '640px',
                'lg': '800px',
                'xl': '1024px',
                '2xl': '1280px',
            },
        },
    },
    plugins: [],
}

