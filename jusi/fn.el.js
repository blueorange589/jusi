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
}

jusi.el.renderSelectOptions = (target, items) => {
  target.innerHTML = ""
  Object.keys(items).map(item => {
    target.appendChild(option({text: items[item], attrs: {value: item}}))
  })
}

jusi.el.renderTable = (target, columns, data) => {
  const thead = target.getElementsByTagName("thead")[0],
  theadTR = thead.getElementsByTagName("tr")[0],
  tbody = target.getElementsByTagName("tbody")[0]

  tbody.innerHTML = ""
  colKeys = Object.keys(columns),
  numCols = colKeys.length,
  numRows = data.length

  colKeys.map((ck, c) => {
    theadTR.append(th({text: columns[ck]}))
  })

  let rowTemplate = tr({})
  data.map((set, i) => {
    let row = rowTemplate.cloneNode(true)
    colKeys.map((cck, ci) => {
      row.append(td({text: set[colKeys[ci]]}))
    })
    tbody.append(row)
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
