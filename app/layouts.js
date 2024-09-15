jusi.layouts = {}
jusi.layouts.default = (fields) => {
  return [
    jusi.header,
    main({
      contains: [
        container({
          contains: fields
        })
      ]
    }),
    jusi.footer
  ]
}

jusi.layouts.login = (fields) => {
  return [
    main({
      contains: fields
    })
  ]
}