const events = {
  cardViewClick: () => {
    alert('view clicked')
  },
  getPosts: async() => {
    const r = await request('https://dummyjson.com/posts/?limit=10')
    render(jusi.el.grid, jusi.el.postCards(r.posts))
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
  }
}


