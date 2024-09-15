jusi.layouts = {}
jusi.layouts.default = (fields) => {
  return [
    jusi.el.header,
    main({
      contains: [
        container({
          contains: fields
        })
      ]
    }),
    jusi.el.footer
  ]
}

jusi.layouts.login = (fields) => {
  return [
    main({
      contains: fields
    })
  ]
}