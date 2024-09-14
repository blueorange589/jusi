const scales = { 768: 2, 1024: 3, 1200: 4 }
const device = {
  type: 'desktop',
  width: window.innerWidth,
  height: window.innerHeight,
  scale: 1
}

const setDeviceType = () => {
  const w = window.innerWidth
  device.type = (w < 540) ? 'mobile' : (w < 1024) ? 'tablet' : 'desktop'
  document.body.classList.remove('desktop')
  document.body.classList.remove('tablet')
  document.body.classList.remove('mobile')
  document.body.classList.add(device.type)
  // console.log(device.type)
}
setDeviceType()

window.addEventListener("resize", setDeviceType);


const styleMap = {
  textColor: 'color',
  fontSize: 'font-size',
  backgroundColor: 'background-color',
  borderColor: 'border-color',
  borderWidth: 'border-width'
}


const rems = ['padding', 'fontSize', 'gap']
const pixies = ['width', 'height', 'borderWidth', 'borderRadius', 'borderTopRightRadius', 'borderTopLeftRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius', 'maxWidth', 'top', 'right', 'bottom', 'left']

const colors = {
  body: 'rgb(216, 216, 216)',
  navbar: 'rgb(18, 19, 20)',
  main: 'rgb(216, 216, 216)',
  footer: 'rgb(83, 89, 104)',
  font: 'rgb(29, 29, 29)',
  heading: 'rgb(5, 5, 5)',
  button: 'rgb(5, 19, 141)',
  border: 'rgba(151, 151, 151, 0.4)',
  card: 'rgb(255, 255, 255)',
  icon: 'rgb(255, 255, 255)'
}

const fontSizes = {
  button: .95
}

const styles = {
  borderRadius: 6,
  borderWidth: 1,
  shadow: '1px 1px 6px #999',
}

const elements = {
  html: { height: '100%' },
  body: {
    height: '100%',
    backgroundColor: colors.body,
    fontSize: .95
  },
  h1: {
    fontSize: 2.4,
    fontWeight: 900
  },
  h2: {
    fontSize: 2,
    fontWeight: 700
  },
  h3: {
    fontSize: 1.5,
    fontWeight: 700
  },
  h4: {
    fontSize: 1.2,
    fontWeight: 700
  },
  h5: {
    fontSize: 1.1,
    fontWeight: 700
  },
  h4: {
    fontSize: 1
  },
  button: {
    backgroundColor: colors.button,
    color: '#fff',
    padding: { x: 1, y: .3 },
    fontSize: fontSizes.button,
    borderRadius: styles.borderRadius,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: .25
  },
  'button:hover': {
    textShadow: styles.shadow
  },
  header: {
    width: '100%',
    backgroundColor: colors.navbar,
    color: 'rgb(255, 255, 255)',
    padding: { y: 1 },
  },
  main: {
    height: '100%',
    backgroundColor: colors.main
  },
  footer: {
    backgroundColor: colors.footer
  },
  '.icon': {
    fontSize: .72
  },
  '.app': { height: '100%' },
  '.layout': {minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
  '.container': { width: '100%', maxWidth: 540, margin: '0px auto' },
  '.page-header': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: { y: 1 }
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
    borderColor: colors.border,
    borderWidth: styles.borderWidth,
    borderStyle: 'solid',
    borderRadius: styles.borderRadius,
    backgroundColor: colors.card,
    boxShadow: styles.shadow
  },
  '.card-body': { padding: .3 },
  '.card-footer': { padding: .3 },
  '.between': { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  '.center': { justifyContent: 'center' },
  '.middle': { alignItems: 'center' },
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
  '.gap-1': { gap: .25 },
  '.gap-2': { gap: .5 },
  '.gap-3': { gap: 1 },
  '.gap-4': { gap: 2 },
  '.gap-5': { gap: 4 },
  '.stretch': { alignSelf: 'stretch' },
  '.w-full': { width: '100%' },
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
  '.cols-2': { gridTemplateColumns: 'repeat(2, 1fr)' },
  '.cols-3': { gridTemplateColumns: 'repeat(3, 1fr)' },
  '.cols-4': { gridTemplateColumns: 'repeat(4, 1fr)' },
  '.rounded': { borderRadius: styles.borderRadius },
  '.rounded-top': { borderTopLeftRadius: styles.borderRadius, borderTopRightRadius: styles.borderRadius },
  '.rounded-bottom': { borderBottomLeftRadius: styles.borderRadius, borderBottomRightRadius: styles.borderRadius },
}


/* if(device.type === 'tablet') {
  elements['.grid'].gridTemplateColumns = 'repeat(2, 1fr)'
}

if(device.type === 'mobile') {
  elements['.grid'].gridTemplateColumns = 'repeat(1, 1fr)'
} */