# jusi

JS only, app development framework

no HTML, no CSS. all handled by jusi!

```
jusi.layouts.login = (fields) => {
  return [
    main({
      contains: fields
    })
  ]
}
```

```
jusi.pages.about = jusi.layouts.default([
  pageHeader({
    title: 'About',
    actions: []
  }),
  jusi.els.formPostEdit
])
```

😘
