/* 
1. In order to make accessible by events, all components should be registered under jusi.els
For example: jusi.els.componentName

2. Child components can be directly added in contains: field of a parent component. 
For example: contains[span(...)]

However, if you will need to access child component later, you should register it under jusi.els
For example: jusi.els.childComponent = span(...)
Then in parent component, contains: [jusi.els.childCompoenent]
*/
jusi.els.pageHeader = div({
  classList: ['page-header'],
  contains: [
    h1({ text: 'Homepage' }),
    div({
      classList: ['hstack', 'gap-3'],
      contains: [
        button({ text: 'Get Posts', events: { click: events.getPosts } }),
        button({ text: 'Filter', events: { click: events.showAddUser } })
      ]
    })
  ]
})


jusi.els.navBar = div({
  classList: ['navbar', 'hstack', 'gap-2'],
  contains: [
    button({
      icon: 'moon-stars',
      attrs: { theme: 'dark' },
      events: { click: events.switchTheme }
    }),
    button({ icon: 'list' }),
    a({
      icon: 'box-arrow-right',
      href: 'index.html#login'
    })
  ]
})

jusi.els.header = header({
  contains: [
    container({
      classList: ['between'],
      contains: [
        img({ attrs: { src: './assets/img/logo1.svg' } }),
        jusi.els.navBar
      ]
    })
  ]
})


jusi.els.footer = footer({
  contains: [
    container({ text: 'site footer' })
  ]
})

jusi.els.gridFilter = div({
  classList: ['grid-filter'],
  contains: [
    h4({ text: 'Filter results' }),
    div({
      class: 'hstack gap-3',
      contains: [
        input({ type: 'text', name: 'title', label: 'Title' }),
        input({ type: 'email', name: 'email', label: 'Email' }),
      ]
    }),
    hr()
  ]
})




jusi.els.menuItems = []
Object.keys(menu).map(item => {
  jusi.els.menuItems.push(li({
    contains: [a({
      text: menu[item].title,
      attrs: { href: menu[item].link }
    })]
  }))
})

jusi.els.mobileMenuList = ul({
  contains: jusi.els.menuItems
})

// const mobileMenuList = a({text: 'test'})

//  console.log(mobileMenuList)


jusi.els.mobileMenu = div({
  classList: ['mobilemenu'],
  contains: [
    img({ attrs: { src: './assets/img/logo1.svg' } }),
    jusi.els.mobileMenuList
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
          borderBottomLeftRadius: jusi.styles.borderRadius,
          borderBottomRightRadius: jusi.styles.borderRadius
        }
      }
    })
  ]
})

jusi.els.grid = grid({ contains: [card1, card2] })
jusi.els.posts = div({ classList: ['posts'], contains: [jusi.els.grid] })
// console.log(dynamic.grid)

jusi.els.postCards = (posts) => {
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

jusi.els.pageContent = div({
  classList: ['page-content'],
  contains: [jusi.els.posts]
})


jusi.els.loginForm = div({
  classList: ['login-form'],
  contains: [
    img({ attrs: { src: './assets/img/logo1.svg' } }),
    input({ type: 'email', name: 'email', label: 'Email' }),
    input({ type: 'password', name: 'password', label: 'Password' }),
    button({
      text: 'Login',
      attrs: { href: 'index' },
      events: { click: events.navigate }
    }),
    a({ text: 'Homepage', href: 'index.html#index' })
  ]
})


jusi.els.userModal = jusi.components.modal({
  header: [h3({ text: 'Add User' })],
  body: [input({ name: 'first_name', placeholder: 'First name' })],
  footer: [
    button({ text: 'Reset', classList: ['disabled'] }),
    button({ text: 'Submit', events: { click: events.addUser } })
  ]
})

jusi.els.navMenu = jusi.components.dropdown({
  text: 'Menu', items: [
    ul({
      contains: [
        li({ contains: [a({ text: 'Home', href: 'index.html#index' })] }),
        li({ contains: [a({ text: 'Blog', href: 'index.html#blog' })] }),
        li({ contains: [a({ text: 'About', href: 'index.html#about' })] }),
        li({ contains: [a({ text: 'Login', href: 'index.html#login' })] }),
      ]
    })
  ]
})
jusi.el.addFirst(jusi.els.navBar, jusi.els.navMenu)