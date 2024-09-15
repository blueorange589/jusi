const jusi = {}

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




const styleMap = {
  textColor: 'color',
  fontSize: 'font-size',
  backgroundColor: 'background-color',
  borderColor: 'border-color',
  borderWidth: 'border-width'
}


const rems = ['padding', 'fontSize', 'gap']
const pixies = ['width', 'height', 'borderWidth', 'borderRadius', 'borderTopRightRadius', 'borderTopLeftRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius', 'maxWidth', 'top', 'right', 'bottom', 'left']

jusi.themes = {}

jusi.theme = {}
jusi.theme.use = (name) => {
  if(jusi.css.fileTheme) {
    jusi.css.fileTheme.remove()
  }
  localStorage.setItem('jusi-theme', name) 

  // console.log(`theme: ${name}`, jusi.themes[name])
  jusi.css.fileTheme = createStyles(jusi.themes[name])
}

jusi.theme.load = () => {
  const theme = localStorage.getItem('jusi-theme') || 'main'
  jusi.theme.use(theme)
}

jusi.theme.clone = (name) => {
  if(!jusi.themes[name]) {
    console.error('Jusi: theme to be cloned not found')
    return {}
  }
  return JSON.parse(JSON.stringify(jusi.themes[name]))
}

jusi.theme.getName = () => {
  return localStorage.getItem("jusi-theme")
}


jusi.css = {}
jusi.styles = {}
jusi.css.getUtils = (styles) => {
  jusi.styles = styles
  jusi.css.utils = {
    '.cols-2': { gridTemplateColumns: 'repeat(2, 1fr)' },
    '.cols-3': { gridTemplateColumns: 'repeat(3, 1fr)' },
    '.cols-4': { gridTemplateColumns: 'repeat(4, 1fr)' },
    '.gap-1': { gap: .25 },
    '.gap-2': { gap: .5 },
    '.gap-3': { gap: 1 },
    '.gap-4': { gap: 2 },
    '.gap-5': { gap: 4 },
    '.rounded': { borderRadius: styles.border.borderRadius },
    '.rounded-top': { borderTopLeftRadius: styles.border.borderRadius, borderTopRightRadius: styles.border.borderRadius },
    '.rounded-bottom': { borderBottomLeftRadius: styles.border.borderRadius, borderBottomRightRadius: styles.border.borderRadius },
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

  if(!jusi.css.fileUtils) {
    jusi.css.fileUtils = createStyles(jusi.css.utils)
  }
  
  return jusi.css.utils
}



jusi.pages = {}

jusi.page = {
  app: document.getElementById('app'),
  push: (page) => {
    jusi.page.app.innerHTML = ''
    // console.log(page, jusi.pages[page])
    jusi.pages[page].map(part => {
      jusi.page.app.appendChild(part)
    })
    document.body.classList.add(`page-${page}`)
  }
}







let resolveRoute = (evt) => {
  const url = window.location.hash.slice(1) || "index";
  jusi.page.push(url)
};


jusi.init = () => {
  jusi.theme.load()
}


window.addEventListener('load', () => {
  resolveRoute()
  jusi.theme.load()
});
window.addEventListener('hashchange', resolveRoute);
window.addEventListener("resize", setDeviceType);