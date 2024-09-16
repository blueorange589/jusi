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


/* ELEMENTS */
jusi.el = {}
jusi.el.addTo = (target, item) => target.appendChild(item)
jusi.el.render = (target, items) => {
  target.innerHTML = ""
  items.map(item => {
    target.appendChild(item)
  })
}
jusi.el.hide = (item) => item.style.display = 'none'
jusi.el.show = (item) => item.style.display = 'block'
jusi.el.invisible = (item) => item.style.visibility = 'hidden'
jusi.el.visible = (item) => item.style.visibility = 'visible'
jusi.el.close = (item) => item.remove()
jusi.el.open = (item) => document.body.appendChild(item)


jusi.els = {}
jusi.els.body = document.body
jusi.els.app = document.getElementById('app')


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


/* REQUEST - FETCH */
jusi.fetch = async (url, reqOptions={}, renderOptions={}) => {
  jusi.el.open(jusi.els.loadingOverlay)
  const r = await fetch(url)
    .then(response => {
      // console.log(jusi)
      jusi.el.close(jusi.els.loadingOverlay)

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(users => {
      // console.log(users);
      return users
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  return r
}

jusi.init = () => {
  setDeviceType()
  jusi.theme.load()
}


window.addEventListener('load', () => {
  resolveRoute()
});
window.addEventListener('hashchange', resolveRoute);
window.addEventListener("resize", setDeviceType);