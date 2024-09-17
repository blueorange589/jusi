jusi.layouts.default = (fields) => {
  return [
    jusi.els.header,
    main({
      contains: [
        container({
          contains: fields
        })
      ]
    }),
    jusi.els.footer
  ]
}

jusi.layouts.login = (fields) => {
  return [
    main({
      contains: fields
    })
  ]
}