const darkTheme = {
  colors: {
    body: 'rgb(14, 13, 13)',
    navbar: 'rgb(18, 19, 20)',
    main: 'rgb(14, 12, 12)',
    footer: 'rgb(83, 89, 104)',
    font: 'rgb(29, 29, 29)',
    heading: 'rgb(0, 255, 34)',
    button: 'rgb(5, 19, 141)',
    buttonText: 'white',
    card: 'rgb(37, 37, 37)',
    icon: 'rgb(255, 255, 255)'
  },
  fontSizes: {
    button: .95,
    buttonIcon: .72
  },
  styles: {
    shadow: '1px 1px 6px #999',
  },
  border: {
    borderColor: 'rgba(151, 151, 151, 0.4)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 6,
  },
  padding: {
    section: { x: 0, y: 1 },
    content: 1,
    element: { x: 1, y: .4 }
  }
}

// Import CSS Utilities from Jusi by providing theme variables
if (!jss) {
  const jss = jusi.css.getUtils(darkTheme)
}


// you can clone `main` theme or create a new theme object from scratch
// const dark = {body: {backgroundColor: ...}}
const dark = jusi.theme.clone('main')

// you can update styles of cloned theme as needed
dark.main.backgroundColor = darkTheme.colors.body
dark.main.color = 'white'
dark['.card'].backgroundColor = darkTheme.colors.card
dark.h1.color = dark.h2.color = dark.h3.color = dark.h4.color = darkTheme.colors.heading


// add the dark theme to jusi themes
jusi.themes.dark = dark