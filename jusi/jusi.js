/* OPTIONS */
jusi.options = {}


/* LAYOUTS */
jusi.layouts = {}

/* THEMES */
jusi.themes = {}
jusi.theme = {
  use: (name) => {
    if (jusi.css.fileTheme) {
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
    if (!jusi.themes[name]) {
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
  if (!jusi.css.fileUtils) {
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






/* VALIDATE */
jusi.validate = {
  isvalidUsername(str) {
    const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
    return reg.test(str)
  },
  validateURL(textval) {
    const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return urlregex.test(textval)
  },
  validateLowerCase(str) {
    const reg = /^[a-z]+$/
    return reg.test(str)
  },
  validateUpperCase(str) {
    const reg = /^[A-Z]+$/
    return reg.test(str)
  },
  validatAlphabets(str) {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
  },
  isValidEmail(email) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(String(email).toLowerCase())
  },
  isStringExists(value) {
    return value && value.length > 0
  },
  isObjectExists(value) {
    return typeof value === 'object' && value !== null
  },
  isArrayExists(value) {
    return Array.isArray(value) && value.length > 0
  },
  length(str, min, max) {
    return !(str.length < min || str.length > max)
  }
}




/* REQUEST - FETCH */
jusi.fetch = async (url, reqOptions = {}, renderOptions = {}) => {
  jusi.el.open(jusi.components.loadingOverlay)
  const r = await fetch(url)
    .then(response => {
      // console.log(jusi)
      jusi.el.close(jusi.components.loadingOverlay)

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