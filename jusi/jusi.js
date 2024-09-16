/* THEMES */
jusi.themes = {}
jusi.theme = {
  use: (name) => {
    if(jusi.css.fileTheme) {
      jusi.css.fileTheme.remove()
    }
    localStorage.setItem('jusi-theme', name) 
  
    // console.log(`theme: ${name}`, jusi.themes[name])
    jusi.css.fileTheme = createStyles(jusi.themes[name])
  },
  load: () => {
    const theme = localStorage.getItem('jusi-theme') || 'main'
    jusi.theme.use(theme)
  },
  clone: (name) => {
    if(!jusi.themes[name]) {
      console.error('Jusi: theme to be cloned not found')
      return {}
    }
    return JSON.parse(JSON.stringify(jusi.themes[name]))
  },
  getName: () => {
    return localStorage.getItem("jusi-theme")
  }
}


/* CSS */
jusi.css = {}
jusi.styles = {}
jusi.css.getUtils = (styles) => {
  jusi.styles = styles
  jusi.css.utils = cssUtils(styles)
  if(!jusi.css.fileUtils) {
    jusi.css.fileUtils = createStyles(jusi.css.utils)
  }
  
  return jusi.css.utils
}


/* PAGES */
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


/* COMPONENTS */
jusi.el = {}
jusi.els = {}
jusi.els.app = document.getElementById('app')
jusi.els.loadingOverlay = createElement('div', {
  classList: ['overlay'],
  contains: [createElement('div', {
    classList: ['loading']
  })]
})
document.body.appendChild(jusi.els.loadingOverlay)

/* METHODS */
jusi.fn = {}
jusi.fn.layout = {}
jusi.fn.layout.suspense = () => { jusi.els.loadingOverlay.style.display = 'flex' }
jusi.fn.layout.release = () => { jusi.els.loadingOverlay.style.display = 'none' }


/* ROUTER */

let resolveRoute = (evt) => {
  const url = window.location.hash.slice(1) || "index";
  jusi.page.push(url)
};


jusi.init = () => {
  setDeviceType()
  jusi.theme.load()
}


window.addEventListener('load', () => {
  resolveRoute()
});
window.addEventListener('hashchange', resolveRoute);
window.addEventListener("resize", setDeviceType);