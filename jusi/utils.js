const kebabize = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())

const setDeviceType = () => {
  const w = window.innerWidth
  device.type = (w < 540) ? 'mobile' : (w < 1024) ? 'tablet' : 'desktop'
  document.body.classList.remove('desktop')
  document.body.classList.remove('tablet')
  document.body.classList.remove('mobile')
  document.body.classList.add(device.type)
  // console.log(device.type)
}

const addUnit = (key, val) => {
  // console.log(key, val)
  if (rems.includes(key) && (typeof (val) === 'number')) { val += 'rem' }
  if (pixies.includes(key) && (typeof (val) === 'number')) { val += 'px' }
  return val
}

const addPadding = (padding) => {
  let val = '',
    type = typeof (padding),
    pt = pr = pb = pl = 0
  if (type === 'object') {
    if (padding.y) { pt = pb = padding.y }
    if (padding.top) { pt = padding.top }
    if (padding.bottom) { pb = padding.bottom }
    if (padding.x) { pr = pl = padding.x }
    if (padding.right) { pr = padding.right }
    if (padding.left) { pl = padding.left }
    val = `${pt}rem ${pr}rem ${pb}rem ${pl}rem`
  } else if (type === 'number') {
    val = `${padding}rem ${padding}rem ${padding}rem ${padding}rem`
  } else {
    val = padding
  }
  return val
}

const makeCSSText = (styles) => {
  const stylesArr = []
  Object.keys(styles).map(sk => {
    let val = styles[sk]
    if (sk === 'padding') {
      val = addPadding(styles[sk])
    }

    //console.log(typeof(styles[sk]))
    val = addUnit(sk, val)
    const styleText = [kebabize(sk), val].join(': ')
    stylesArr.push(styleText)
  })
  const stylesText = `{${stylesArr.join('; ')}}`
  return stylesText
}

const makeCSSLine = (tag, styles) => {
  const stylesText = makeCSSText(styles)
  return [tag, stylesText].join(' ')
}

const createElement = (tag, props) => {
  const el = document.createElement(tag);
  // console.log(el, props.attrs)

  if (props.text) {
    el.innerText = props.text;
  }

  if (props.icon) {
    const i = document.createElement('i')
    i.classList.add('bi')
    i.classList.add(`bi-${props.icon}`)
    i.classList.add('icon')
    el.insertBefore(i, el.firstChild)
  }

  if (props.classList) {
    if (typeof (props.classList) === 'object') {
      props.classList?.map(cls => el.classList.add(cls))
    } else {
      el.classList.add(props.classList)
    }
  }

  // console.log(props)
  if (props.contains) {
    props.contains.map(item => {
      // console.log(item)
      el.appendChild(item)
    })
  }

  if (props.children) {
    // console.log(props.children)
    props.children.map(child => {
      console.log(child)
      el.appendChild(child)
    })
    console.log(el)
  }

  if (props.attrs) {
    // console.log(props.attrs)
    if (props.attrs.style) {
      Object.keys(props.attrs.style).map(item => el.style[item] = addUnit(item, props.attrs.style[item]))
      // console.log(el, props.attrs.style, el.style)
    }

    Object.keys(props.attrs).map(attr => {
      if (attr !== 'style') {
        el.setAttribute(attr, props.attrs[attr])
      }
    })
  }

  if (props.events) {
    Object.keys(props.events).map(item => {
      el.addEventListener(item, props.events[item])
    })
  }

  if (props.render) {
    el.render = (data, template) => {
      console.log(template)
    }
  }

  return el
}


const request = async (url) => {
  const r = await fetch(url)
    .then(response => {
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

const render = (container, items) => {
  container.innerHTML = ""
  items.map(item => {
    container.appendChild(item)
  })
}


const createStyles = (elementCSS) => {
  let file = ''
  Object.keys(elementCSS).map(tag => {
    file += makeCSSLine(tag, elementCSS[tag])
  })

  var style = document.createElement('style');
  style.innerHTML = file
  // console.log(file)
  document.getElementsByTagName('head')[0].appendChild(style);
  return style
}