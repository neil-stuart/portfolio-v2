const theme = {
    initialColorMode: "light",
    fonts: {
        body: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
        heading: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
        monospace: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    },

    colors: {

        text: "#FFFAF2",
        background: "#353535",
        secondary: "#D9D9D9",
        primary: "#FFFAF2",
        accent: "#6EC7CC",

        modes: {
            dark: {
                text: "#FFFAF2",
                background: "#353535",
                secondary: "#19568E",
                primary: "#FFFAF2",
                accent: "#A5D6FF",
            },
            light: {
                text: "#353535",
                background: "#FFFAF2",
                secondary: "#6EC7CC",
                primary: "#353535",
                accent: "#19568E",
            }
        },
    },

    styles: {
        root: {
            html: {
                width: "100%",
                height: "100%",
            },
            body: {
                width: "100%",
                height: "100%",
                margin: 0,
                padding: 0,
                backgroundColor: 'background',
                color: 'text'
            }
        }



    }
};

export default theme;