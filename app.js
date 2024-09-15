jusi.pageHeader = div({ 
  classList: ['page-header'], 
  contains: [
    h1({ text: 'Homepage' }), 
    div({ 
      classList: ['hstack', 'gap-3'], 
      contains: [
        button({ text: 'Get Posts', events: {click: events.getPosts} }), 
        button({ text: 'Filter' })
      ] 
    })
  ] 
})


jusi.header = createElement('header', {
  contains: [
    container({
      classList: ['between'],
      contains: [
        img({ attrs: { src: './assets/img/logo1.svg' } }),
        div({
          classList: ['navmenu', 'hstack', 'gap-2'],
          contains: [
            button({ icon: 'list' }),
            button({ icon: 'box-arrow-right' })
          ]
        })
      ]
    })
  ]
})



jusi.footer = createElement('footer', {
  contains: [
    container({ text: 'site footer' })
  ]
})

jusi.gridFilter = div({
  classList: ['grid-filter'],
  contains: [
    h4({text: 'Filter results'}),
    input({type: 'text', name: 'title', label: 'Title'}),
    input({type: 'email', name: 'email', label: 'Email'}),
    hr()
  ]
})



jusi.menuItems = []
Object.keys(menu).map(item => {
  jusi.menuItems.push(li({
    contains: [a({ 
      text: menu[item].title, 
      attrs: { href: menu[item].link } 
    })]
  }))
})

jusi.mobileMenuList = ul({
  contains: jusi.menuItems
})

// const mobileMenuList = a({text: 'test'})

//  console.log(mobileMenuList)


jusi.mobileMenu = div({
  classList: ['mobilemenu'],
  contains: [
    img({attrs: {src: './assets/img/logo1.svg'}}),
    jusi.mobileMenuList
  ]
})









const card1 = card({
  header: [
    img({
      classList: ['rounded-top'],
      attrs: { src: './assets/img/example1.jpeg' }
    })
  ],
  body: [
    h5({ text: 'Laborum adipisicing nulla laboris anim.' }),
    span({ text: 'Qui eiusmod et eu voluptate excepteur ut id veniam. Fugiat laborum Lorem duis ex sint cupidatat. Labore sunt consequat Lorem ut culpa ea dolor laboris fugiat ea cupidatat exercitation ipsum ut. Commodo exercitation consequat laborum magna duis aute exercitation. Fugiat labore reprehenderit ullamco irure. Nulla officia nisi proident adipisicing.' })
  ],
  footer: [
    button({
      text: 'View',
      icon: 'bookmark',
      classList: ['w-full', 'button-lg'],
      events: { click: events.cardViewClick }
    })
  ]
})


const card2 = card({
  header: [
    img({ classList: ['rounded-top'], attrs: { src: './assets/img/example1.jpeg' } })
  ],
  body: [
    h5({ text: 'Sit aute sint ipsum est quis.' }), 
    span({ text: 'Ullamco cupidatat mollit dolor aute exercitation excepteur excepteur. Excepteur adipisicing reprehenderit anim reprehenderit do consectetur id sunt. Cupidatat minim nostrud laborum esse reprehenderit elit velit proident. Fugiat anim occaecat deserunt mollit do est consectetur ex officia commodo enim Lorem consequat ea. Ex nisi enim id quis est nulla aliquip laboris ad. Elit aliqua laboris ut proident minim esse est do velit dolor dolor eu commodo. Mollit non culpa fugiat ex ullamco.' })
  ],
  footer: [
    button({
      text: 'View',
      classList: ['w-full', 'rounded-bottom'],
      attrs: {
        style: {
          borderBottomLeftRadius: styles.borderRadius,
          borderBottomRightRadius: styles.borderRadius
        }
      }
    })
  ]
})

jusi.grid = grid({contains: [card1, card2]})
jusi.posts = div({classList:['posts'], contains: [jusi.grid]})
// console.log(dynamic.grid)

jusi.postCards = (posts) => {
  return posts.map(post => card({
    header: [
      img({
        classList: ['rounded-top'],
        attrs: { src: './assets/img/example1.jpeg' }
      })
    ],
    body: [
      h5({ text: post.title }),
      span({ text: post.body })
    ],
    footer: [
      button({
        text: 'View',
        icon: 'bookmark',
        classList: ['w-full', 'button-lg'],
        events: { click: events.cardViewClick }
      })
    ]
  }))
}

jusi.pageContent = div({
  classList: ['page-content'],
  contains: [jusi.posts]
})
 


jusi.loginForm = div({
  classList: ['login-form'],
  contains: [
    img({ attrs: { src: './assets/img/logo1.svg' } }),
    input({type: 'email', label: 'Email'}),
    input({type: 'password', label: 'Password'}),
    button({text: 'Login', attrs:{ href:'index'}, events: {click: events.navigate}})
  ]
})