const mainTheme = {
  colors: {
    body: 'rgb(224, 224, 224)',
    navbar: 'rgb(18, 19, 20)',
    main: 'rgb(216, 216, 216)',
    footer: 'rgb(83, 89, 104)',
    font: 'rgb(29, 29, 29)',
    heading: 'rgb(5, 5, 5)',
    button: 'rgb(5, 19, 141)',
    buttonText: 'white',
    card: 'rgb(255, 255, 255)',
    icon: 'rgb(255, 255, 255)',
    overlay: 'rgba(0, 0, 0, 0.3)',
    modal: 'rgb(255, 255, 255)',
    modalText: 'rgb(5, 5, 5)',
    dropdown: 'rgb(224, 224, 224)',
    dropdownText: 'rgb(5, 5, 5)',
    disabled: 'rgb(151, 151, 151)',
    danger: 'rgb(141, 5, 21)',
    success: 'rgb(30, 141, 5)'
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
    element: { x: 1, y: .4 },
    modal: .4
  }
}

// Import CSS Utilities from Jusi by providing theme variables
// Some CSS utilities use theme variables
const jss = jusi.css.getUtils(mainTheme)


jusi.themes.main = {
  html: { height: '100%' },
  body: {
    height: '100%',
    backgroundColor: mainTheme.colors.body,
    fontSize: .95
  },
  h1: {
    fontSize: 2.1,
    fontWeight: 900,
    color: mainTheme.colors.heading
  },
  h2: {
    fontSize: 1.8,
    fontWeight: 700,
    color: mainTheme.colors.heading
  },
  h3: {
    fontSize: 1.5,
    fontWeight: 700,
    color: mainTheme.colors.heading
  },
  h4: {
    fontSize: 1.4,
    fontWeight: 700,
    color: mainTheme.colors.heading
  },
  h5: {
    fontSize: 1.3,
    fontWeight: 700,
    color: mainTheme.colors.heading
  },
  h6: {
    fontSize: 1,
    color: mainTheme.colors.heading
  },
  'button, .button': {
    backgroundColor: mainTheme.colors.button,
    color: mainTheme.colors.buttonText,
    padding: mainTheme.padding.element,
    fontSize: mainTheme.fontSizes.button,
    borderRadius: mainTheme.border.borderRadius,
    ...jss['.hstack'],
    ...jss['.gap-1'],
    ...jss['.content-center'],
  },
  'button:hover, .button:hover': {
    textShadow: mainTheme.styles.shadow
  },
  '.button-lg': {
    fontSize: 1.2,
    padding: mainTheme.padding.element
  },
  'button.disabled': {
    backgroundColor: mainTheme.colors.disabled,
    color: mainTheme.colors.font
  },
  'button.danger': {
    backgroundColor: mainTheme.colors.danger,
  },
  'button.success': {
    backgroundColor: mainTheme.colors.success,
  },
  hr: {
    display: 'block',
    marginTop: '1em',
    marginBottom: '1em',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderStyle: 'inset',
    borderWidth: 1.5
  },
  fieldset: {
    ...jss[".col"],
    ...jss['.items-start']
  },
  label: {
    fontWeight: 600
  },
  header: {
    width: '100%',
    backgroundColor: mainTheme.colors.navbar,
    color: 'rgb(255, 255, 255)',
    padding: { y: mainTheme.padding.section.y },
  },
  main: {
    height: '100%',
    flex: 1,
    backgroundColor: mainTheme.colors.main
  },
  footer: {
    backgroundColor: mainTheme.colors.footer
  },
  '.app': {
    minHeight: '100vh',
    ...jss['.col']
  },
  '.container': {
    width: '100%',
    maxWidth: 1024,
    padding: { x: .5 },
    margin: '0px auto'
  },
  '.page-header': {
    ...jss['.between'],
    ...jss['.items-center'],
    padding: { y: 1 }
  },
  '.page-content': {
    padding: { bottom: 2 }
  },
  'input[type=text],input[type=email],input[type=password],input[type=date]': {
    backgroundColor: 'white',
    outline: 'none',
    ...mainTheme.border,
    color: '#222',
    fontSize: 1,
    padding: mainTheme.padding.element,
  },

  '.icon': {
    fontSize: mainTheme.fontSizes.buttonIcon
  },
  '.navbar': {},
  '.navbar button': {
    padding: { x: .7, y: .1 },
    backgroundColor: mainTheme.colors.navbar,
    borderColor: '#444',
    borderWidth: .1
  },
  '.navbar .icon': { color: 'white', fontSize: 1 },
  '.card': {
    ...mainTheme.border,
    backgroundColor: mainTheme.colors.card,
    boxShadow: mainTheme.styles.shadow,
    ...jss['.col']
  },
  '.card-body': { 
    padding: mainTheme.padding.content,
    flex: 1
  },
  '.card-footer': { padding: mainTheme.padding.content },
  '.grid': {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 1
  },
  '.tablet .grid': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '.mobile .grid': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
  '.page-login main': {
    width: '100%',
    height: '100%',
    ...jss[".col"],
    ...jss[".content-center"],
    ...jss[".items-center"]
  },
  '.login-form': {
    color: 'white',
    backgroundColor: mainTheme.colors.navbar,
    padding: 3,
    ...mainTheme.border
  },
  '.login-form > *': {
    marginBottom: '14px'
  },
  
}