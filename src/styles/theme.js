const theme = {
    initialColorMode: "light",
    fonts: {
        body: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
        heading: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
        monospace: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    },

    colors: {

        text: "#353535",
        background: "#FFFAF2",
        secondary: "#6EC7CC",
        primary: "#353535",
        accent: "#19568E",

        modes: {
            light: {
                text: "#353535",
                background: "#FFFAF2",
                secondary: "#6EC7CC",
                primary: "#353535",
                accent: "#19568E",
            },
            dark: {
                text: "#D3D3D3",
                background: "#2F2F2F",
                secondary: "#19568E",
                primary: "#D3D3D3",
                accent: "#81aed3",
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