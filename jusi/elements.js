const createElement = (tag, props = {}) => {
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

  if (props.class) {
    if (props.class.includes(' ')) {
      const cl = props.class.split(' ')
      cl.map(cls => el.classList.add(cls))
    } else {
      el.classList.add(props.class)
    }
  }


  let { href, src, name, type, value, rows, cols, placeholder, multiple, checked, selected } = props
  if (!props.attrs) { props.attrs = {} }
  if (href) { props.attrs.href = href }
  if (src) { props.attrs.src = src }
  if (name) { props.attrs.name = name }
  if (type) { props.attrs.type = type }
  if (value) { props.attrs.value = value }
  if (rows) { props.attrs.rows = rows }
  if (cols) { props.attrs.cols = cols }
  if (placeholder) { props.attrs.placeholder = placeholder }
  if (multiple) { props.attrs.multiple = multiple }
  if (checked) { props.attrs.checked = checked }
  if (selected) { props.attrs.selected = selected }

  // console.log(props)
  if (props.contains) {
    if (typeof (props.contains) === 'object') {
      props.contains.map(item => {
        // console.log(item)
        el.appendChild(item)
      })
    } else {
      el.appendChild(props.contains)
    }
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


/* elements */
const header = (props) => createElement('header', props)
const main = (props) => createElement('main', props)
const footer = (props) => createElement('footer', props)

const form = (props) => createElement('form', props)
const option = (props) => createElement('option', props)
const optgroup = (props) => createElement('optgroup', props)
const label = (props) => createElement('label', props)
const legend = (props) => createElement('legend', props)

const table = (props) => createElement('table', props)
const thead = (props) => createElement('thead', props)
const tbody = (props) => createElement('tbody', props)
const tfoot = (props) => createElement('tfoot', props)
const tr = (props) => createElement('tr', props)
const th = (props) => createElement('th', props)
const td = (props) => createElement('td', props)


const ol = (props) => createElement('ol', props)
const ul = (props) => createElement('ul', props)
const li = (props) => createElement('li', props)
const embed = (props) => createElement('embed', props)
const iframe = (props) => createElement('iframe', props)
const article = (props) => createElement('article', props)
const img = (props) => createElement('img', props)
const span = (props) => createElement('span', props)
const div = (props) => createElement('div', props)
const button = (props) => createElement('button', props)
const h1 = (props) => createElement('h1', props)
const h2 = (props) => createElement('h2', props)
const h3 = (props) => createElement('h3', props)
const h4 = (props) => createElement('h4', props)
const h5 = (props) => createElement('h5', props)
const h6 = (props) => createElement('h6', props)
const hr = (props = {}) => createElement('hr', props)
const blockquote = (props) => createElement('blockquote', props)
const canvas = (props) => createElement('canvas', props)
const caption = (props) => createElement('caption', props)
const code = (props) => createElement('code', props)
const b = (props) => createElement('b', props)
const p = (props) => createElement('p', props)
const pre = (props) => createElement('pre', props)
const section = (props) => createElement('section', props)
const strong = (props) => createElement('strong', props)

/* components */
const a = (props) => {
  if (props.href) {
    if (!props.attrs) { props.attrs = {} }
    props.attrs.href = props.href
  }
  return createElement('a', props)
}

const fieldset = (props) => {
  if (!props.contains) { props.contains = [] }
  if (props.title) { props.contains.push(legend({ text: props.title })) }
  return createElement('fieldset', props)
}



const radio = (props) => {
  props.type = 'radio'
  return div({
    classList: ['form-field', 'form-radio'],
    contains: [
      createElement('input', props),
      label({
        class: 'radio-label',
        text: props.label,
      })
    ]
  })
}

const radios = (props) => {
  const rs = []
  Object.keys(props.options).map(optionKey => {
    rs.push(radio({label: props.options[optionKey], name: props.name, value: optionKey}))
  })
  return fieldset({
    title: props.title,
    contains: rs
  })
}

const checkbox = (props) => {
  props.type = 'checkbox'
  return div({
    classList: ['form-field', 'form-checkbox'],
    contains: [
      createElement('input', props),
      label({
        class: 'checkbox-label',
        text: props.label,
      })
    ]
  })
}

const checkboxes = (props) => {
  const rs = []
  Object.keys(props.options).map(optionKey => {
    rs.push(checkbox({label: props.options[optionKey], name: props.name, value: optionKey}))
  })
  return fieldset({
    title: props.title,
    contains: rs
  }) 
}

const createFormElement = (tag, props) => {
  const fieldItems = []
  if (tag === 'input' && !props.type) { props.type = 'text' }
  if (!props.name) {
    console.error('jusi: name attribute for form fields are required')
  }

  if (props.label) { fieldItems.push(label({ text: props.label })) }
  fieldItems.push(createElement(tag, props))

  return div({
    classList: ['form-field', `form-${tag}`],
    contains: fieldItems
  })
}


const input = (props) => createFormElement('input', props)
const select = (props) => {
  let opts = []
  if(props.options) {
    opts = jusi.el.replicateSelectOptions(props.options)
  }
  if(props.multiple) {
    console.log(props.name)

    if(!props.name.includes('[')) {
      props.name = `${props.name}[]`
    }
  }
  return createFormElement('select', {...props, ...{contains: opts}})
} 
const textarea = (props) => createFormElement('textarea', props)

const icon = (props) => {
  const fill = props.attrs?.fill || 'black'
  const name = props.name || 'android',
    i = createElement('i', { classList: [`bi-${name}`, 'icon'] })
  return i
}

const card = (slots) => {
  const cardHeader = div({ classList: ['card-header'], contains: slots.header })
  const cardBody = div({ classList: ['card-body'], contains: slots.body })
  const cardFooter = div({ classList: ['card-footer'], contains: slots.footer })
  return div({ classList: ['card'], contains: [cardHeader, cardBody, cardFooter] })
}

const grid = (props) => {
  return div({
    classList: ['grid'],
    contains: props.contains,
    children: props.children
  })
}

const row = (props) => {
  return div({
    ...{classList: ['row']},
    ...props
  })
}

const col = (props) => {
  return div({
    ...{classList: ['col']},
    ...props
  })
}

const container = (props) => {
  const cls = props.classList || []
  props.classList = [...cls, ...['container']]
  const el = div(props)
  return el
}
