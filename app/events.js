const events = {
  cardViewClick: () => {
    alert('view clicked')
  },
  getPosts: async() => {
    const r = await jusi.fetch('https://dummyjson.com/posts/?limit=10')
    jusi.el.render(jusi.els.grid, jusi.els.postCards(r.posts))
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
  resetUserAddForm: (e) => {
    e.currentTarget.closest('form').reset()
  }
}


