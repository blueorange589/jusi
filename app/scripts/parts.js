export const header = createElement('header', {
  contains: [
    container({
      classList: ['between'],
      contains: [
        img({ attrs: {src: './assets/img/logo1.svg'} }),
        div({ 
          classList: ['navmenu', 'hstack', 'gap-2'],
          contains: [
            button({icon: 'list'}),
            button({icon: 'box-arrow-right'})
          ]
         })
      ]
    })
  ]
})


export const footer = createElement('footer', {})
