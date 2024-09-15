/* elements */
const header = (props) => createElement('header', props)
const main = (props) => createElement('main', props)
const footer = (props) => createElement('footer', props)
const form = (props) => createElement('form', props)

const select = (props) => createElement('select', props)
const option = (props) => createElement('option', props)
const textarea = (props) => createElement('textarea', props)
const ol = (props) => createElement('ol', props)
const ul = (props) => createElement('ul', props)
const li = (props) => createElement('li', props)
const label = (props) => createElement('label', props)
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
const a = (props) => createElement('a', props)
const b = (props) => createElement('b', props)
const p = (props) => createElement('p', props)
const pre = (props) => createElement('pre', props)
const section = (props) => createElement('section', props)
const strong = (props) => createElement('strong', props)

/* components */
const divider = (props = {}) => {

}

const input = (props) => {
  const fieldItems = []
  if(props.label) { fieldItems.push(label({text: props.label}))}
  let {type, name, placeholder} = props
  placeholder = placeholder || ''
  props.attrs = {type, name, placeholder}
  fieldItems.push(createElement('input', props))
  const f = createElement('fieldset', {
    contains: fieldItems
  })
  return f
}

const icon = (props) => {
  const fill = props.attrs?.fill || 'black'
  const name = props.name || 'android',
    i = createElement('i', { classList: [`bi-${name}`, 'icon']})
  return i
}

const table = (props) => {
  // columns: {title: 'Title', created_at: 'Date Created'}
  // data: [{title: 'Ghostbusters', link: 'https://movie.com', created_at: '2019-02-23T23:23:23Z'}]
  // options: responsive, zebra, bordered, hover
  const colHeads = []
  for (i = 0; i < props.columns.length; i++) {
    const colHead = createElement('th', { text: props.columns[i] })
    colHeads.push[colHead]
  }
  const theadRow = createElement('tr', { contains: colHeads }),
    thead = createElement('thead', { contains: theadRow })
  return 'table'
}

const card = (slots) => {
  const cardHeader = div({ classList: ['card-header'], contains: slots.header })
  const cardBody = div({ classList: ['card-body'], contains: slots.body })
  const cardFooter = div({ classList: ['card-footer'], contains: slots.footer })
  return div({ classList: ['card'], contains: [cardHeader, cardBody, cardFooter] })
}

const grid = (props) => {
  const el = div({ 
    classList: ['grid'], 
    contains: props.contains,
    children: props.children
  })
  return el
}

const container = (props) => {
  const cls = props.classList || []
  props.classList = [...cls, ...['container']]
  const el = div(props)
  return el
}
