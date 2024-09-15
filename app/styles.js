const colors = {
  body: 'rgb(216, 216, 216)',
  navbar: 'rgb(18, 19, 20)',
  main: 'rgb(216, 216, 216)',
  footer: 'rgb(83, 89, 104)',
  font: 'rgb(29, 29, 29)',
  heading: 'rgb(5, 5, 5)',
  button: 'rgb(5, 19, 141)',
  buttonText: 'white',
  border: 'rgba(151, 151, 151, 0.4)',
  card: 'rgb(255, 255, 255)',
  icon: 'rgb(255, 255, 255)'
}

const fontSizes = {
  button: .95,
  buttonIcon: .72
}

const styles = {
  shadow: '1px 1px 6px #999',
}

const border = {
  borderColor: colors.border,
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 6,
}

const padding = {
  section: { x: 0, y: 1 },
  content: 1,
  element: { x: 1, y: .4 }
}

const cssUtils = {
  '.cols-2': { gridTemplateColumns: 'repeat(2, 1fr)' },
  '.cols-3': { gridTemplateColumns: 'repeat(3, 1fr)' },
  '.cols-4': { gridTemplateColumns: 'repeat(4, 1fr)' },
  '.gap-1': { gap: .25 },
  '.gap-2': { gap: .5 },
  '.gap-3': { gap: 1 },
  '.gap-4': { gap: 2 },
  '.gap-5': { gap: 4 },
  '.rounded': { borderRadius: border.borderRadius },
  '.rounded-top': { borderTopLeftRadius: border.borderRadius, borderTopRightRadius: border.borderRadius },
  '.rounded-bottom': { borderBottomLeftRadius: border.borderRadius, borderBottomRightRadius: border.borderRadius },
  '.row': { display: 'flex' },
  '.col': { display: 'flex', flexDirection: 'column' },
  '.between': { display: 'flex', justifyContent: 'space-between' },
  '.col-between': { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
  '.content-center': { justifyContent: 'center' },
  '.content-start': { justifyContent: 'start' },
  '.content-end': { justifyContent: 'end' },
  '.items-center': { alignItems: 'center' },
  '.items-start': { alignItems: 'start' },
  '.items-end': { alignItems: 'end' },
  '.stretch': { alignSelf: 'stretch' },
  '.w-full': { width: '100%' },
  '.hstack': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  '.vstack': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
}

const cssElements = {
  html: { height: '100%' },
  body: {
    height: '100%',
    backgroundColor: colors.body,
    fontSize: .95
  },
  h1: {
    fontSize: 2.1,
    fontWeight: 900
  },
  h2: {
    fontSize: 1.8,
    fontWeight: 700
  },
  h3: {
    fontSize: 1.5,
    fontWeight: 700
  },
  h4: {
    fontSize: 1.4,
    fontWeight: 700
  },
  h5: {
    fontSize: 1.3,
    fontWeight: 700
  },
  h6: {
    fontSize: 1
  },
  button: {
    backgroundColor: colors.button,
    color: colors.buttonText,
    padding: padding.element,
    fontSize: fontSizes.button,
    borderRadius: border.borderRadius,
    ...cssUtils['.hstack'],
    ...cssUtils['.gap-1'],
    ...cssUtils['.content-center'],
  },
  'button:hover': {
    textShadow: styles.shadow
  },
  '.button-lg': {
    fontSize: 1.2,
    padding: padding.element
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
    ...cssUtils[".col"],
    ...cssUtils['.items-start']
  },
  label: {
    fontWeight: 600
  },
  header: {
    width: '100%',
    backgroundColor: colors.navbar,
    color: 'rgb(255, 255, 255)',
    padding: { y: padding.section.y },
  },
  main: {
    height: '100%',
    flex: 1,
    backgroundColor: colors.main
  },
  footer: {
    backgroundColor: colors.footer
  },
  '.app': { 
    minHeight: '100vh', 
    ...cssUtils['.col']
  },
  '.container': { 
    width: '100%', 
    maxWidth: 1024, 
    padding: {x: .5},
    margin: '0px auto' 
  },
  '.page-header': {
    ...cssUtils['.between'],
    ...cssUtils['.items-center'],
    padding: { y: 1 }
  },
  '.page-content': {
    padding: {bottom: 2}
  },
  'input[type=text],input[type=email],input[type=password],input[type=date]': {
    backgroundColor: 'white',
    outline: 'none',
    ...border,
    color: '#222',
    fontSize: 1, 
    padding: padding.element,
  },
  
  '.icon': {
    fontSize: fontSizes.buttonIcon
  },
  '.navmenu': {},
  '.navmenu button': { 
    padding: {x: .7, y: .1 }, 
    backgroundColor: colors.navbar,
    borderColor: '#444',
    borderWidth: .1
  },
  '.navmenu .icon': {color: 'white', fontSize: 1},
  '.card': {
    ...border,
    backgroundColor: colors.card,
    boxShadow: styles.shadow
  },
  '.card-body': { padding: padding.content },
  '.card-footer': { padding: padding.content },
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
    ...cssUtils[".col"],
    ...cssUtils[".content-center"],
    ...cssUtils[".items-center"]
  },
  '.login-form': {
    color: 'white',
    backgroundColor: colors.navbar,
    padding: 3,
    ...border
  },
  '.login-form > *': {
    marginBottom: '14px'
  }
}

const elementCSS = {...cssUtils, ...cssElements}
jusi.createStyles(elementCSS)