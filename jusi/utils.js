const kebabize = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())

const addUnit = (key, val) => {
  // console.log(key, val)
  if (rems.includes(key) && (typeof (val) === 'number')) { val += 'rem' }
  if (pixies.includes(key) && (typeof (val) === 'number')) { val += 'px' }
  return val
}

const makeCSSText = (styles) => {
  const stylesArr = []
  Object.keys(styles).map(sk => {
    let val = styles[sk]
    if (sk === 'padding') {
      if (typeof (styles[sk]) === 'object') {
        if (!styles[sk].top && !styles[sk].bottom && !styles[sk].y) { styles[sk].y = 0 }
        if (!styles[sk].right && !styles[sk].left && !styles[sk].x) { styles[sk].x = 0 }
        val = `${styles[sk].top || styles[sk].y}rem ${styles[sk].right || styles[sk].x}rem ${styles[sk].bottom || styles[sk].y}rem ${styles[sk].left || styles[sk].x}rem`
      } else {
        val = styles[sk]
      }
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

  if(props.icon) {
    const i = document.createElement('i')
    i.classList.add('bi')
    i.classList.add(`bi-${props.icon}`)
    i.classList.add('icon')
    el.insertBefore(i, el.firstChild)
  }

  props.classList?.map(cls => el.classList.add(cls))
  if (props.contains) {
    props.contains.map(item => {
      el.appendChild(item)
    })
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

  if(props.events) {
    Object.keys(props.events).map(item => {
      el.addEventListener(item, props.events[item])
    })
  }

  return el
}