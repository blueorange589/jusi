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
  const anims = ['to']
  Object.keys(styles).map(sk => {
    let val = styles[sk]
    let assign = true
    if (typeof (styles[sk]) === 'object') {
      if (sk === 'padding') {
        val = addPadding(styles[sk])
      } else {
        // anims
        const ks = Object.keys(styles[sk])
        val = ''
        ks.map(k => {
          val += `${sk} {${k}: ${styles[sk][k]}}`
        })
        assign = false
      }
    }
    val = addUnit(sk, val)
    if(assign) {
      val = [kebabize(sk), val].join(': ')
    }
    stylesArr.push(val)
  })
  const stylesText = `{${stylesArr.join('; ')}}`
  return stylesText
}

const makeCSSLine = (tag, styles) => {
  const stylesText = makeCSSText(styles)
  return [tag, stylesText].join(' ')
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






