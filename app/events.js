const events = {
  cardViewClick: () => {
    alert('view clicked')
  },
  getPosts: async() => {
    const r = await request('https://dummyjson.com/posts/?limit=10')
    render(jusi.grid, jusi.postCards(r.posts)) 
  },
  navigate: (e) => {
    console.log()
    const href = e.target.getAttribute("href")
    jusi.page.push(href)
  }
}


