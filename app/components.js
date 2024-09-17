/* 
1. In order to make accessible by events, all components should be registered under jusi.els
For example: jusi.els.componentName

2. Child components can be directly added in contains: field of a parent component. 
For example: contains[span(...)]

However, if you will need to access child component later, you should register it under jusi.els
For example: jusi.els.childComponent = span(...)
Then in parent component, contains: [jusi.els.childCompoenent]
*/
const pageHeader = (props) => div({
  classList: ['page-header'],
  contains: [
    h1({ text: props.title }),
    div({
      classList: ['hstack', 'gap-3'],
      contains: props.actions
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





// const mobileMenuList = a({text: 'test'})

//  console.log(mobileMenuList)












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

jusi.els.postCard = (post) => {
  return card({
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
  })
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



const menuItems = (data) => {
  return jusi.el.replicate({
    render: (item) => li({ contains: [a(item)] }),
    data
  })
}

jusi.els.navMenu = jusi.components.dropdown({
  text: 'Menu',
  items: [
    ul({ contains: menuItems(jusi.options.menu) })
  ]
})


jusi.els.mobileMenu = div({
  classList: ['mobilemenu'],
  contains: [
    img({ attrs: { src: './assets/img/logo1.svg' } }),
    ul({ contains: menuItems(jusi.options.menu) })
  ]
})



jusi.el.addFirst(jusi.els.navBar, jusi.els.navMenu)








const userDataColumns = { username: 'Username', first_name: 'First name', last_name: 'Last name' }
const userData = [
  { username: 'joetto', first_name: 'Joe', last_name: 'Doe', gender: 'Male', age: 30 },
  { username: 'mrs123', first_name: 'Jenny', last_name: 'Foe', gender: 'Female', age: 28 }
]
jusi.els.postsTable = jusi.components.table({ class: 'striped hover' })
// jusi.el.renderTable(jusi.els.usersTable, userDataColumns, userData)
jusi.el.addFirst(jusi.els.pageContent, jusi.els.postsTable)


jusi.els.formPostEdit = form({
  id: 'user-add-form',
  events: { submit: events.submitUserAdd },
  contains: [
    button({ text: 'Fill form', type: 'button', events: { click: events.fillForm } }),
    row({
      contains: [
        input({ name: 'title', label: 'Title' }),
        input({ name: 'views', label: 'Views' }),
        input({ name: 'userId', label: 'User ID' })
      ]
    }),
    radios({ title: 'IDs', name: 'id', options: { 1: 'ID 1', 2: 'ID 2' } }),
    checkboxes({ title: 'Tags', name: 'tags[]', options: { 'french': 'French', 'history': 'History', 'fiction': 'Fiction', 'english': 'English', 'american': 'American', 'crime': 'Crime' } }),
    radios({ title: 'Gender', name: 'gender', options: jusi.options.gender }),
    checkbox({ label: 'Do you agree?', name: 'agree' }),
    select({label: 'Country', name: 'country', options: jusi.options.countries }),
    select({label: 'Countries', name: 'countries', options: jusi.options.countries, multiple: true }),
    div({
      class: 'between',
      contains: [
        button({ text: 'Reset', type: 'reset', classList: ['disabled'] }),
        button({ text: 'Submit', type: 'submit' })
      ]
    })
  ]
})
