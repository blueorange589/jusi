/* ELEMENTS */
jusi.el = {}
jusi.el.addTo = (target, item) => target.append(item)
jusi.el.addFirst = (target, item) => target.prepend(item)
jusi.el.addLast = (target, item) => target.append(item)
jusi.el.addBefore = (target, item) => target.before(item)
jusi.el.addAfter = (target, item) => target.after(item)
jusi.el.render = (renderOptions) => {
  renderOptions.target.innerHTML = ""
  renderOptions.data.map(item => {
    const el = renderOptions.render(item)
    renderOptions.target.appendChild(el)
  })
  return renderOptions.target
}

jusi.el.replicate = (renderOptions) => {
  const items = []
  renderOptions.data.map(item => {
    const el = renderOptions.render(item)
    items.push(el)
  })
  return items
}

jusi.el.replicateSelectOptions = (data) => {
  const items = []
  Object.keys(data).map(key => {
    const item = option({ value: key, text: data[key] })
    items.push(item)
  })
  return items
}

jusi.el.renderTable = (renderOptions) => {
  const { target, data, columns } = renderOptions,
    thead = target.getElementsByTagName("thead")[0],
    theadTR = thead.getElementsByTagName("tr")[0],
    tbody = target.getElementsByTagName("tbody")[0]

  tbody.innerHTML = ""
  colKeys = Object.keys(columns),
    numCols = colKeys.length,
    numRows = data.length

  colKeys.map((ck, c) => {
    theadTR.append(th({ text: columns[ck] }))
  })

  let rowTemplate = tr({})
  data.map((set, i) => {
    let row = rowTemplate.cloneNode(true)
    colKeys.map((cck, ci) => {
      row.append(td({ text: set[colKeys[ci]] }))
    })
    tbody.append(row)
  })
}

jusi.el.renderForm = (renderOptions) => {
  const { target, data } = renderOptions,
    form = new FormData(target),
    inputs = target.getElementsByTagName('input'),
    selects = target.getElementsByTagName('select'),
    textareas = target.getElementsByTagName('textarea'),
    fields = [...inputs, ...selects, ...textareas]
  // console.log(data)
  // console.log(fields)
  fields.map(field => {
    const name = field.getAttribute('name'),
      type = field.getAttribute('type'),
      value = field.getAttribute('value'),
      fname = name.replace('[', '').replace(']', '')
      if (data[fname]) {
      // console.log(fname, data[fname])  

      switch (type) {
        case 'radio':
          if (value == data[fname]) {
            field.setAttribute('checked', true)
          }
          break;
        case 'checkbox':
          // console.log(value, data[fname])
          if (data[fname].includes(value)) {
            field.setAttribute('checked', true)
          }
          break;
        default:
          // console.log(type, name , value, data[name])
          field.value = data[fname]
          // field.setAttribute('value', data[fname])
      }
    }
  })

}

jusi.el.parent = (item, selector) => item.closest(selector)
jusi.el.children = (item) => item.children
jusi.el.hide = (item) => item.style.display = 'none'
jusi.el.show = (item) => item.style.display = 'block'
jusi.el.invisible = (item) => item.style.visibility = 'hidden'
jusi.el.visible = (item) => item.style.visibility = 'visible'
jusi.el.close = (item) => item.remove()
jusi.el.open = (item) => document.body.appendChild(item)
jusi.el.clone = (item) => item.cloneNode(true)



jusi.els = {}
jusi.els.body = document.body
jusi.els.app = document.getElementById('app')
