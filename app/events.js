const events = {
  cardViewClick: () => {
    alert('view clicked')
  },
  getPosts: async() => {
    const r = await jusi.fetch('https://dummyjson.com/posts/?limit=10')
    jusi.el.render({
      target: jusi.els.grid,
      render: jusi.els.postCard,
      data: r.posts
    })
  },
  fillTable: async() => {
    const r = await jusi.fetch('https://dummyjson.com/posts/?limit=10')
    jusi.el.renderTable({
      target: jusi.els.postsTable,
      data: r.posts,
      columns: {title: 'Title', views: 'Views', userId: 'User ID'}
    })
  },
  fillForm: async() => {
    const r = await jusi.fetch('https://dummyjson.com/posts/?limit=10')
    r.posts[0].country = 'US'
    r.posts[0].countries = ['AL', 'DE', 'FR', 'TR']
    jusi.el.renderForm({
      target: jusi.els.formPostEdit,
      data: r.posts[0]
    })
  },
  navigate: (e) => {
    const href = e.currentTarget.getAttribute("href")
    console.log(e.currentTarget)
    jusi.page.push(href)
  },
  switchTheme: (e) => {
    const theme = jusi.theme.getName()
    const t = theme === 'dark' ? 'main' : 'dark'
    jusi.theme.use(t)
  },
  showAddUser: (e) => {
    jusi.el.open(jusi.els.userModal)
  },
  submitUserAdd: (e) => {
    const data = new FormData(e.currentTarget);
    let output = "";
    for (const entry of data) {
      output = `${output}${entry[0]}=${entry[1]}\r`;
    }
    console.log(output)
    e.preventDefault();
  },
  resetformPostEdit: (e) => {
    e.currentTarget.closest('form').reset()
  },
  selectPage: (e) => {
    alert(e.currentTarget.value)
  }
}


