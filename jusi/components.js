jusi.components = {}

/* Loading Overlay */
jusi.components.loadingOverlay = div({
  classList: ['loading-overlay'],
  contains: [div({
    classList: ['loading']
  })]
})
//jusi.el.addTo(jusi.els.body, jusi.components.loadingOverlay) // add to body for fullscreen overlay

/* Close button */
jusi.components.closeButton = (clickFn) => {
  return span({ text: 'X', classList: ['close-btn'], events: { click: clickFn } })
}

/* Modal */
jusi.components.modal = (slots = {}) => {
  const modal = div({ classList: ['modal-overlay'] })
  slots.header.push(jusi.components.closeButton(() => {
    modal.remove()
  }))

  jusi.el.addTo(modal, div({
    classList: ['modal'],
    contains: [
      div({ classList: ['modal-header'], contains: slots.header }),
      div({ classList: ['modal-body'], contains: slots.body }),
      div({ classList: ['modal-footer'], contains: slots.footer }),
    ]
  }))
  return modal
}


/* Dropdown */
jusi.components.dropdown = (props) => {
  const btnO = {class: 'dropbtn'}
  let items = []

  if(props.icon) { btnO.icon = props.icon }
  if(props.text) { btnO.text = props.text }
  if(props.title) { items.push(h5({text: props.title }))}
  const ddItems = [...items, ...props.items]
  // console.log(props.items, ddItems) 
  return div({ 
    classList: ['dropdown'],
    contains: [
      button(btnO),
      div({class: 'dropdown-content', contains: ddItems})
    ]
  })
}

/* Table */
jusi.components.table = (props) => {
  return table({
    ...props,
    contains: [
      thead({ contains: [tr({})]}),
      tbody({ contains: [tr({})]})
    ]
  })
}

/* Pagination */


/* Toast */