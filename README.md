# jusi 🦩

JS only, app development framework

no HTML, no CSS. all handled by jusi!

### Layouts
```
jusi.layouts.login = (fields) => {
  return [
    main({
      contains: fields
    })
  ]
}
```

### Pages
```
jusi.pages.about = jusi.layouts.default([
  pageHeader({
    title: 'About',
    actions: []
  }),
  jusi.els.formPostEdit
])
```

### Components
```
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
```

😘
--
roadmap: 

reactivity implementation

PWA imp.

--

public.
